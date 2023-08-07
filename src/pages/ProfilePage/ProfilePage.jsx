import React from 'react';
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Col, Row } from 'antd';


const ProfilePage = () => {

    const handleUpdateProfile =()=>{};

    return (<Row style={{gap:'20px'}}>
        <Col span={9}>
            <div >
            <WrapperContentProfile>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperInput>
                <WrapperLabel>Tài khoản: </WrapperLabel>
                <InputForm style={{width:'300px'}} value="Username"  />
            </WrapperInput>
            <WrapperInput>
                <WrapperLabel>Họ và tên: </WrapperLabel>
                <InputForm style={{width:'300px'}} value="Username"  />
            </WrapperInput>
            <WrapperInput>
                <WrapperLabel>Địa chỉ: </WrapperLabel>
                <InputForm style={{width:'300px'}} value="Username"  />
            </WrapperInput>
            <WrapperInput>
                <WrapperLabel>Số điện thoại: </WrapperLabel>
                <InputForm style={{width:'300px'}} value="Username"  />
            </WrapperInput>
            <div style={{display:'flex', gap:'20px'}} >
            <ButtonComponent 
                onClick={handleUpdateProfile}
                size={40} 
                styleButton={{
                height: '30px',
                width:'fit-content',
                border:'1px solid rgb(26,148,255)',
                borderRadius:'4px',
                padding: ' 2px 6px 6px',
            }}  
                textButton={"Đổi mật khẩu"} 
                styleTextButton ={{color:'rgb(26,148,255)', fontSize:'15px', fontWeight:'700' }}
            ></ButtonComponent>
            <ButtonComponent
                onClick={handleUpdateProfile}
                size={40} 
                styleButton={{
                height: '30px',
                width:'fit-content',
                border:'1px solid rgb(26,148,255)',
                borderRadius:'4px',
                padding: ' 2px 6px 6px'
            }}  
                textButton={"Lịch sử mua hàng"} 
                styleTextButton ={{color:'rgb(26,148,145)', fontSize:'15px', fontWeight:'700' }}
            ></ButtonComponent>
            </div>
            </WrapperContentProfile>
        </div>
        </Col>

        <Col span={14}>
            <WrapperContentProfile>
            <WrapperHeader>Lịch sử mua hàng</WrapperHeader>
            </WrapperContentProfile>
        </Col>
      </Row> 
    );
};

export default ProfilePage;