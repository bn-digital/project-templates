import { Spin, SpinProps } from "antd"
import { FC } from "react"

const Loader: FC<SpinProps> = props => <Spin size={"small"} {...props} />

export { Loader }
