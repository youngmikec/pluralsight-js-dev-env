import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/*eslint-disable no-console */
const app = express();

const port = 3001;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
    })
);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res)=>{
    res.json([
        { id: 1, firstName: "Mike", lastName: "Smith", email: "mikesmith@gmail.com" },
		{ id: 2, firstName: "Tammy", lastName: "Norton", email: "tno@yahoo.com" },
		{id: 3,firstName: "Tina",lastName: "Lee",email: "lee.tina@hotmail.com"}
    ]);
});


app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})
