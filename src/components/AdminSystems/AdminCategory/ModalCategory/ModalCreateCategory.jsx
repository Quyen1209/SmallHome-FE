import { Modal } from 'antd';
import React from 'react';

const ModalCreateCategory = (props) => {
    const {isModalOpen,handleOk,handleCancel} = props;


    return (
        <Modal title="Tạo danh mục sản phẩm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
        </Modal>
    );
};

export default ModalCreateCategory;