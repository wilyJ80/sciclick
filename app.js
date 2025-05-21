import express from 'express';
import ejs from 'ejs';

export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.html');
});

app.get('/inicial/geral', (req, res) => {
	res.render('inicialgeral.html');
});

app.get('/inicial/organizador', (req, res) => {
	res.render('inicialorganizador.html');
});
