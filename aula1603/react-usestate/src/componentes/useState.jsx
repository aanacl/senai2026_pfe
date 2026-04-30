import { useState } from "react";


export default function UseState({titulo}){
const [nome, setNome] = useState('ana');
const [idade, setIdade ] = useState(17);
const [ra, setRa ] = useState(1770);
const [bolsa, setBolsa ] = useState(500);

return (
    <>
    <h1>{titulo}</h1>
    <h3>nome do aluno: {nome}</h3>
    <h4>idade: {idade}</h4>
    <h4>ra: {ra} </h4>
    <h4>tem bolsa de {bolsa} reais </h4>
    </>
)
}
