export default function Sidebar() {
  return (
    <div className="card">
      <h3>Pessoas que talvez você conheça</h3>

      {[1, 2, 3, 4].map((item) => (
        <div className="person" key={item}>
          <img src="https://i.pravatar.cc/50" alt="" />

          <div>
            <h4>Nome Sobrenome</h4>
            <p>Título, cargo e tecnologias</p>
            <button>Conectar</button>
          </div>
        </div>
      ))}
    </div>
  );
}