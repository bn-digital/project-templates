import { Result } from 'antd'
import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<Partial<ReactNode>>
type State = { hasError: boolean }

class ErrorBoundary<T extends Props> extends Component<T, State> {
  constructor(props: T) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error.message, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Result status={'error'} />
    }

    return this.props.children
  }
}

export { ErrorBoundary }
