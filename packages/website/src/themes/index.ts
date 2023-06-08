import { ThemeConfig } from "antd/es/config-provider"

const theme: ThemeConfig = {
  inherit: false,
  components: {
    Menu: {
      padding: 0,
      colorBorderBg: "unset",
      colorActiveBarHeight: 0,
      colorPrimaryBg: "unset",
    },
    Layout: {
      colorBgLayout: "unset",
      colorBgHeader: "unset",
      colorBgBody: "unset",
    },
  },
}

export default theme
