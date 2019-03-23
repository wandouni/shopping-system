/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-23 13:30:39 
 * Last modified  : 2019-03-23 13:42:22
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MeasurementBill extends Component {

  render() {
    return (
      <div>
        MeasurementBill
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementBill)
