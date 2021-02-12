import React, {lazy,Suspense} from 'react';
import {connect} from 'react-redux';
import {inserir} from './../../actions/mensagens';
import {passe_livre,passe_negado} from './../../actions/passe'

const FormasContato = lazy(() => import('./../formasContato'))

const estados = (states) =>{
    return{
        mensagens: states.mensagens,
        passe: states.passe
    }
}

const funcoes = () =>{
    return{
        inserir,
        passe_livre,
        passe_negado
    }
}

class Contato extends React.Component{
    
    constructor(props){
        super(props);
        this.enviarFormulario = this.enviarFormulario.bind(this);
    }

    async componentDidMount(){
        if(this.props.passe){
            const resposta = await fetch ('http://localhost:5000/pegarMensagem');
            const json = await resposta.json ();
            this.props.inserir(json)
            this.props.passe_negado()
            console.log (this.props.mensagens)
        }
        
    }

    async enviarFormulario(elemento){
        elemento.preventDefault();
        const url = "http://localhost:5000/enviarMensagem";
        const dados = new FormData(elemento.target);
        let json ={}
        dados.forEach((valor, chave) => {
            json[chave] = valor;
        })

        const cabecalho = {
            method: "post",
            body: JSON.stringify(json),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch(url,cabecalho)
        .then(document.getElementById('form').reset())
        .then(alert('Mensagem Enviada!'));
    }

    render(){
        return(
            
            <Suspense fallback={<h1>Carregando corpo da página ...</h1>}>
                <FormasContato enviarFormulario={this.enviarFormulario} passe_livre={this.props.passe_livre} mensagens={this.props.mensagens} />
            </Suspense>

        );
    }
}
export default connect(estados, funcoes())(Contato)