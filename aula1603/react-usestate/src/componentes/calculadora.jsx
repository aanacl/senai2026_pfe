import { useState } from "react";

export default function Calculadora({ titulo }) {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");
    const [erro, setErro] = useState("");

    function validar(n1, n2 = null) {
        if (n1 === "" || (n2 !== null && n2 === "")) {
            setErro("Preencha todos os campos");
            return false;
        }

        if (n1 <= 0 || (n2 !== null && n2 <= 0)) {
            setErro("Não são permitidos números zero ou negativos");
            return false;
        }

        setErro("");
        return true;
    }

    function somar(e) {
        e.preventDefault();
        if (!validar(num1, num2)) return;
        setResultado(Number(num1) + Number(num2));
    }

    function subtrair(e) {
        e.preventDefault();
        if (!validar(num1, num2)) return;
        setResultado(Number(num1) - Number(num2));
    }

    function multiplicar(e) {
        e.preventDefault();
        if (!validar(num1, num2)) return;
        setResultado(Number(num1) * Number(num2));
    }

    function dividir(e) {
        e.preventDefault();
        if (!validar(num1, num2)) return;
        setResultado(Number(num1) / Number(num2));
    }

    function raiz(e) {
        e.preventDefault();
        if (!validar(num1)) return;
        setResultado(Math.sqrt(Number(num1)));
    }

    function potencia(e) {
        e.preventDefault();
        if (!validar(num1, num2)) return;
        setResultado(Math.pow(Number(num1), Number(num2)));
    }

    function limpar() {
        setNum1("");
        setNum2("");
        setResultado("");
        setErro("");
    }

    return (
        <div className="container">
            <h1>{titulo}</h1>

            <form>
                <input
                    type="number"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <div className="botoes">
                    <button onClick={somar}>+</button>
                    <button onClick={subtrair}>-</button>
                    <button onClick={multiplicar}>×</button>
                    <button onClick={dividir}>÷</button>
                    <button onClick={potencia}>xʸ</button>
                    <button onClick={raiz}>√</button>
                    <button type="button" onClick={limpar}>Limpar</button>
                </div>
            </form>

            {erro && <p className="erro">{erro}</p>}
            <h2>Resultado: {resultado}</h2>
        </div>
    );
}