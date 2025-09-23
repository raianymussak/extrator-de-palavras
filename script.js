const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave"); 

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave); 

function mostraPalavrasChave(){ 
    const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
    const campoResultado = document. querySelector( "#resultado-palavrachave"); 
    const palavraChave = processaTexto(texto); 
    
    campoResultado.textoContent = palavras.join(","); 
    
}
    function processaTexto(texto) {
        let palavra = texto.split(/\P(L)+/u);
        
        let frequencias = {};
        for (let i of palavras) {
            frequecia[i] =0;
            for(let j of palavras)
        if(i == j) {
            frequencias[i]++;
        }
    }

}
        return palavras;
     } 
