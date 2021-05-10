import { Meta, Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { withPerformance } from 'storybook-addon-performance'
import { App } from '../../containers'
import { Avatar, Card as StoryComponent, CardProps, Skeleton as StoryComponentSkeleton } from 'antd'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import 'antd/dist/antd.compact.less'

export default {
  title: 'Antd/Components/Card',
  decorators: [withDesign, withPerformance],
  component: StoryComponent,
} as Meta

const Template: Story<CardProps> = props => (
  <App>
    <StoryComponent
      {...props}
      style={{ width: 300, marginTop: 16 }}
      actions={[<SettingOutlined key='setting' />, <EditOutlined key='edit' />, <EllipsisOutlined key='ellipsis' />]}
    >
      <StoryComponentSkeleton loading={true} avatar active>
        <StoryComponent.Meta
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
          title='Card title'
          description='This is the description'
        />
      </StoryComponentSkeleton>
    </StoryComponent>
  </App>
)

export const Skeleton = Template.bind({})
Skeleton.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
