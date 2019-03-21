/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:34:04 
 * Last modified  : 2019-03-21 22:34:19
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Header extends Component {

  render() {
    return (
      <div>
        Header
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(Header)
