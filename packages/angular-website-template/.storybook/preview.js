import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { configureCompodoc, withCompodoc } from "storybook-addon-compodoc";
import { addDecorator } from "@storybook/angular";

setCompodocJson(docJson);
configureCompodoc({});
addDecorator(withCompodoc());
const controls = {
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
};
export const parameters = {
  viewMode: "docs",
  controls,
  actions: { argTypesRegex: "^on[A-Z].*" },
};
