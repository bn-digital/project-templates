import { Avatar, Card, List, ListProps, Space, Typography } from 'antd'
import { FC } from 'react'

const Components: FC<ListProps<Maybe<CardFragment>>> = ({ ...props }) => {
  return (
    <List
      size={'large'}
      grid={{ column: props.dataSource?.length ?? 1, xs: 1, sm: 1, md: 3, lg: 3, xl: 3, xxl: 3 }}
      split={false}
      renderItem={it => (
        <List.Item key={it?.id}>
          <Card
            hoverable={false}
            bordered={false}
            title={<Typography.Title level={4}>{it?.title}</Typography.Title>}
            cover={
              <Avatar
                style={{ display: 'inline-block', marginTop: 24 }}
                src={it?.media?.data?.attributes?.url}
                shape={'square'}
                size={64}
              />
            }
          >
            <Space direction={'vertical'} align={'center'} style={{ height: 64 }}>
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
