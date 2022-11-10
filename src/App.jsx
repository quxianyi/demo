import { Col, Row, Button } from "antd";
import React, { useState } from 'react'
import "antd/dist/antd.css";
import "tailwindcss/tailwind.css"
import "./App.css";

function App() {
  const [cardList, setCardList] = useState([
    {
      id:'1',
      imgUrl:'https://kashiwasato.com/cms/wp-content/uploads/2022/08/ADC-2020-2021_RGB-1125x1125.jpg',
      title:'UNIQLO',
      Client:'FAST RETAILING CO., LTD.',
      Director:' Kashiwa Sato<',
      Designer:'Nagisa Uchino',
    },
    {
      id:'2',
      imgUrl:'https://kashiwasato.com/cms/wp-content/uploads/2022/08/ADC-2020-2021_RGB-1125x1125.jpg',
      title:'UNIQLO',
      Client:'FAST RETAILING CO., LTD.',
      Director:' Kashiwa Sato<',
      Designer:'Nagisa Uchino',
    },
    {
      id:'3',
      imgUrl:'https://kashiwasato.com/cms/wp-content/uploads/2022/08/ADC-2020-2021_RGB-1125x1125.jpg',
      title:'UNIQLO',
      Client:'FAST RETAILING CO., LTD.',
      Director:' Kashiwa Sato<',
      Designer:'Nagisa Uchino',
    },
    {
      id:'4',
      imgUrl:'https://kashiwasato.com/cms/wp-content/uploads/2022/08/ADC-2020-2021_RGB-1125x1125.jpg',
      title:'UNIQLO',
      Client:'FAST RETAILING CO., LTD.',
      Director:' Kashiwa Sato<',
      Designer:'Nagisa Uchino',
    },
    {
      id:'5',
      imgUrl:'https://kashiwasato.com/cms/wp-content/uploads/2022/08/ADC-2020-2021_RGB-1125x1125.jpg',
      title:'UNIQLO',
      Client:'FAST RETAILING CO., LTD.',
      Director:' Kashiwa Sato<',
      Designer:'Nagisa Uchino',
    },
  ])
  return (
    <div className="App">
      <Row gutter={[16, 16]}>
        {
          cardList.map((item)=>{
            return(
              <Col key={item.id} xs={24} sm={12} md={12} lg={6} xl={6} >
              <img className="w-full" src={item.imgUrl} alt="" />
              <div className="text-left font-semibold leading-7 mt-4 mb-4">{item.title}</div>
              <div className="text-left text-brand text-xs">Client : {item.Client}</div>
              <div className="text-left text-brand text-xs">Creative Director : {item.Director}</div>
              <div className="text-left text-brand text-xs">Graphic Designer :{item.Designer}</div>
              <div className="text-left mt-4 mb-4">READ MORE <span>+</span></div>
            </Col>
            )
          })
        }
      </Row>
    </div>
  );
}

export default App;
