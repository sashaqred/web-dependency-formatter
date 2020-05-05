import React, { Component, ReactNode } from 'react';

interface AppErrorsProps {
  children: ReactNode;
}

interface AppErrorsState {
  hasError: boolean;
}

export class AppErrors extends Component<AppErrorsProps, Readonly<AppErrorsState>> {
  constructor(props: AppErrorsProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Something went wrong. Please reload the page</h1>;
    }

    const { children } = this.props;
    return children;
  }
}
