import React from 'react'
import { Space, Typography } from 'antd'
import { Button } from 'antd'
function Test() {
  const { Text, Link } = Typography
  return (
    <div>
      <Button type='primary'>Click here</Button>
      <Text type='danger'>Ant Design (danger)</Text>
    </div>
  )
}

export default Test
