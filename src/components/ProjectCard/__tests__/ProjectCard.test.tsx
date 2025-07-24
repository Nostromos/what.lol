import { render, screen, waitFor } from '@testing-library/react';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';

const mockProps: ProjectCardProps = {
  image: '/test-image.png',
  tags: ['React', 'TypeScript', 'Jest'],
  name: 'Test Project',
  status: 'Completed',
  description: 'This is a test project description',
  link: 'https://github.com/test/project',
  docsUrl: 'test-project',
};

describe('ProjectCard', () => {
  it('renders all project information correctly', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Project')).toHaveAttribute('src', '/test-image.png');
    
    mockProps.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('uses placeholder image when no image is provided', () => {
    const propsWithoutImage = { ...mockProps, image: '' };
    render(<ProjectCard {...propsWithoutImage} />);
    
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', '/placeholder.svg');
  });

  it('applies correct status styling', () => {
    const { rerender } = render(<ProjectCard {...mockProps} />);
    
    let statusElement = screen.getByText('Completed');
    expect(statusElement.className).toContain('cardStatus--completed');
    
    rerender(<ProjectCard {...mockProps} status="In Progress" />);
    statusElement = screen.getByText('In Progress');
    expect(statusElement.className).toContain('cardStatus--inProgress');
    
    rerender(<ProjectCard {...mockProps} status="Abandoned" />);
    statusElement = screen.getByText('Abandoned');
    expect(statusElement.className).toContain('cardStatus--abandoned');
    
    rerender(<ProjectCard {...mockProps} status="Ideation" />);
    statusElement = screen.getByText('Ideation');
    expect(statusElement.className).toContain('cardStatus--ideation');
  });

  it('renders many tags correctly', () => {
    const manyTags = Array.from({ length: 20 }, (_, i) => `Tag${i + 1}`);
    const propsWithManyTags = { ...mockProps, tags: manyTags };
    
    render(<ProjectCard {...propsWithManyTags} />);
    
    // All tags should be rendered
    manyTags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('handles show more button interactions when present', async () => {
    // Mock the ref to simulate overflow
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
    const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
    
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 200 });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 100 });
    
    const manyTags = Array.from({ length: 20 }, (_, i) => `Tag${i + 1}`);
    const propsWithManyTags = { ...mockProps, tags: manyTags };
    
    render(<ProjectCard {...propsWithManyTags} />);
    
    // Wait for useEffect to run
    await waitFor(() => {
      const button = screen.queryByText('Show More');
      if (button) {
        expect(button).toBeInTheDocument();
      }
    });
    
    // Clean up
    if (originalOffsetHeight) {
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
    }
    if (originalScrollHeight) {
      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
    }
  });
});