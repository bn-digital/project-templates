import React from "react"
import { useInitial } from "./useInitial"

const ComponentPreviews = React.lazy(() => import("./Previews"))

export { ComponentPreviews, useInitial }
