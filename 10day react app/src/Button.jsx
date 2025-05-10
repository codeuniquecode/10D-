import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
    console.log(props); 
  return (
    <div>
      <button style={{backgroundColor:props.bgColor}}>{props.textInsideButton}</button>
    </div>
  )
}
// if nothing is passed to the props, we can set default props
// Button.defaultProps = {
//     bgColor: 'blue',
//     textInsideButton: 'default button'
// }

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textInsideButton: PropTypes.string
}

export default Button
