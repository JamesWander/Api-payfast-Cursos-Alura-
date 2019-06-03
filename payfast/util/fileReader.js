var fs = require('fs');

fs.readFile('imagem.png', function(erro, buffer){

    console.log('arquivo lido');
    
    fs.writeFile('imagem2.png',buffer, function(){
        console.log('arquivo escrito');
    });
});