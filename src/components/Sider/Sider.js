import React from "react";
import { handleFilter, revealComment } from "./../../actions";
import { useDispatch } from "react-redux";
import { AlignLeftOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Sider } = Layout
const { SubMenu } = Menu;
export default function MySider({ submenuContent }) {
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(handleFilter(e.key));
        dispatch(revealComment(false))
    }
    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >

                <SubMenu key={"sub1"} icon={<AlignLeftOutlined />} title="Filters">
                    {
                        submenuContent.map((str) => (
                            <Menu.Item onClick={handleClick} key={str}>{str}</Menu.Item>
                        ))
                    }
                </SubMenu>
            </Menu>
        </Sider>
    )
}