const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave"); 

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave); 

function mostraPalavrasChave(){ 
    const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
    const campoResultado = document. querySelector( "#resultado-palavrachave"); 
    const palavraChave = processaTexto(texto); 
    
    campoResultado.textoContent = palavras.join(","); 
    
    function processaTexto(texto) {
        let palavra = texto.split(/\P(L)+/u);
        return palavras;
    }

}