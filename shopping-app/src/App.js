import React, { Component } from 'react';
import './App.less';
import store from './stores/index'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Provider } from 'react-redux'
import Main from './layouts/Main/index'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    console.log(store)
    return (
      <div className="App">
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <HashRouter>
            <Main />
          </HashRouter>
        </LocaleProvider>
      </Provider>
      </div>
    );
  }
}

export default App;
