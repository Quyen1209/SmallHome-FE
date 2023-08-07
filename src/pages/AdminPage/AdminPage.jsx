import { Menu } from 'antd';
import React, { useState } from 'react';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminAccount from '../../components/AdminSystems/AdminAccount/AdminAccount';
import AdminCategory from '../../components/AdminSystems/AdminCategory/AdminCategory';
import AdminProduct from '../../components/AdminSystems/AdminProduct/AdminProduct';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  


const AdminPage = () => {
    const items = [
        getItem('Người dùng', 'accounts', <UserOutlined  />),
        getItem('Sản phẩm', 'sub2', <AppstoreOutlined />, [
          getItem('Danh muc san pham', 'categories'),
          getItem('San pham', 'products'),
        ])
      ];

    const [keySelected, setKeySelected] = useState('');

    const renderPage = (key) => {

        switch(key) {
            case 'accounts':
                return (
                    
                    <AdminAccount />
                )
            case 'categories':
                return (
                    <AdminCategory />
                )
            case 'products':
                return (
                    <AdminProduct />
                )
            
            default: return <></>

        }
    }

    const handleOnClick = (key) => {
        setKeySelected(key)
      };
    


    return (
    <>
        <HeaderComponent isHiddenSearch={true} isHiddenCart={true} />
        <div style={{display: 'flex'}}>
            <Menu
            onClick={handleOnClick}
            style={{
                width: 256,
                boxShadow: '1px 1px 2px #ccc',
                height: '100vh'
            }}
            mode="inline"
            items={items}
            />
            <div style={{flex: 1, padding:'15px'}}>
                {renderPage(keySelected.key)}
            </div>
        </div>
    </>
    );
};

export default AdminPage;