import { Button, Form, Input, InputNumber, Modal, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const ModalCreateProduct = (props) => {
    const {handleOk,handleCancel,isModalOpen} = props;

    
    




    const handleReset =() => {
        
    }

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };

    return (
        <Modal title="Tạo sản phẩm" open={isModalOpen} okText={'Reset'}  onOk={handleReset} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 15 }}
                    style={{ maxWidth: 900 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                        <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your product`s!' }]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item 
                        label="Description: "
                        name="description"
                        rules={[{ required: true, message: 'Please input your product`s!' }]}
                        >
                            <TextArea rows={2} />
                        </Form.Item>
                        
                        <Form.Item 
                        label="Quantity: " 
                        name="quantity"
                        rules={[{ required: true, message: 'Please input your inputNumber!' }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item 
                        label="SoldQuantity: " 
                        name="soldQuantity"
                        rules={[{ required: true, message: 'Please input your inputNumber!' }]}>
                            <InputNumber />
                        </Form.Item>
                        
                        <Form.Item 
                        label="Price: " 
                        name="price"
                        rules={[{ required: true, message: 'Please input your inputNumber!' }]}>
                            <InputNumber
                            defaultValue={100}
                            min={0}
                            max={1000000}
                            value={20}
                            formatter={(value) => `${value} đ`}
                            />
                        </Form.Item>
                        <Form.Item 
                        label="SalePrice: " 
                        name="salePrice"
                        rules={[{ required: true, message: 'Please input your inputNumber!' }]}>
                            <InputNumber
                            defaultValue={100}
                            min={0}
                            max={1000000}
                            value={20}
                            formatter={(value) => `${value} đ`}
                            />
                        </Form.Item>


                        

                        <Form.Item 
                        label="Category"
                        name="categoryId">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                </Form>
        </Modal>
    );
};

export default ModalCreateProduct;