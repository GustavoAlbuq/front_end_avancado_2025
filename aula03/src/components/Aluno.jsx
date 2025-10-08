import React from 'react'

const Aluno = ({nome, email, curso,média,}) => {
  return (
    <div>
        <p>Nome: {nome} </p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Média: {média}</p>
        <p>Status: {média >= 7.0 ? "Aprovado" : "Reprovado"}</p>
    </div>
  )
}

export default Aluno