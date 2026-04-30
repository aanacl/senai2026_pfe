const estudantes = [,
    {id: 1, nome: 'Pedro Rocath', ra: 123444, disciplina: 'geo'},
    {id:2, nome: 'ana', ra: 144344, disciplina: 'mat'},
    {id: 3, nome: 'clara', ra: 146440, disciplina: 'lp'}
]
export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'mat')

    const listaEstudantes = lista.map(( estudante) => {
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