import { Avatar, Card, List, ListProps, Space, Typography } from 'antd'
import { FC } from 'react'

const Components: FC<ListProps<Maybe<CardFragment>>> = ({ ...props }) => {
  return (
    <List
      size={'large'}
      grid={{ column: props.dataSource?.length ?? 1, gutter: 16 }}
      split={false}
      renderItem={it => (
        <List.Item key={it?.id}>
          <Card style={{ padding: 16 }} hoverable={false} bordered={false} cover={<Avatar src={it?.media?.data?.attributes?.url} size={96} />}>
            <Space direction={'vertical'} align={'center'} style={{ height: 64 }}>
              <Typography.Title level={5}>{it?.title}</Typography.Title>
              <Typography.Text>{it?.description}</Typography.Text>
            </Space>
          </Card>
        </List.Item>
      )}
      header={
        <Typography.Title style={{ textAlign: 'center' }} level={3}>
          Components
        </Typography.Title>
      }
      {...props}
    />
  )
}

export { Components }
