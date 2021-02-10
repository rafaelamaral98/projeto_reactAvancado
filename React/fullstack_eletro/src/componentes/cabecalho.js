import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Rotas from './rotas';


export default class Cabecalho extends React.Component{
    render(){
        return(
            <Router>
                    <div className="container-fluid mx-0 px-0">
                
                        <nav  className= "navbar navbar-expand-md bg-dark container-fluid">
                            
                            <div className="navbar-header">
                                <Link className= "navbar-brand" as={Link} to="/"><img className= "img-fluid" src={require('./../Imagens/Full Stack Eletro Logo.jpg').default} alt="Full Stack Eletro" width="150px"/></Link>
                            </div>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu_navbar">
                                <span className="container-fluid text-white">Abrir</span>
                            </button>
                
                            <div className="collapse navbar-default navbar-collapse justify-content-end" id="menu_navbar">
                
                                <ul className="nav mr-4 navbar-nav ml-0">
                                    <li className="nav-item font-weight-bold"><Link className="nav-link text-white" as={Link} to="/produtos"><span>Produtos</span></Link></li>
                                    <li className="nav-item font-weight-bold"><Link className="nav-link text-white" as={Link} to="/lojas">Nossas Lojas</Link></li>
                                    <li className="nav-item font-weight-bold"><Link className="nav-link text-white" as={Link} to="/contato">Contato</Link></li>
                                </ul>    
                
                            </div>
                
                        </nav>
                    
                    </div>
                <Rotas/>
            </Router>            
        );
    }
}