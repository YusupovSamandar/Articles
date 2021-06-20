import { DropboxOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { revealComment } from "./../../actions";
import Comment from '../../components/comment/comment';
import BreakCrump from '../../components/Bread-crump/Bread-crump';
import React from 'react';
import 'antd/dist/antd.css';
import MySider from '../../components/Sider/Sider';
import './index.css';
import _ from "lodash";
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Sidebar({ article }) {

    const dispatch = useDispatch();

    const articles = useSelector(state => state.articles);

    let filters = articles.map((obj) => obj.title);

    const expand = useSelector(state => state.expand)

    return (
        <Layout>
            <Header className="flex-comb header">
                <div className="flex-comb">
                    <DropboxOutlined style={{ fontSize: "2rem", color: "#fff" }} />
                    <h1 style={{ color: "#eee", marginLeft: "10px" }}> Articles</h1>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content >
                <BreakCrump arrOfStr={["home", "articles"]} />
                <Layout className="site-layout-background" style={{ height: _.isEmpty(article) && "50vh", padding: '24px 0' }} >
                    <MySider submenuContent={filters} />
                    {
                        _.isEmpty(article) ? <div className="loading"></div> : articles.length > 0 && <Content className="content-family" style={{ padding: '0 24px', minHeight: 280 }}>
                            <h1 style={{ marginLeft: "40px" }}>{article.title}</h1><br />
                            <div style={{ margin: "0 5rem", }}>
                                {article.content.map((str, indx) => (
                                    <div key={indx}>
                                        <p>{str}</p>
                                        <br />
                                    </div>
                                ))}
                            </div>
                            <hr />
                            {articles.length > 0 &&
                                <div className="comment-container">

                                    {
                                        expand ? article.comments.map((obj, indx) => (
                                            <div>
                                                <Comment key={indx} text={obj.text} avatar={obj.avatar} name={obj.name} date={obj.date} />
                                                <hr className="comment-hr" />
                                            </div>

                                        )) : <div>
                                            <Comment text={article.comments[0].text} avatar={article.comments[0].avatar} name={article.comments[0].name} date={article.comments[0].date} />
                                            <Button style={{ marginLeft: "45px" }} onClick={() => { dispatch(revealComment(true)) }}>Load more...</Button>
                                        </div>
                                    }

                                </div>}
                        </Content>
                    }
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}