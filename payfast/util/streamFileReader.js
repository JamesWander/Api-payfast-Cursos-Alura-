var fs = require('fs');

fs.createReadStream('imagem.png')
    .pipe(fs.createWriteStream('imagem-com-stream.png'))
    .on('finish',function(){
        console.log('Arquivo escrito com stream');
        
    });