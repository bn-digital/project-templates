import { type Metric, onCLS, onFID, onLCP } from 'web-vitals'
function reportWebVitals() {
  function sendToAnalytics(metric: Metric) {
    // Replace with whatever serialization method you prefer.
    // Note: JSON.stringify will likely include more data than you need.
    const body = JSON.stringify(metric)

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    ;(navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) || fetch('/analytics', { body, method: 'POST', keepalive: true })
  }

  onCLS(sendToAnalytics)
  onFID(sendToAnalytics)
  onLCP(sendToAnalytics)
}

export { reportWebVitals as default }
