import React, { useState } from 'react';
import  {WrapperHeader}  from './style';
import {Button} from 'antd'
import {PlusCircleFilled } from '@ant-design/icons'
import TableComponent from '../../TableComponent/TableComponent';
import ModalCreateCategory from './ModalCategory/ModalCreateCategory';

const AdminCategory = () => {
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
            <WrapperHeader>Quản lý danh mục sản phẩm </WrapperHeader>
            <div><Button onClick={showModal}><PlusCircleFilled /></Button> </div>
            <div style={{marginTop: '30px'}}><TableComponent /></div>
            <ModalCreateCategory isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    );
};

export default AdminCategory;