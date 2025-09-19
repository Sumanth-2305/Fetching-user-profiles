import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const LoadingIndicator = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spin indicator={antIcon} />
  </div>
);

export default LoadingIndicator;