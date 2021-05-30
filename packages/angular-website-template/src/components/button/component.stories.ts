import { Meta, Story } from '@storybook/angular'
import { NzButtonComponent, NzButtonType } from 'ng-zorro-antd/button'
import { NzIconDirective } from 'ng-zorro-antd/icon/icon.directive'

export default {
  title: 'WebCore/Button',
  component: NzButtonComponent,
  subcomponents: { NzButtonComponent },
  argTypes: {
    nzLoading: { name: 'Loading', control: { type: 'boolean' } },
    disabled: { name: 'Disabled', control: { type: 'boolean' } },
    nzSize: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['large', 'default', 'small'],
      },
    },
    nzType: {
      name: 'Type',
      control: {
        type: 'radio',
        options: ['primary', 'default', 'dashed', 'danger', 'link', 'text'],
      },
    },
    nzShape: {
      name: 'Shape',
      control: {
        type: 'radio',
        options: ['round', 'circle'],
      },
    },
  },
} as Meta

const Template: Story<NzButtonComponent> = args => ({
  props: args,
  template: '<button nz-button nzBlock>Click Me!</button>',
  moduleMetadata: {
    declarations: [NzButtonComponent],
  },
})

export const Default = Template.bind({})
Default.args = {
  nzType: 'default',
  disabled: false,
  nzLoading: false,
}
export const PrimaryLargeRounded = Template.bind({})
PrimaryLargeRounded.args = { nzType: 'primary', nzShape: 'round', nzSize: 'large' }
