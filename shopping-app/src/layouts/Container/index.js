/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:35:24 
 * Last modified  : 2019-03-21 23:15:42
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Container.less'

export class Container extends Component {

  render() {
    return (
      <div className='-l-Container'>
        Container
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(Container)
