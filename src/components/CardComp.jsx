import React from "react";

import { Flex , Space, Typography , Image, Button, Badge,Card, Tag} from "antd";

import {CheckCircleTwoTone} from '@ant-design/icons'

const src = 'src/assets/card-img.svg' ; 

const CardComp = ({badge , count , rating, table}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
      <Flex className="card-comp">

    {
      badge &&      
      <Badge.Ribbon placement="start" text=<Typography style={{color:'whitesmoke'}}>
      Best Choice</Typography> style={{background:'orange' }}>
      </Badge.Ribbon>
    }
    <Badge count={count} offset={[-9, 40]} style={{background:'whitesmoke', color:'black'}}></Badge>

        <Flex  className="card-left-img" >
          <Image width={200} src={src} />
        </Flex>

        <Flex className="card-content">
          <Typography>
              <Typography className=""> <span className="card-head">WixPro 72-Inch Responsive Website Builder-</span> Digital Platform Creation Tool, Streamlinied Design Interface for Professional Websites and Online Stores (Black/Blue)</Typography>
          </Typography>

          <Typography className="cc-second-para">
            <span className="card-head">Main highlights<br/></span>

{table  ? 
           ( <> 
           <Flex className="card-table">
              <div style={{display:'flex' , marginBottom:'.2rem'}}>
              <Tag  className="card-table-tag"  color="default" style={{border:'none'}}>9.6</Tag>
              <Typography>Building Responsive</Typography>
              </div>

              <div style={{display:'flex'}}>
              <Tag className="card-table-tag" color="default" >8.9</Tag>
              <Typography>Cool</Typography>
              </div>

              <div style={{display:'flex'}}>
              <Tag className='card-table-tag' color="default" >7.7</Tag>
              <Typography>Docs</Typography>
              </div>
            </Flex>
            
            <Flex  style={{flexDirection:"column", marginTop:'0.5rem'}}>
              <Typography.Paragraph>Why we love it </Typography.Paragraph>

              <Flex style={{flexDirection:"column" , marginLeft:'0.5rem'}}>
                <Typography><CheckCircleTwoTone style={{marginRight:'0.4rem'}} twoToneColor="#52c41a" /> 
                Documentation</Typography>
                <Typography><CheckCircleTwoTone style={{marginRight:'0.4rem'}} twoToneColor="#52c41a" />
                Ease Use</Typography>
                <Typography><CheckCircleTwoTone style={{marginRight:'0.4rem'}} twoToneColor="#52c41a" />
                Out of box</Typography>
              </Flex>

            </Flex>
</>
            )
 : 
            (<Typography.Paragraph className="card-second-para">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</Typography.Paragraph>)
}
        <Typography.Link >Show More</Typography.Link>
          </Typography>

        </Flex>

      <Flex className="card-right"  >

        <Flex className="card-right-top">
          <Typography.Title level={3}>{rating}</Typography.Title>
          <Typography.Paragraph>Exceptional</Typography.Paragraph>
          <p>⭐⭐⭐⭐⭐</p>
        </Flex>

        <Button className="view-but">View </Button>

      </Flex>

      </Flex>
    </div>
  );
};


export default CardComp ;