import React, { useState } from 'react';
import  {WrapperHeader}  from './style';
import {Button, Modal} from 'antd'
import {PlusCircleFilled } from '@ant-design/icons'
import TableComponent from '../../TableComponent/TableComponent';
import ModalCreateAccount from './ModalAccount/ModalCreateAccount';

const AdminAccount = () => {
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
            <WrapperHeader>Quản lý người dùng </WrapperHeader>
            <div><Button onClick={showModal}><PlusCircleFilled /></Button> </div>
            <div style={{marginTop: '30px'}}><TableComponent /></div>
            <ModalCreateAccount isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    );
};

export default AdminAccount;
