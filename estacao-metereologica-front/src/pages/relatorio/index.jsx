import Header from '../../components/header'
import GraficoBarra from "../../components/graficoBarra";

export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26°C", umidade: "68%"},
        {horario: "14:00", qualidadeAr: "Moderada", iqa: 40, temperatura: "35°C", umidade: "62%"},
        {horario: "16:00", qualidadeAr: "Boa", iqa: 42, temperatura: "25°C", umidade: "68%"},
        {horario: "18:00", qualidadeAr: "Moderada", iqa: 50, temperatura: "22°C", umidade: "68%"},
        {horario: "10:00", qualidadeAr: "Ruim", iqa: 20, temperatura: "40°C", umidade: "30%"},
    ]

    return(
        <div className="container">
            <Header />
            <h3>Relatório Estação Meteorológica</h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos">
                <GraficoBarra/>
            </section>

            <section
            className="tabela-leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidade}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}
