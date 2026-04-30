const estudantes = [,
    {id: 1, nome: 'Pedro Rocath', ra: 123444, idade: 17},
    {id:2, nome: 'ana', ra: 144344, idade: 17},
    {id: 3, nome: 'clara', ra: 146440, idade: 17}
]
export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) => {
return <li key={estudante.id}>
    <h3>{estudante.nome}</h3>
    <p>{estudante.ra}</p>
    <p>{estudante.idade}</p>
</li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
{listaEstudantes}
        </ul>
         </>
    )
}