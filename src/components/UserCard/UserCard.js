import React, { useState } from 'react';
import { Card} from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import './UserCard.css';

const { Meta } = Card;

const UserCard = ({ user, onDelete, onEdit }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card
      
      cover={<div className="card-cover-image"><img alt={user.name} src={user.avatar} /></div>}
      actions={[
        liked ? <HeartFilled key="like" onClick={handleLike} style={{ color: 'red' }} /> : <HeartOutlined key="like" onClick={handleLike} style={{ color: 'red' }} />,
        <EditOutlined key="edit" onClick={() => onEdit(user)} />,
        <DeleteFilled key="delete" onClick={() => onDelete(user.id)} />,
      ]}
    >
      <Meta
        title={user.name}
        description={
          <div>
            <p><MailOutlined /> {user.email}</p>
            <p><PhoneOutlined /> {user.phone}</p>
            <p><GlobalOutlined /> {user.website}</p>
          </div>
        }
      />
    </Card>
  );
};

export default UserCard;