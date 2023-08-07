import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({size,styleButton,styleTextButton,textButton,bordered, ... rest}) => {
    return ( 
        <Button
            size={size} 
            style={styleButton}  
            bordered= {bordered}
            {... rest} 
            >
                <span style={styleTextButton}>
                {textButton}
                </span>
        </Button>
    );
};

export default ButtonComponent;