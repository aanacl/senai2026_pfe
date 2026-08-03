import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Turma from "../img/turma.jpg";

export default function(){
    return(
        <>
        <Header />
        <main>
            <section>
                <Image src={Turma}/>
            </section>
            <section>
                <h3>informacoes</h3>
                <div>
                    <h6>formatura 18/12/2026</h6>                
                    <p>todos estarao reunidos para viver
                    esse momento especial em nossas vidas</p>
                </div>
                <div>
                    <h6>proximo trote 11/08/2026</h6>
                    <p>tema do trote: personagens</p>
                </div>
            </section>
        </main>
        </>
    )
}
