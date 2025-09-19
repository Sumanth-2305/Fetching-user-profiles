import React from 'react';
import { Row, Col } from 'antd';
import UserCard from '../UserCard/UserCard';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <Row gutter={[16, 16]}>
      {users.map(user => (
        <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
          <UserCard user={user} onDelete={onDelete} onEdit={onEdit} />
        </Col>
      ))}
    </Row>
  );
};

export default UserList;