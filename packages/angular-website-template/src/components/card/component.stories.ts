import { Meta, Story } from '@storybook/angular'
import { NzTypographyComponent } from 'ng-zorro-antd/typography'
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card'

export default {
  title: 'WebCore/Card',
  component: NzCardComponent,
  argTypes: {
    nzLoading: { name: 'Loading', control: { type: 'boolean' } },
    nzBordered: { name: 'Bordered', control: { type: 'boolean' } },
  },
} as Meta

const Template: Story<NzCardComponent> = args => ({
  props: args,
  template: `
 <nz-card  [nzTitle]="cardTitle" [nzCover]="coverTemplate">
 <h3>Card Title</h3>
    <p>Long text block with card description</p>
    <p>noitpircsed drac htiw kcolb txet gnoL</p>
</nz-card>

 <ng-template #coverTemplate><img src="https://source.unsplash.com/random/?landscape" alt="Landscape" />
  `,
  moduleMetadata: {
    declarations: [NzCardComponent],
  },
})

export const Default = Template.bind({})
Default.args = { nzBordered: true }
