import React, { useState } from 'react';
import logoImage from '../../assets/images/logo-sigin.png'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import { WrapperInputPasswordStyle } from '../../components/InputForm/style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');

    const navigate = useNavigate();
    const handleNavigateSignIn = () => {
        navigate("/sign-in")
    }





    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'rgb(0,0,0,0.53)', height:'100vh'}}>
            <div style={{width:'800px', height:'545px', borderRadius:'6px', background:'#fff', display:'flex'}}>
            <WrapperContainerLeft>
                <h3>Xin chào</h3>
                <p>Vui lòng đăng ký tài khoản</p>
                
                <InputForm style={{marginBottom: '10px'}} placeholder="Tài khoản đăng nhập vào shop" value={username} onChange={
                    (event)=>{
                        setUsername(event.target.value);
                    }
                }/>

                <WrapperInputPasswordStyle style={{marginBottom: '10px'}} placeholder="Mật khẩu" value={password} onChange={
                    (event)=>{
                        setPassword(event.target.value);
                    }
                } />
                <WrapperInputPasswordStyle style={{marginBottom: '10px'}} placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={
                    (event)=>{
                        setConfirmPassword(event.target.value);
                    }
                } />
                <InputForm style={{marginBottom: '10px'}} placeholder="Họ và tên" value={name} onChange={
                    (event)=>{
                        setName(event.target.value);
                    }
                }/>
                <InputForm style={{marginBottom: '10px'}} placeholder="Địa chỉ" value={address} onChange={
                    (event)=>{
                        setAddress(event.target.value);
                    }
                }/>
                <InputForm style={{marginBottom: '10px'}} placeholder="Số điện thoại" value={phone} onChange={
                    (event)=>{
                        setPhone(event.target.value);
                    }
                }/>
                <ButtonComponent
          size={40} 
          styleButton={{
            background:'rgb(255,57,69)',
            height: '48px',
            width:'100%',
            border:'none',
            borderRadius:'4px',
            margin:'26px 0 10px'
        }}  
          textButton={"Đăng ký"} 
          styleTextButton ={{color:'#fff', fontSize:'15px', fontWeight:'700' }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn} style={{cursor:'pointer'}}>Đăng nhập</WrapperTextLight></p>
            </WrapperContainerLeft>



            <WrapperContainerRight >
                <Image src={logoImage} alt='image login' preview={false} height="203px" width="203px"              
                />
                <h2 >Mua sắm tại Small Home</h2>
            </WrapperContainerRight>
        </div>
        </div>
    );
};

export default SignUpPage;