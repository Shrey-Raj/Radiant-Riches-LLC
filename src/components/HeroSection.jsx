import { Space, Flex, Typography, Dropdown , Button , Breadcrumb} from "antd";
import React from "react";

import {
  HighlightOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,DownOutlined,SmileOutlined
} from "@ant-design/icons";

import CardComp  from "./CardComp";

const HeroSection = () => {

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item 
        </a>
      ),
    }]; 

  return (
    <div className="hero-section">
      <Typography.Title className="hero-title">
        Best Website Builders in the US
      </Typography.Title>

      <hr className="" />

      <Flex className="hero-info-row">
        <Space className="hero-info">
          <Typography.Paragraph style={{ marginRight: "1rem" }}>
            <CheckCircleOutlined className="check" />
            Last Updated - February 10, 2020
          </Typography.Paragraph>

          <Typography.Paragraph>
            <InfoCircleOutlined className="check" />
            Advertising Disclosure
          </Typography.Paragraph>
        </Space>

        <Space>
          <Dropdown
            menu={{items}}>
            <a onClick={(e) => e.preventDefault()}>
              <Typography className="hover-me">
                Hover me
                <DownOutlined style={{marginLeft:'5px'}} />
              </Typography>
            </a>
          </Dropdown>
        </Space>
        
      </Flex>
        <hr/>

        <Flex className="hero-buttons">
          <Button className="hero-button">Tools</Button>
          <Button className="hero-button">AWS Builder</Button>
          <Button className="hero-button">Start Build</Button>
          <Button className="hero-button">Build Supplies</Button>
          <Button className="hero-button">Tooling</Button>
          <Button className="hero-button">Blue Hosting</Button>
        </Flex>

        <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Hosting For All',
        href: '',
      },
      {
        title: 'Hosting',
        href: '',
      },
      {
        title: 'Hosting 6',
      },
      {
        title: 'Hosting 5',
      },
    ]}
  />

  <div className="cards-section">
    <CardComp badge count={1} rating={"9.5"} />
    <CardComp badge count={2} rating={"9.2"}/>
    <CardComp count = {3} rating={"9.0"} table />
  </div>

    </div>
  );
};

export default HeroSection;
