/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 23:12:28
 * Last modified  : 2019-03-22 23:56:54
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import navConfig from './navConfig'

const SubMenu = Menu.SubMenu;

export class Nav extends Component {
  render() {
    return (
      <div>
        {
          navConfig.map(item => {
            if (!item.children) {
              return (<Menu.Item key={item.id}>
                <Icon type="pie-chart" />
                <span>{item.name}</span>)
            </Menu.Item>)
            } else {
              return (
                <SubMenu
                key={item.id}
                title={<span><Icon type="user" /><span>User</span></span>}
              >{
                item.children.map(child=>{
                  return <Menu.Item key={child.id}>{child.name}</Menu.Item>
                })
              }
              </SubMenu>
              )
            }
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Nav);
