import './App.css'
import logSesi from './assets/img/sesi-e-senai_2.png'
export default function App() {

  return (
   <>
   
   <div className="container">
<img src={logSesi} alt="logo sesi senai" className="logo" />
<h1 className='titulo'>login</h1>
<span className='subtitulo'>para continuar</span>
<label htmlFor='nome' className='label'>nome</label>
<input type="text" className="campo" id='nome' placeholder='seu nome'/>
<label htmlFor='senha' className='label'>senha</label>
<input type="text" className="campo" id='senha' placeholder='***'/>
<button className="botao">log in</button>
<span className="textofooter">esqueceu a senha</span>
<span className="textofooter">cadastre-se</span>
    </div>
       </>
  )
}

//export default App;
