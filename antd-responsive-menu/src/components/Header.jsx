import React, { useState } from "react";
import "./Header.scss";
import { Container, Row, Col, Visible } from "react-grid-system";
import { items } from "../menu";
import { Button, Drawer, Menu, Space, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const hideDrawer = () => {
        setOpen(false);
    };

    return (
        <header className="header">
            <Container>
                <Row justify="between" align="center">
                    <Col xs="content">
                        <h1 className="logo">Logo</h1>
                    </Col>

                    <Col xs="content">
                        <Space style={{ display: "flex" }}>
                            <Visible lg xl xxl>
                                <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={"home"}
                                    items={items}
                                    triggerSubMenuAction="click"
                                />
                            </Visible>

                            <Space align="center">
                                <Button type="primary">Đăng nhập</Button>
                                <Button type="primary">Đăng ký</Button>
                            </Space>

                            {/* <Visible xs sm md lg>
                                <Dropdown
                                    overlay={
                                        <Menu
                                            items={[
                                                {
                                                    key: "0",
                                                    label: "Đăng nhập",
                                                },
                                                {
                                                    key: "1",
                                                    label: "Đăng ký",
                                                },
                                            ]}
                                        />
                                    }
                                    trigger={["click"]}
                                    placement="bottomRight"
                                    overlayStyle={{}}
                                >
                                    <a
                                        onClick={(e) => e.preventDefault()}
                                        style={{
                                            alignSelf: "stretch",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <UserOutlined />
                                    </a>
                                </Dropdown>
                            </Visible> */}

                            <Visible xs sm md>
                                <Button onClick={showDrawer}>Open</Button>
                            </Visible>
                        </Space>
                    </Col>
                </Row>

                <Drawer title="Basic Drawer" onClose={hideDrawer} open={open}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={"home"}
                        items={items}
                        triggerSubMenuAction="click"
                    />
                </Drawer>
            </Container>
        </header>
    );
};

export default Header;
