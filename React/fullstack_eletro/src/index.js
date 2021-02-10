import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './CSS/Estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import estados from './reducers/index'

const Header = lazy(()=> import ('./componentes/cabecalho'))
const Footer = lazy(()=> import ('./componentes/footer'))
const Produtos = lazy(()=> import ('./componentes/paginas/produtos'))

const store = createStore(
  estados
)

ReactDOM.render(
  <Provider store={store}>
    
    <Suspense fallback= {<h1>Carregando...</h1>}>
     
      <Header/>

    </Suspense>


    <Suspense fallback= {<h1>Carregando...</h1>}>
     
     <Footer/>
     
    </Suspense>

  </Provider>,
  document.getElementById('root')
);