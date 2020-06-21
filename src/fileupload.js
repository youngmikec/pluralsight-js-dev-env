import http from 'http';
let formidable = require('formidable');
import fs from 'fs';

http.createServer((req, res)=>{
    if(req.url == '/fileupload.js'){
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            let oldpath = files.filetoupload.path;
            let newpath = '../uploads/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, (err)=>{
                if(err) throw err;
                res.write('File uploaded successfully and moved to the uploads folder');
                res.end();
            });
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end('./fileupload.js');
    }
});
