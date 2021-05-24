import {themes, create} from "@storybook/theming"

export default create({
  ...themes.light,
  appBg: "#ffffff",
  textColor: "#2f3033",
  gridCellSize: 24,
  inputBorderRadius: "4px",
  brandTitle: "Angular",
  brandUrl: "/",
  brandImage: "https://cdn.worldvectorlogo.com/logos/angular-3.svg",
})
