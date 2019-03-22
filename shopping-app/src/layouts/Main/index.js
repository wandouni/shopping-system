/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:07:59
 * Last modified  : 2019-03-22 22:51:28
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Head from "../Header";
import Nav from "../Nav";
import Bread from "../Bread";
import Container from "../Container";

const { Header, Content, Sider } = Layout;

export class Main extends Component {
  state={
    collapsed:true
  }
  
  render() {
    const {collapsed}=this.state
    return (
      <div className="-l-Main">
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Nav />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Head />
            </Header>
            <Bread />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
             <Container />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Main);
