import React from 'react';
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style';
import { Checkbox, Rate } from 'antd';


const NavbarComponent = () => {

    const onChange = () =>{}
    
    const renderContent = (type,option) => {
        switch (type) {
            case 'text' :
                return option.map((option)=>{
                    return <WrapperTextValue>{option}</WrapperTextValue>
                });
            case 'checkbox': return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {option.map((option)=> {
                        return (
                            <Checkbox style={{margin: 0}} value={option.value}>{option.lable}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            )
            case 'star': 
            return option.map((option)=> {
                        return (
                            <div style={{display:'flex', gap:'5px'}}>
                            <Rate style={{fontSize:'12px'}} disabled defaultValue={option} />
                            <span> Tu {option} sao</span>
                            </div>
                        )
                    })
            case 'price': 
                    return option.map((option)=> {
                                return (
                                 <div style={{padding:'4px', borderRadius:'10px',backgroundColor:'#ccc', width:'fit-content'}}>
                                    {option}
                                 </div>
                                    
                                )
                            })  
            
                
            
            default: return {};
        }
    }

    return (
        <div>
            <WrapperLableText>Danh muc san pham</WrapperLableText>
            <WrapperContent>
            {renderContent('text',['Quan ao', 'Dien Tu','Nha cua & doi song', 'My pham'])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('checkbox',[
                {value:'a', lable: 'A'},
                {value:'b', lable: 'B'},
                {value:'c', lable: 'C'},
                ])}
            </WrapperContent>

            <WrapperContent>
            {renderContent('star',[3,4,5
                ])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('price',['Duoi 400.000','Tu 400.000-1.000.000','Tren 1.000.000'
                ])}
            </WrapperContent>
        </div>
    );
};

export default NavbarComponent;