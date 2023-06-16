/**
 * ErrorBoundary Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {ReactNode} children - The children elements to be wrapped by the ErrorBoundary.
 * 
 * @example
 * // Example usage
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 * 
 * @overview The ErrorBoundary is a component that catches JavaScript errors anywhere in their child component tree, 
 * logs those errors, and displays a fallback UI instead of the component tree that crashed. It's a simple implementation 
 * of the Error Boundary concept in React for handling errors in a component hierarchy.
 * 
 * @lastUpdated 2023-06-14
 * 
 */


import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Internal error with component</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
