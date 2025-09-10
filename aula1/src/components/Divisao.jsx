import React from 'react'
import Proptypes from "prop-types"

const Divisao = ({num1, num2}) => {
    if (num2 === 0) {
        return <div>Não é possível dividir por zero!</div>
    }

  return (
    <div>O resultado de {num1} / {num2} é {num1 / num2}</div>
  )
}

Divisao.Proptypes = {
    num1: Proptypes.number.isRequired,
    num2: Proptypes.number.isRequired,
}
export default Divisao