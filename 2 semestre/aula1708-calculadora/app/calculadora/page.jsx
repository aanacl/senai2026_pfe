"use client";

import { useState } from "react";
import Header from "../components/header";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function validarNumeros(quantidade = 2) {
    if (n1 === "") {
      setError("Digite o primeiro número.");
      return false;
    }

    if (quantidade === 2 && n2 === "") {
      setError("Digite o segundo número.");
      return false;
    }

    return true;
  }

  function calcular(operacao) {
    setError("");

    if (!validarNumeros()) return;

    const numero1 = Number(n1);
    const numero2 = Number(n2);

    let valor;

    switch (operacao) {
      case "somar":
        valor = numero1 + numero2;
        break;

      case "subtrair":
        valor = numero1 - numero2;
        break;

      case "multiplicar":
        valor = numero1 * numero2;
        break;

      case "dividir":
        if (numero2 === 0) {
          setError("Não é possível dividir por zero.");
          setResult(null);
          return;
        }

        valor = numero1 / numero2;
        break;

      default:
        return;
    }

    setResult(valor);
  }

  function raizQuadrada() {
    setError("");

    if (!validarNumeros(1)) return;

    const numero = Number(n1);

    if (numero < 0) {
      setError("Não é possível calcular a raiz de um número negativo.");
      setResult(null);
      return;
    }

    setResult(Math.sqrt(numero));
  }

  function limpar() {
    setN1("");
    setN2("");
    setResult(null);
    setError("");
  }

  return (
    <>
      <Header />

      <main className="calculator-page">
        <section className="calculator-card">
          <div className="calculator-header">
            <span className="calculator-icon">🧮</span>

            <div>
              <h1>Calculadora</h1>
              <p>Faça seus cálculos de forma rápida e simples.</p>
            </div>
          </div>

          <div className="inputs-container">
            <div className="input-group">
              <label htmlFor="n1">Número 1</label>

              <input
                id="n1"
                type="number"
                value={n1}
                placeholder="Digite um número"
                onChange={(e) => setN1(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="n2">Número 2</label>

              <input
                id="n2"
                type="number"
                value={n2}
                placeholder="Digite um número"
                onChange={(e) => setN2(e.target.value)}
              />
            </div>
          </div>

          <div className="operations">
            <button
              className="operation-button"
              onClick={() => calcular("somar")}
            >
              <span>+</span>
              Somar
            </button>

            <button
              className="operation-button"
              onClick={() => calcular("subtrair")}
            >
              <span>−</span>
              Subtrair
            </button>

            <button
              className="operation-button"
              onClick={() => calcular("multiplicar")}
            >
              <span>×</span>
              Multiplicar
            </button>

            <button
              className="operation-button"
              onClick={() => calcular("dividir")}
            >
              <span>÷</span>
              Dividir
            </button>

            <button
              className="operation-button sqrt-button"
              onClick={raizQuadrada}
            >
              <span>√</span>
              Raiz quadrada
            </button>
          </div>

          <div className="result-container">
            <span className="result-label">Resultado</span>

            <strong className="result">
              {result !== null
                ? Number(result.toFixed(8)).toLocaleString("pt-BR")
                : "0"}
            </strong>
          </div>

          {error && <div className="error-message">⚠️ {error}</div>}

          <button className="clear-button" onClick={limpar}>
            Limpar calculadora
          </button>
        </section>
      </main>
    </>
  );
}