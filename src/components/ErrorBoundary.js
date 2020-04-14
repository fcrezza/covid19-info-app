import React from 'react'
import Container from './Container'
import ErrorMessage from './ErrorMessage'

class ErrorBoundary extends React.Component {
  state = {hasError: false}

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ErrorMessage />
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
