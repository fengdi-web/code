import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
class Content extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
    /*通过context来获取store中的值，没有使用connect*/
    componentWillMount () {
        const { store } = this.context 
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }
  
    _updateThemeColor () {
      const { store } = this.context
      const state = store.getState()
      this.setState({ themeColor: state.themeColor })
    }
  
    render () {
      return (
        <div style={{background:"#0f0"}}>
          <p style={{ color: this.state.themeColor }}>this is content</p>
          <ThemeSwitch />
        </div>
      )
    }
  }
  export default Content