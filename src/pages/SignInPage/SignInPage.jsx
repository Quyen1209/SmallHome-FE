import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {  Image } from 'antd';
import logoImage from '../../assets/images/logo-sigin.png'
import { WrapperInputPasswordStyle } from '../../components/InputForm/style';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [usernameInput,setUsernameInput] = useState('');
    const [passwordInput,setPasswordInput] = useState('');

    const navigate = useNavigate();
    const handleNavigateSignUp = ()=> {
        navigate('/sign-up')
    }
    const handleNavigateSignUpSuccess = ()=> {
        navigate('/')
    }


    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'rgb(0,0,0,0.53)', height:'100vh'}}>
            <div style={{width:'800px', height:'445px', borderRadius:'6px', background:'#fff', display:'flex'}}>
            <WrapperContainerLeft>
                <h4>Xin chào</h4>
                <p>Đăng nhập và tạo tài khoản</p>

                <InputForm style={{marginBottom: '10px'}} placeholder="username" value={usernameInput} onChange={
                    (event)=>{
                        setUsernameInput(event.target.value);
                    }
                }/>
                <WrapperInputPasswordStyle placeholder="password" value={passwordInput} onChange={
                    (event)=>{
                        setPasswordInput(event.target.value);
                    }
                } />
        <ButtonComponent
            onClick={handleNavigateSignUpSuccess}
          size={40} 
          styleButton={{
            background:'rgb(255,57,69)',
            height: '48px',
            width:'100%',
            border:'none',
            borderRadius:'4px',
            margin:'26px 0 10px'
        }}  
          textButton={"Đăng nhập"} 
          styleTextButton ={{color:'#fff', fontSize:'15px', fontWeight:'700' }}
          ></ButtonComponent>
          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp} style={{cursor:"pointer"}}>Tạo tài khoản</WrapperTextLight></p>
            </WrapperContainerLeft>



            <WrapperContainerRight>
                <Image src={logoImage} alt='image login' preview={false} height="203px" width="203px"/>
                <h2>Mua sắm tại Small Home</h2>
            </WrapperContainerRight>
        </div>
        </div>
    );
};

export default SignInPage;