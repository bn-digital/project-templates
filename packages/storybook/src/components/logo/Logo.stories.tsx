import { Logo as StoryComponent } from '@app/website/src/components/logo/Logo'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { withPerformance } from 'storybook-addon-performance'

export default {
  title: 'Website/Components/Logo',
  decorators: [withDesign, withPerformance],
  component: StoryComponent,
}

const Template: Story = args => <StoryComponent {...args} />

export const Default = Template.bind({})

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
