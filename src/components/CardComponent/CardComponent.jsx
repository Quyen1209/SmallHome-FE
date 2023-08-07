
import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperPrice, WrapperPriceDiscountText, WrapperReportText } from './style';
import {StarFilled} from '@ant-design/icons'
import official from '../../assets/images/official.png'
const CardComponent = () => {
    return (
    <WrapperCardStyle
        hoverable
        headStyle={{width: ''}}
        style={{ width: 240 }}
        bodyStyle={{padding:'10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <img src={official} style={{width: '68px', height:'14px', position: 'absolute', top: -1, left: -1, WebkitBorderTopLeftRadius:'6px'}}/>
        <StyleNameProduct>Hot girl </StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight:'4px'}}>
                <span>5.0</span>  <StarFilled style={{fontSize:'10px', color:'rgb(253,216,54)'}} />
            </span>
            <span> | Da ban: 1000+</span>
            <span> | Con hang: 1000+</span>
        </WrapperReportText>
        <WrapperPrice>
            <s>2.000.000d</s> | 1.000.000 |
            <WrapperPriceDiscountText>
                -50%
            </WrapperPriceDiscountText>
        </WrapperPrice>
    </WrapperCardStyle>
    );
};

export default CardComponent;