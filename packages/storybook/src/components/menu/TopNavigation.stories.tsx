import { TopNavigation as StoryComponent } from '@app/website/src/components/menu/TopNavigation'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { withPerformance } from 'storybook-addon-performance'
import { App } from '../../containers'

export default {
  title: 'Website/Components/Menu',
  decorators: [withDesign, withPerformance],
  component: StoryComponent,
}

const Template: Story = ({ args }) => (
  <App>
    <StoryComponent {...args} />
  </App>
)
export const Default = Template.bind({})
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
