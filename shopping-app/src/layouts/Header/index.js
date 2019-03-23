/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:34:04 
 * Last modified  : 2019-03-23 12:51:19
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.less'
import moment from 'moment'
import { Icon } from 'antd'

export class Header extends Component {
  render() {
    const systemTime = moment().format('YYYY-MM-DD')
    return (
      <div className='-l-Header'>
        <ul>
          <li>
            <span className='icon'><Icon type="clock-circle" /></span>
            <span className='name'>{systemTime}</span>
          </li>
          <li>
            <span className='icon'><Icon type="user" /></span>
            <span className='name'>系统管理员</span>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Header)
