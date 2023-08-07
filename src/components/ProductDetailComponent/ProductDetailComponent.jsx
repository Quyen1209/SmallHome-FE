import { Col, Image, InputNumber, Row } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/testDetail.webp';
import imageProductSmall from '../../assets/images/testDetailSmall.webp';
import { WrapperAddresProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuanlityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import {StarFilled} from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ProductDetailComponent = () => {

  let onChange = ()=>{}

    return (
        <Row style={{padding:'16px', background:'#fff', borderRadius:'4px '}}>
        <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
            <Image src={imageProduct} alt='image product' preview ={false}/>
        <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview ={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview ={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview ={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview ={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview ={false}/>
            </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>
        Chúa Ruồi - Tiểu Thuyết (Nobel Văn Chương 1983)(Tái Bản 2020)
        </WrapperStyleNameProduct>
        <div>
        <span>5.0</span>
        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}} />
        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}} />
        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}} />
        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}} />
        <StarFilled style={{fontSize:'12px', color:'rgb(253,216,54)'}} />
        <WrapperStyleTextSell> | Đã bán: 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>
            200.000 đ
          </WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <WrapperAddresProduct>
          <span>Giao den: </span>
          <span className='address'>Q.Thanh Xuân, TP.Hà Nội </span>
          <span className='changeAddress'>- Đổi địa chỉ </span>
        </WrapperAddresProduct>

        <WrapperQuanlityProduct>
          <div>Số lượng: <InputNumber min={1} max={99} defaultValue={3} onChange={onChange} /></div>
        </WrapperQuanlityProduct>
        <div style={{display:'flex', alignItems: 'center',gap:'12px'}}>
          <ButtonComponent
          size={40} 
          styleButton={{
            background:'rgb(255,57,69)',
            height: '48px',
            width:'220px',
            border:'none',
            borderRadius:'4px'
        }}  
          textButton={"Chọn mua"} 
          styleTextButton ={{color:'#fff', fontSize:'15px', fontWeight:'700' }}
          ></ButtonComponent>
          <ButtonComponent
          size={40} 
          styleButton={{
            background:'#fff',
            height: '48px',
            width:'220px',
            border:'1px solid rgb(13,92,182)',
            borderRadius:'4px'
        }}  
          textButton={"Mua trả sau"} 
          styleTextButton ={{color:'rgb(13,92,182)', fontSize:'15px' }}
          ></ButtonComponent>
        </div>
      </Col>
        </Row>
    );
};

export default ProductDetailComponent;