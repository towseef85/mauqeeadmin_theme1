import { Card } from 'antd'
import React from 'react'
import clsx from 'clsx';
import './index.style.less';

export default function index({
    title,
  extra,
  children,
  cover,
  className,
  actions,
  heightFull,
  ...rest
}) {
  return (
    <Card
    className={clsx('card', {heightFull: heightFull}, className)}
    title={title}
    extra={extra ? extra : null}
    cover={cover}
    actions={actions}
    bordered={false}
    {...rest}>
    {children}
  </Card>
  )
}
