import React from 'react'
import Linguagens from './components/Produto'


const App = () => {
  return (
    <div>
      {
        [
          {nome:"short", preço:"50", categoria:"vestuario", quantidade:"5"},
          {nome:"parafuso", preço:"40", categoria:"mecanica", quantidade:"0"},
          {nome:"porta", preço:"50", categoria:"marcenaria", quantidade:"4"}
        ].map((Produto) =>
          <Produto nome= {Produto.nome} preco= {Produto.preco} categoria={Produto.categoria} quantidade={Produto.quantidade}/>
        
        ) 
      }

    </div>
  )
}

export default App