import { Result } from 'antd'
import { Component, ErrorInfo, PropsWithChildren } from 'react'

type Props = PropsWithChildren
type State = { hasError: boolean; errorInfo?: ErrorInfo }

class ErrorBoundary<T extends Props> extends Component<T, State> {
  private error?: Error

  constructor(props: T) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.error = error
    // You can also log the error to an error reporting service
    console.error(error.message, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Result title={this.error?.name} subTitle={this.error?.message} status='error' />
    }

    return this.props.children
  }
}

export { ErrorBoundary }
