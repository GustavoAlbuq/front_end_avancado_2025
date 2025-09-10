import React from 'react'
import Proptypes from "prop-types"
const Multiplicacao = ({ num1, num2 }) => {
  return (
    <div>O resultado de {num1} X {num2} é { num1 * num2 }</div>
  )
}

Multiplicacao.Proptypes = {
    num1: Proptypes.number.isRequired,
    num2: Proptypes.number.isRequired
}


export default Multiplicacao