import { useState, useEffect } from 'react';

export default function Feriados() {
  const [feriados, setFeriados] = useState([]);

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/feriados/v1/2026')
      .then(response => response.json())
      .then(data => {
        setFeriados(data);
      })
      .catch(error => console.error('Erro ao acessar:', error));
  }, []);

  return (
    <>
      <h1>Feriados 2026</h1>

      {feriados.length > 0 ? (
        <div>
          {feriados.map((feriado, index) => (
            <div key={index}>
              <p>Nome: {feriado.name}</p>
              <p>Data: {feriado.date}</p>
              <p>Tipo: {feriado.type}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}