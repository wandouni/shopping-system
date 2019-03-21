/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:07:59
 * Last modified  : 2019-03-21 23:13:11
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Head from "../Header";
import Nav from "../Nav";
import Bread from "../Bread";
import Container from "../Container";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class Main extends Component {
  render() {
    return (
      <div className="-l-Main">
        <Layout>
          <Header className="header">
            <Head />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Nav />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Bread />
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Container />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Main);
