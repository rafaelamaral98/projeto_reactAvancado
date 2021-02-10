import * as Script from '../JavaScript/funcoes.js';

export default function boxProdutos(){
    
    return(
       
       <section className="categorias bg-dark">
                    
            <nav className="navbar navbar-expand-lg container-fluid text-white">
                <h3 className="navbar-brand font-weight-bold">Categorias</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#categoria_nav">
                <span className="container-fluid text-white font-weight-bold">Mostrar</span>
                </button>

                <div id="categoria_nav" className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item ml-4" onClick={Script.exibir_todos}>Todos (12)</li>
                        <li className="nav-item ml-4" onClick={() => Script.exibir_categoria('geladeiras')}>Geladeiras (3)</li>
                        <li className="nav-item ml-4" onClick={() => Script.exibir_categoria('fogoes')}>Fogões (2)</li>
                        <li className="nav-item ml-4" onClick={() => Script.exibir_categoria('microondas')}>Microondas (3)</li>
                        <li className="nav-item ml-4" onClick={() => Script.exibir_categoria('lava_roupas')}>Lavadora de Roupas (2)</li>
                        <li className="nav-item ml-4" onClick={() => Script.exibir_categoria('lava_loucas')}>Lava-Louças (2)</li>
                    </ul>
                </div>
            </nav>

        </section> 

    )
}