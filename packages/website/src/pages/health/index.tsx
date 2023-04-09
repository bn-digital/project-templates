import { Result, Typography } from "antd"
import meta from "~build/meta"

const Health = () => {
  const { buildTime } = meta as any

  return (
    <Result status={"success"} title={"Status page"}>
      <Typography.Text>{`Build Time: ${buildTime}`}</Typography.Text>
    </Result>
  )
}

export { Health as default }
