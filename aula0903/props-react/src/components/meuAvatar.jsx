export default function MeuAvatar(props){
    return(
        <>
       <h1>{props.nome}</h1>
       <h2>{props.idade}<span>{props.cidade}</span></h2>
       <h3>{props.estilo}<span>{props.disciplina}</span></h3>
         </>
    )
}