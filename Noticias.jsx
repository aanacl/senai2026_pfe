import { useContext } from "react";
import { ContextoTema } from "../contexts/TemaContexto";

export default function Noticias() {
  const { tema } = useContext(ContextoTema);

  const noticias = [
    {
      titulo: "Nova tecnologia revoluciona o mercado",
      descricao: "Uma inovação promete mudar tudo no mundo da tecnologia.",
      imagem: "https://via.placeholder.com/300"
    },
    {
      titulo: "Economia cresce em 2026",
      descricao: "Indicadores mostram crescimento acima do esperado.",
      imagem: "https://via.placeholder.com/300"
    },
    {
      titulo: "Esportes: final emocionante",
      descricao: "Time vence nos últimos minutos e levanta a torcida.",
      imagem: "https://via.placeholder.com/300"
    }
  ];

  return (
    <section className={`noticias-${tema}`}>
      <h2>Notícias</h2>

      <div className="cards">
        {noticias.map((noticia, index) => (
          <div key={index} className="card">
            <img src={noticia.imagem} alt="" />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
