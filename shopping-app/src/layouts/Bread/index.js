/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:36:39 
 * Last modified  : 2019-03-23 14:08:12
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Bread extends Component {
  render() {
    return (
      <div className='-l-Bread'>
        Bread
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(Bread)
