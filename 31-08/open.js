var fs = require('fs')
fs.open('mytext1.txt','w', function(err, file){
    if(err) throw err;
    console.log('Saved after write Operation')
});

fs.writeFile('mytext2.txt','written to the file now', function(err, file){
    if(err) throw err;
    console.log('Written')
});

fs.appendFile('mytext1.txt','hello ', function(err, file){
    if(err) throw err;
    console.log('Append')
});

fs.unlink('mytext2.txt',function(err, file){
    if(err) throw err;
    console.log('Unlinked')
});

fs.rename('mytext1.txt','newfile.txt ', function(err, file){
    if(err) throw err;
    console.log('ReName')
});