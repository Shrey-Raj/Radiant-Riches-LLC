import { Flex, Typography } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">Germany</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">India</a>,
    key: "1",
  },
  {
    label: "China",
    key: "3",
  },
];

const Footer = () => {
  return (
    <div>
      <Flex className="footer">
        <Flex className="footer-col-1">
          <Typography.Title level={5} className="footer-head">CATEGORIES</Typography.Title>
          <Typography.Link id="footer-link">Web Builder</Typography.Link>
          <Typography.Link id="footer-link">Hosting</Typography.Link>
          <Typography.Link id="footer-link">Data Center</Typography.Link>
          <Typography.Link id="footer-link">Robotic Automation</Typography.Link>
        </Flex>

        <Flex className="footer-col-2">
          <Typography.Title level={5} className="footer-head">CONTACT</Typography.Title>
          <Typography.Link id="footer-link">Contact</Typography.Link>
          <Typography.Link id="footer-link">Privacy Policy</Typography.Link>
          <Typography.Link id="footer-link">Terms of Service</Typography.Link>
          <Typography.Link id="footer-link">About</Typography.Link>
        </Flex>

        <Flex className="footer-col-3">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Typography style={{color:'#D3D2D2'}}>United States</Typography>
                <DownOutlined style={{color:'#D3D2D2'}} />
              </Space>
            </a>
          </Dropdown>
        </Flex>
        
      </Flex>
    </div>
  );
};

export default Footer;
