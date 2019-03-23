/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 23:12:28
 * Last modified  : 2019-03-23 14:03:37
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import navConfig from './navConfig'
import Sider from "antd/lib/layout/Sider";
import { Link } from "react-router-dom"
import './Nav.less'

const SubMenu = Menu.SubMenu;

export class Nav extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    const id = props.location.pathname.slice(1)
    this.state = {
      selectedKeys: [id],
      // openKeys: [id]
    }
  }

  handleClick = ({ item, key, keyPath }) => {
    this.setState({
      selectedKeys: [key]
    })
  }

  onOpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }

  render() {
    const { selectedKeys } = this.state
    return (
      <Sider width={256} style={{ minHeight: '100vh' }} className='-l-Nav'>
        <h1 style={{ color: '#fff', padding: '20px 0', textAlign: 'center', fontWeight: 'bold' }}>普邦园林采购管理系统</h1>
        <Menu
          // openKeys={openKeys}
          // onOpenChange={this.onOpenChange}
          selectedKeys={selectedKeys}
          onClick={this.handleClick}
          mode="inline"
          theme='dark'
        >
          {
            navConfig.map(item => {
              if (!item.children) {
                return <Menu.Item key={item.id}>
                  <Link to={`/${item.id}`} >
                    <Icon component={() => <span className={`iconfont ${item.icon}`}></span>} />
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              } else {
                return (
                  <SubMenu
                    key={item.id}
                    title={<span><Icon component={() => <span className={`iconfont ${item.icon}`}></span>} /><span>{item.name}</span></span>}
                  >
                    {
                      item.children.map(child => {
                        return <Menu.Item key={child.id}><Link to={`/${child.id}`}>{child.name}</Link></Menu.Item>
                      })
                    }
                  </SubMenu>
                )
              }
            })
          }
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Nav);
