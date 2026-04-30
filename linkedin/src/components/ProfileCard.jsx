export default function ProfileCard() {
  return (
    <div className="card profile">
      <div className="banner"></div>

      <img
        className="avatar"
        src="https://i.pravatar.cc/100"
        alt=""
      />

      <h2>Nome Sobrenome</h2>
      <p className="subtitle">
        Desenvolvedor | HTML | CSS | JavaScript | Node
      </p>

      <p className="location">
        São Paulo, Brasil • <span>informações de contato</span>
      </p>

      <div className="buttons">
        <button className="primary">Mensagem</button>
        <button className="secondary">Mais</button>
      </div>
    </div>
  );
}