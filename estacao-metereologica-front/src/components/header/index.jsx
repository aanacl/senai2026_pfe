import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="">

        {/* Título */}
        <span className="navbar-brand fw-bold">
          🌦️ Estação Meteorológica
        </span>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">
                Cadastro
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/relatorio">
                Relatório
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/">
                Sair
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}