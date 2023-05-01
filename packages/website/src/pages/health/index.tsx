import { Result, Typography } from "antd"

const Health = () => {
  const { buildTime } = { buildTime: "N/A" }

  return (
    <Result status={"success"} title={"Status page"}>
      <Typography.Text>{`Build Time: ${buildTime}`}</Typography.Text>
    </Result>
  )
}

export { Health as default }
