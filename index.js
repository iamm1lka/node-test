// импорты и переменные
const express = require('express');
const products = require('./src/js/products.js');
const features = require('./src/js/features.js');
const bot = require('./src/js/telegraf.js');



const port = 3000;

// настройка сервера
const app = express();

bot.launch()

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/axios/dist'));
	
app.get('/', (req, res) => {
	res.render(
		'index', 
		{
			title: 'Все персонажи Рика и Морти',
			message: `1, 2,... `,
			products,
			features
		}
	);
})

app.get('/about', (req, res) => {
	res.render(
		'index', 
		{
			title: 'Главная страница сайта',
			message: 'Добро пожаловать на главную'
		}
	);
})

// запуск сервера
app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});