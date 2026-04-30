import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
// import imgEstacao from '../assets/estacao-meteorologica.png'

export default function Login() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <section className="container-login">
            <div className="box-login">

                <div className="lado-esquerdo">
                    {/* <img src={imgEstacao} alt="" /> */}
                    <h1>Estacao</h1>
                </div>

                <div className="lado-direito">
                    <h2>Login</h2>

                    <form>
                        <label htmlFor="usuario">Usuário:</label>
                        <input
                            type="text"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />

                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <Link to="/dashboard" className="btn-login">
                            Entrar
                        </Link>
                    </form>
                </div>

            </div>
        </section>
    )
}