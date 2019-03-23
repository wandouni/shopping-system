/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:07:59
 * Last modified  : 2019-03-23 14:08:03
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Head from "../Header";
import Nav from "../Nav";
import Bread from "../Bread";
import Container from "../Container";
import { Route } from "react-router-dom";

const { Header, Content } = Layout;

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="-l-Main">
        <Layout>
          <Route path='*' component={(props) => <Nav {...props} />} />
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Head />
            </Header>
            <Route path='*' component={(props) => <Bread {...props} />} />
            <Content>
              <Route path='*' component={(props) => <Container {...props} />} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({})
};

export default connect(mapStateToProps)(Main);
