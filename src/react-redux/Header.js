import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor,background:"#fcc" }}>this is header</h1>
    )
  }
}
//store 里面的值变了，它会自动执行
const mapStateToProps = (state) => {   
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header

    // static defaultProps={
    //     "name":"小明"
    // }