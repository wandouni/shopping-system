/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:35:24 
 * Last modified  : 2019-03-23 13:49:24
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Container.less'
import { Route, Redirect } from "react-router-dom"
import routerConfig from './RouterConfig'
import loadable from '@loadable/component'


export class Container extends Component {

  render() {
    return (
      <div className='-l-Container'>
        {
          routerConfig.map(item => {
            // c:() => import('./Dashboard')
            const OtherComponent = loadable(item.c)
            return <Route exact={item.id===''} key={item.id} path={`/${item.id}`} component={(props)=><OtherComponent {...props} />} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Container)
