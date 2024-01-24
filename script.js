let texto = document.getElementById('meuTextArea');


function capturarTexto() {

    let textoOriginal = texto.value;

    
    let chave = 3;
    let textoCriptografado = criptografar(textoOriginal, chave);

    function criptografar(texto, chave) {
        let resultado = '';

        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];

            if (char.match(/[a-z]/i)) {
                let codigo = texto.charCodeAt(i);

                if (codigo >= 65 && codigo <= 90) {
                    char = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
                } else if (codigo >= 97 && codigo <= 122) {
                    char = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
                }
            }

            resultado += char;
        }

        return resultado;
    }
    function atualizarParagrafo() {
        
        let paragrafo = document.getElementById('mensagem');

    
        paragrafo.parentNode.removeChild(paragrafo);

       
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = textoCriptografado;
        novoParagrafo.id = 'mensagem';

        
        document.querySelector('.span-texto').appendChild(novoParagrafo);
    }
    atualizarParagrafo();

}


function DesCapturarTexto() {

    let textoOriginal = texto.value;

    let chave = 3;
    let textoCriptografado = descriptografar(textoOriginal, chave);
    
    function descriptografar(texto, chave) {
        let resultado = '';

        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];

            if (char.match(/[a-z]/i)) {
                let codigo = texto.charCodeAt(i);

                if (codigo >= 65 && codigo <= 90) {
                    char = String.fromCharCode(((codigo - 65 - chave + 26) % 26) + 65);
                } else if (codigo >= 97 && codigo <= 122) {
                    char = String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97);
                }
            }

            resultado += char;
        }

        return resultado;
    }
    
    function atualizarParagrafo() {
        
        let paragrafo = document.getElementById('mensagem');

        
        paragrafo.parentNode.removeChild(paragrafo);

    
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = textoCriptografado;
        novoParagrafo.id = 'mensagem';

       
        document.querySelector('.span-texto').appendChild(novoParagrafo);
    }
    atualizarParagrafo();
}