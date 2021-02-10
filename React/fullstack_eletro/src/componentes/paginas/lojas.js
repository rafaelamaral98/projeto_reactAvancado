import React from 'react';
export default function Lojas (){
    return(
       
       <div>
            <header>

                <h2 className="font-weight-bold">Nossas Lojas</h2>

            </header>

            <hr/>
        
            <table className="table text-center">

                <thead>
                    <tr>
                        <th scope="col"><h3>Rio de Janeiro</h3></th>
                        <th scope="col"><h3>São Paulo</h3></th>
                        <th scope="col"><h3>Santa Catarina</h3></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <p>Avenida Presidente Vargas, 5000</p>
                            <p>10 &ordm; andar</p>
                            <p>Centro</p>
                            <p>(21) 3333-3333</p>
                        </td>
                        <td>
                            <p>Avenida Paulista, 985</p>
                            <p>3 &ordm; andar</p>
                            <p>Jardins</p>
                            <p>(11) 4444-4444</p>
                        </td>
                        <td>
                            <p>Rua Major &Aacute;vila, 370</p>
                            <p>3 &ordm; andar</p>
                            <p>Vila Mariana</p>
                            <p>(47) 5555-5555</p>
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
}