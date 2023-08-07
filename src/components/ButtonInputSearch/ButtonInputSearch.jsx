
import React from 'react';
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from '../InputCompoonent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton,bordered ,backgroundColorInput='#fff',backgroundColorButton='rgb(12,92,182)', colorButton ='#fff'} = props
    return (
        <div style={{display: 'flex'}}>
            <InputComponent 
            size={size} 
            placeholder={placeholder} 
            bordered= {false} 
            style={{backgroundColor:backgroundColorInput, borderRadius:'0px'}}/>
            <ButtonComponent 
            size={size} 
            styleButton={{background:backgroundColorButton, borderRadius:'0px', border: !bordered && 'none'}}  
            bordered= {bordered} 
            icon={<SearchOutlined style={{color:colorButton }}/>}
            textButton={textButton} 
            styleTextButton ={{color:colorButton }}
            />
                
        </div>
    );
};

export default ButtonInputSearch;