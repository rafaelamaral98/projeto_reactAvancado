import React from 'react';
export default function Index(){
    return(
        <div>
            <br/><br/><br/><br/>

            <main>

                <h2>Seja Bem-Vindo (a)</h2>
                <p id="desconto">Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>

                <br/><br/><br/><br/>

                <div className="container">
                    <h2>Encontre aqui para a sua casa os melhores eletrodomésticos!</h2>
                    <ul className="list-group">

                        <li className="list-group-item">Fogões</li>
                        <li className="list-group-item">Geladeiras</li>
                        <li className="list-group-item">Lava-Louças</li>
                        <li className="list-group-item">Lavadora de Roupas</li>
                        <li className="list-group-item">Microondas</li>

                    </ul>

                </div>

            </main>

            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
        </div>
    );
}