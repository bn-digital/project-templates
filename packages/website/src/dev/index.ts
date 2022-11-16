import { lazy } from 'react'

import { useInitial } from './useInitial'

const ComponentPreviews = lazy(() => import('./Previews'))

export { ComponentPreviews, useInitial }
