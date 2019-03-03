
var budget = prompt("Какой у вас бюджет?",1000);
var name = prompt("Название вашей фирмы?","У Ашота");

let MainList = {
		budget: budget,
		name: name,
		shopGoods: [],
		employers: {}, 
		open: true
}

for (let i = 0; i < 5; i++) {
	MainList.shopGoods[i] = prompt("Какой тип товаров будем производить?",'Тип товара');
	console.log(MainList.shopGoods[i]);
}



budget = budget/30;
alert("Бюджет вашей фирмы на 1 день " + budget + '$');
