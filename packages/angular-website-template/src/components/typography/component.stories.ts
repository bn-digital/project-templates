import {Meta, Story} from '@storybook/angular';
import {NzTypographyComponent} from "ng-zorro-antd/typography";

export default {
  title: 'WebCore/Typography',
  component: NzTypographyComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<NzTypographyComponent> = (args) => ({
  props: args,
  template: `
 <h1 nz-typography>Level 1 Title</h1>
  `,
  moduleMetadata: {
    declarations: [
      NzTypographyComponent,
    ],
  },
});

export const Default = Template.bind({});
Default.args = {};
