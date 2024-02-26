import React from "react";
import {
  Input,
  Row,
  Col,
  Menu,
  Avatar,
  Statistic,
  Tooltip,
  Space,
  Select,
  Typography,
  Progress,
} from "antd";
import {
  MoneyCollectOutlined,
  FileTextOutlined,
  FolderOutlined,
  BellOutlined,
  ArrowUpOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Col className="">
          <Input
            placeholder="   Search . . . "
            className="search-input"
            prefix={<SearchOutlined className="text-xl text-blue-600 p-1" />}
          />
        </Col>

        <Typography.Link className="nav-item">Categories</Typography.Link>
        <Typography.Link className="nav-item">Website Builders</Typography.Link>
        <Typography.Link className="nav-item">Today's Deals</Typography.Link>
      </div>

      <div className="collapse-menu">
        <ul>
          <input type="checkbox" id="collapse" />
          <label for="collapse"></label>

          <li>
            <Typography.Link className="nav-item">Categories</Typography.Link>
          </li>
          <li>
            <Typography.Link className="nav-item">Website Builders</Typography.Link>
          </li>
          <li>
            <Typography.Link className="nav-item">Today's Deals</Typography.Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
