/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-23 13:30:39 
 * Last modified  : 2019-03-23 13:42:10
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class OrderManage extends Component {
  render() {
    return (
      <div>
        OrderManage
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage)
