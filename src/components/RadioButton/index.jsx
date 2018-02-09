import React from 'react'
import ReactDOM from 'react-dom'

import Ripple from '../Ripple'

export default class RadioButton extends React.Component {
  constructor () {
    super()

    this.state = {
      toggled: false
    }
  }

  componentDidMount () {
    this.toggle(this.props.toggled)
  }

  toggle (flag) {
    this.setState({toggled: flag})
  }

  render () {
    const {
      toggled
    } = this.state

    const onClick = (e) => {
      this.toggle(true)
      if (typeof this.props.onClick === 'function') this.props.onClick(this)
    }

    const onMouseDown = (e) => {
      this.refs.ripple.makeRipple()
    }

    return (
      <div className='radio-button-container' onClick={onClick} onMouseDown={onMouseDown}>
        <div className={'radio-button ' + (toggled ? 'toggled' : '')}>
          <div className='border'>
            <div className='circle' />
          </div>
          <Ripple autoRipple={false} ref='ripple' center={true} />
        </div>
        <div className='text'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

RadioButton.defaultProps = {
  toggled: false
}