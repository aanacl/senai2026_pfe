
import "./index.css";
import Header from '../../components/header';
import GraficoBarra from "../../components/graficoBarra";


export default function Dashboard(){
    return(
        <>
        <Header />
        <section className='cards'>
<div className='card'>
<h6>temperatura</h6>
<h2>32 graus</h2>

            </div>
<div className='card'>
<h6>umidade</h6>
<h2>60%</h2>

            </div>
<div className='card'>
<h6>Pressão</h6>
<h2>1013 hPa</h2>

            </div>
<div className='card'>
<h6>Vento</h6>
<h2>12Km</h2>

            </div>

        </section>

        <section className='graficos'>
<h6>graficos</h6>
<div>
   <GraficoBarra />
   <GraficoBarra />
</div>
        </section>
        <section className="tabela">
            <h6>leituras recentes</h6>
            <table>
                <thead>
                    <tr>
                        <th>horario</th>
                        <th>temp.</th>
                        <th>umidade</th>
                        <th>vento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00</td>
                        <td>45 graus</td>
                        <td>50%</td>
                        <td>13Km</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>45 graus</td>
                        <td>50%</td>
                        <td>13Km</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </>
    )
}