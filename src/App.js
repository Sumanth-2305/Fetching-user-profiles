import React, { useState, useEffect, useCallback } from 'react';
import { fetchUsers } from './api/userService';
import UserList from './components/UserList/UserList';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import EditUserModal from './components/EditUserModal/EditUserModal';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    };
    loadUsers();
  }, []);

  const handleDelete = useCallback((userId) => {
    setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
  }, []);

  const handleEdit = useCallback((user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  }, []);

  const handleModalOk = useCallback((updatedUser) => {
    setUsers(currentUsers =>
      currentUsers.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsModalVisible(false);
    setEditingUser(null);
  }, []);

  const handleModalCancel = useCallback(() => {
    setIsModalVisible(false);
    setEditingUser(null);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="app-container">
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
      {editingUser && (
        <EditUserModal
          user={editingUser}
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default App;