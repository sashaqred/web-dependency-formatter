import React, { ReactNode } from 'react';
import { Global } from '@emotion/core';
import css from '@emotion/css/macro';

interface AppStylesProps {
  children: ReactNode;
}

const styles = css`
  :root {
    font-size: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    font-size: 1rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export function AppStyles({ children }: AppStylesProps) {
  return (
    <>
      <Global styles={styles} />
      {children}
    </>
  );
}
