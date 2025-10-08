import React from 'react'

export const Produto = ({nome,preço,categoria,status}) => {
  return (
    <div>
        <p>Nome: {nome} </p>
        <p>preço: {preço}</p>
        <p>Categoria: {categoria}</p>
        <p>Status: {status}</p>
        <p>Quantidade: {status >= 0 ? "Disponivel" : "esgotado"}</p>
    </div>
  )
}

export default Produto