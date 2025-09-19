import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const EditUserModal = ({ user, visible, onOk, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        onOk({ ...user, ...values });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="OK"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please input the phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: 'Please input the website!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;