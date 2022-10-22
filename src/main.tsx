import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './AppRoot';
import './index.css';

// Wrap in main() so that tests can import this file
export function main() {
  const rootDiv = document.getElementById('root');
  if (rootDiv) {
    createRoot(document.getElementById('root') as HTMLElement).render(
      <StrictMode>
        <AppRoot />
      </StrictMode>
    );
  }
}

main();
