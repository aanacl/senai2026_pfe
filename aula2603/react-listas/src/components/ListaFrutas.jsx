const frutas = [
  { id: 1, nome: "manga" },
  { id: 2, nome: "pera" },
  { id: 3, nome: "uva" },
];

export default function ListaFrutas({ titulo }) {
  const listaFrutas = frutas.map((fruta) => {
    return (
      <li>
        <h3>{fruta.nome}</h3>
      </li>
    );
  });

  return (
    <>
      <h1>{titulo}</h1>
      <ul>{listaFrutas}</ul>
    </>
  );
}
