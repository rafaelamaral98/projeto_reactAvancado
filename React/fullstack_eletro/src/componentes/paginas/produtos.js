import React, {lazy, Suspense} from 'react';
import * as Script from './../../JavaScript/funcoes.js';

const BoxMenu = lazy (()=> import ('../boxMenu'))

export default class Produtos extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            produtos:[]
        }
        this.enviarCompra = this.enviarCompra.bind(this);
    }
    
    async componentDidMount(){
        let resposta = await fetch('http://localhost:5000/produtos');
        let dados = await resposta.json();
        this.setState({produtos: dados});
    }

    async enviarCompra(elemento){
        elemento.preventDefault();
        const url = "http://localhost:5000/compra";
        const dados = new FormData(elemento.target);
        let json = {};
        dados.forEach((valor, chave) => {
            json[chave] = valor;
        })
        const cabecalho = {
            method: "post",
            body: JSON.stringify(json),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        await fetch(url,cabecalho);
    }
    
    render(){
        return(
            <div>
                <Suspense fallback={<h1>Os produtos vão aparecer aqui!</h1>}>
                    <BoxMenu></BoxMenu>
                </Suspense>

                <header>
                    <h2>Produtos</h2>
                </header> 
                
                <hr/> 

                <div className="container-fluid">
                    
                    <div className="produtos row row-cols-2 row-cols-md-3 row-cols-lg-4">
                        
                        {this.state.produtos && this.state.produtos.map((item,id,)=>
                        
                            <div className="box_produto col mb-1 border border-dark" id={item['categoria']}>

                                <img src={require('./../../' + item['imagem']).default} width="120px" onClick={() => Script.destaque(this)} alt=""/>
                                <br/>

                                <p className="nome_produto">{item['descricao']}</p>
                                <hr/>

                                <p className=""><del>{parseInt(item['preco_antigo']).toLocaleString ('pt-br', {style: 'currency', currency: 'BRL'})}</del></p>
                                <p className="text-danger font-weight-bold">{parseInt(item['preco_venda']).toLocaleString ('pt-br', {style: 'currency', currency: 'BRL'})}</p><br/>            


                                <form onSubmit={this.enviarCompra}>
                                    <button type="submit" className="btn btn-danger font-weight-bold" onMouseOver={() => Script.porCima(this)} onMouseOut={() => Script.porFora(this)}>COMPRAR</button>
                                    <input type="hidden" name="cliente" value="cliente_default"/>
                                    <input type="hidden" name="produto" value={item['descricao']} />
                                    <input type="hidden" name="valor_unitario" value={item['preco_venda']} />
                                </form>
                                <br/><br/>               

                            </div>                         

                        )}

                    </div> 
                    
                </div>      

            </div>   
        );
    }
}