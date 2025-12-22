import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: (error: string) => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      remove: (widgetId: string) => void;
      ready: (callback: () => void) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = '0x4AAAAAACIMDg9KI4y7Ec1H';
// const TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

export default function ResumePage(): React.ReactElement {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Load Turnstile script with explicit rendering (no async/defer when using turnstile.ready)
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad';

    // Define the onload callback before adding the script
    (window as any).onTurnstileLoad = () => {
      setLoading(false);
      if (containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => {
            console.log('Turnstile verified:', token);
            setVerified(true);
          },
          'error-callback': (errorCode) => {
            console.error('Turnstile error:', errorCode);
            setError('Verification failed. Please refresh and try again.');
          },
          theme: 'auto',
        });
      }
    };

    script.onerror = () => {
      setLoading(false);
      setError('Failed to load verification. Please refresh the page.');
    };

    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
      }
      delete (window as any).onTurnstileLoad;
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout title="Resume" description="Michael Monaghan's Resume">
      <main className={styles.container}>
        <h1>Resume</h1>

        {!verified ? (
          <div className={styles.verificationSection}>
            <p>Please verify you're human to access my resume.</p>
            {loading && <p>Loading verification...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div ref={containerRef} />
          </div>
        ) : (
          <div className={styles.downloadSection}>
            <p>Thanks for verifying! Here are my resume links:</p>
            <div className={styles.downloadLinks}>
              <a
                href="https://drive.google.com/file/d/1Bt4VHbK398gTUR3xLZwgRHgFlT52yfpg/view?usp=sharing"
                className={styles.downloadButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
              <a
                href="https://docs.google.com/document/d/1hmPClCKn0F2TIkFukE8I10qzVP1VvbS851sNXd_5k4s/edit?usp=sharing"
                className={styles.downloadButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Docs
              </a>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
