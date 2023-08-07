import React, { useState } from 'react';
import  {WrapperHeader}  from './style';
import {Button, Modal} from 'antd'
import {PlusCircleFilled } from '@ant-design/icons'
import TableComponent from '../../TableComponent/TableComponent';
import ModalCreateProduct from './ModalProduct/ModalCreateProduct';

const AdminProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm </WrapperHeader>
            <div><Button onClick={showModal}><PlusCircleFilled /></Button> </div>
            <div style={{marginTop: '30px'}}><TableComponent /></div>
            <ModalCreateProduct 
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            isModalOpen={isModalOpen}
            />
        </div>
    );
};

export default AdminProduct;
