import { Flex, Tag, Typography, Image, Button } from "antd";
import React from "react";

const src= "src/assets/lowerSectionCardImg.svg" ; 

const LowerSectionCard = () => {
  return (
    <div>
      <Flex className="lower-section-card">
        <Image
          width={200}
          height={150}
          src={src}
        />
        <Flex className="lower-section-tags">
          <Tag color="blue">20% Off</Tag>
          <Tag color="blue">Limited Time</Tag>
        </Flex>

        <Typography style={{fontWeight:'bold' , color:'grey', margin:'0.3rem'}}>Webbuilder 1</Typography>

        <Typography.Paragraph style={{fontSize:'small'}}>
          Computer Modern classic with wix support
        </Typography.Paragraph>

        <Flex className="price-row">
          <Typography.Title level={4}>$39.96</Typography.Title>
          <p className="price-row-p">$49.96</p>
          <p style={{color:'red' , fontSize:'x-small'}} className="price-row-p">(20% Off)</p>
        </Flex>

        <Button className="af-btn" style={{background:'#1b7ced', color:'#fff', width:'90%', marginTop:'1rem'}}>View Deal</Button>

      </Flex>
    </div>
  );
};

export default LowerSectionCard;
