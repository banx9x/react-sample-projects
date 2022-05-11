import React, { ErrorInfo } from 'react';

import type { TerminalProps } from 'components';

interface ErrorBoundaryProps {
  fallback: React.FC<TerminalProps>;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  info?: ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      '%cOops! Something wrong :(',
      'color: #ff3131; font-size: 60px'
    );
    console.log('Error:', error);
    console.log('ErrorInfo:', info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <this.props.fallback code={this.state.error} /> || (
          <div className='text-center'>Oops! Something wrong :(</div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
