import React from 'react';
import {Badge, Col} from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {CaretDownOutlined,
    UserOutlined,ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import {useNavigate} from 'react-router-dom'  

const HeaderComponent = ({isHiddenSearch= false, isHiddenCart = false}) => {

const navigate = useNavigate();
const handleNavigateLogin = () => {
    navigate('/sign-in');
}
    
    return (
        <div style={{width:'100%', background:'rgb(26,148,255)', display:'flex', justifyContent:'center'}}>
            <WrapperHeader style={{justifyContent: isHiddenCart && isHiddenSearch ? 'space-between' : 'unset'}} >
                <Col span={5}><WrapperTextHeader>SMALL HOME</WrapperTextHeader></Col>
                {!isHiddenSearch && (
                <Col span={13}>
                    <ButtonInputSearch 
                    size ="large" 
                    bordered = {false}
                    placeholder="Input search text" 
                    textButton="Tim kiem" 
                    />
                </Col>
                )} 
                
                <Col span={6} style={{display: 'flex', gap:'20px', alignItems: 'center'}} >
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}} />
                    <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                        <WrapperTextHeaderSmall>Dang nhap/Dang ky</WrapperTextHeaderSmall>
                        <div>
                        <WrapperTextHeaderSmall>Tai Khoan</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                    {!isHiddenCart && (
                        <div>
                        <div style={{display:'flex', gap:'5px',alignItems:'center'}}>
                        <Badge count={5} size='small'>
                            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}}  />
                        </Badge>
                        <WrapperTextHeaderSmall>Gio hang</WrapperTextHeaderSmall>
                        </div>
                        </div>
                    )}

                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;