import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectsPage from '../index';

describe('ProjectsPage', () => {
  it('renders the page title and description', () => {
    render(<ProjectsPage />);
    
    expect(screen.getByText('Projects & Documentation')).toBeInTheDocument();
    expect(screen.getByText("A list of projects and work that I've done with associated documentation.")).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<ProjectsPage />);
    
    // Check for project names
    expect(screen.getByText('TifCo')).toBeInTheDocument();
    expect(screen.getByText('ggob')).toBeInTheDocument();
    expect(screen.getByText('what.ecom')).toBeInTheDocument();
    expect(screen.getByText('Clonotion')).toBeInTheDocument();
    expect(screen.getByText('QLI - Quiz Line Interface')).toBeInTheDocument();
    expect(screen.getByText('Choose Your Own Adventure')).toBeInTheDocument();
    expect(screen.getByText('Go/shorten')).toBeInTheDocument();
  });

  it('displays all unique tags as filter buttons', () => {
    render(<ProjectsPage />);
    
    // Check for some common tags
    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Typescript' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Golang' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next.js' })).toBeInTheDocument();
  });

  it('filters projects when a tag is selected', async () => {
    const user = userEvent.setup();
    render(<ProjectsPage />);
    
    // Initially all projects should be visible
    expect(screen.getByText('TifCo')).toBeInTheDocument();
    expect(screen.getByText('Go/shorten')).toBeInTheDocument();
    
    // Click on Golang tag
    const golangButton = screen.getByRole('button', { name: 'Golang' });
    await user.click(golangButton);
    
    // Only Golang projects should be visible
    expect(screen.queryByText('TifCo')).not.toBeInTheDocument();
    expect(screen.getByText('QLI - Quiz Line Interface')).toBeInTheDocument();
    expect(screen.getByText('Choose Your Own Adventure')).toBeInTheDocument();
    expect(screen.getByText('Go/shorten')).toBeInTheDocument();
  });

  it('applies active styling to selected tags', async () => {
    const user = userEvent.setup();
    render(<ProjectsPage />);
    
    const reactButton = screen.getByRole('button', { name: 'React' });
    
    // Initially not active
    expect(reactButton.className).not.toContain('filterButtonActive');
    
    // Click to activate
    await user.click(reactButton);
    expect(reactButton.className).toContain('filterButtonActive');
    
    // Click again to deactivate
    await user.click(reactButton);
    expect(reactButton.className).not.toContain('filterButtonActive');
  });

  it('allows multiple tags to be selected', async () => {
    const user = userEvent.setup();
    render(<ProjectsPage />);
    
    const reactButton = screen.getByRole('button', { name: 'React' });
    const typescriptButton = screen.getByRole('button', { name: 'Typescript' });
    
    // Select both tags
    await user.click(reactButton);
    await user.click(typescriptButton);
    
    // Both should be active
    expect(reactButton.className).toContain('filterButtonActive');
    expect(typescriptButton.className).toContain('filterButtonActive');
    
    // Projects with either tag should be visible
    expect(screen.getByText('TifCo')).toBeInTheDocument(); // Has both
    expect(screen.getByText('ggob')).toBeInTheDocument(); // Has Typescript
    expect(screen.getByText('Clonotion')).toBeInTheDocument(); // Has both
    
    // Projects with neither tag should not be visible
    expect(screen.queryByText('QLI - Quiz Line Interface')).not.toBeInTheDocument(); // Golang only
  });

  it('renders project cards', () => {
    render(<ProjectsPage />);
    
    // Just verify the cards are rendered
    expect(screen.getByText('TifCo')).toBeInTheDocument();
    expect(screen.getByText('ggob')).toBeInTheDocument();
  });
});