import React, { ReactNode, FC } from "react";
import Link from "next/link";
// import styled from "styled-components";
import { Row, Col, Menu } from "antd";

type PropTypes = {
  children: ReactNode;
};

const AppLayout: FC<PropTypes> = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal" style={{ padding: "60px 80px 0 80px", background: "#fafafa" }}>
        <Menu.Item key="home" style={{ padding: "0 0 10px 0", fontSize: "1.4em", width: 140, height: 50, textAlign: "center", fontWeight: 600 }}>
          <Link href="/">
            <a>MY HOUSE</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="photo" style={{ padding: "0 0 10px 0", fontSize: "1.4em", width: 140, height: 50, textAlign: "center", fontWeight: 600 }}>
          <Link href="/photo">
            <a>PHOTO</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="blog" style={{ padding: "0 0 10px 0", fontSize: "1.4em", width: 140, height: 50, textAlign: "center", fontWeight: 600 }}>
          <Link href="/blog">
            <a>BLOG</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="qna" style={{ padding: "0 0 10px 0", fontSize: "1.4em", width: 140, height: 50, textAlign: "center", fontWeight: 600 }}>
          <Link href="/qna">
            <a>Q&A</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="login" style={{ padding: "0 0 10px 0", fontSize: "1.4em", width: 140, height: 50, textAlign: "center", fontWeight: 600, float : "right" }}>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col span={16} offset={4}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

// const Menu = styled(Menu)`
//   padding: 60px 80px 0 80px;
//   background-color: #fafafa;
// `;

// const MenuItemStyle = styled(Menu.Item)`
//   padding: 0 0 10px 0;
//   font-size: 1.3em;
//   width: 140px;
//   height: 50px;
//   text-align: center;
//   font-weight: 600;
// `;

// const MenuItemStyleRight = styled(MenuItemStyle)`
//   float: right;
// `;

export default AppLayout;
