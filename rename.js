const fs = require('fs') ;

let directoryName=__dirname+'/images';

const files =fs.readdirSync(directoryName);

let number=0;

files.forEach((file)=>{
    console.log(file);
    number=number+1;
    let newName="image"+number+'.jpg';

    fs.rename(directoryName+'/'+file, directoryName+'/'+newName,
        err=>{
            console.log(err)
        })
})