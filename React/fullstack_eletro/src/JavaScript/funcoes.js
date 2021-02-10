export function exibir_categoria(categoria){
    let elementos = document.getElementsByClassName("box_produto");
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        console.log(elementos[i].id);
        if(categoria == elementos[i].id)
            elementos[i].style = "display: inline-table";
        else
            elementos[i].style = "display:none";
    }
}

export function exibir_todos() {
    let elementos = document.getElementsByClassName("box_produto");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display: inline-table";
    }
}

export function destaque(imagem) {
    console.log(imagem);
    if (imagem.width == 240)
        imagem.width = 120;

    else
        imagem.width = 240;
}

export function porCima(botao) {
    botao.style = "padding: 30px 64px";
}

export function porFora(botao) {
    botao.style = "padding: 15px 32x";
}