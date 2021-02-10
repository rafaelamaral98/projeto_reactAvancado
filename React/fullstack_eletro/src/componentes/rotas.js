import {Switch, Route} from 'react-router-dom';
import Index from './paginas/paginaInicial';
import Produtos from './paginas/produtos';
import Lojas from './paginas/lojas';
import Contato from './paginas/contato';
export default function Rotas (){
    return(
        <Switch>            
            <Route exact path ='/produtos' component = {Produtos}></Route>
            <Route exact path ='/lojas' component = {Lojas}></Route>
            <Route exact path ='/contato' component = {Contato}></Route>
            <Route exact path ='/' component ={Index}></Route>
        </Switch>
    );
}