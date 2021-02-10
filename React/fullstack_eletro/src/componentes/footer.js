import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(

            <footer id="copyright">

            <p className="text-danger font-weight-bold">Formas de Pagamento:</p>      
            <img className=" img-fluid" src={require('./../Imagens/Formas de Pagamento.jpg').default} alt="Formas de Pagamento"/>
    
            <p className="font-weight-bold">&copy; Rafael Amaral</p>
    
            </footer>

        );
    }
}