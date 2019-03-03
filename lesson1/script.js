
var budget = prompt("Какой у вас бюджет?",1000);
var name = prompt("Название вашей фирмы?","У Ашота");
/*console.log(budget);
console.log(name);*/

MainList = {
		budget: budget,
		name: name,
		shopGoods: [],
		employers: {}, 
		open: true
}
console.log(MainList["name"]);
MainList.shopGoods[0] = prompt("Какой тип товаров будем производить?",'Тип товара');
console.log(MainList.shopGoods[0]);
MainList.shopGoods[1] = prompt("Какой тип товаров будем производить?",'Тип товара');
console.log(MainList.shopGoods[1]);
MainList.shopGoods[2] = prompt("Какой тип товаров будем производить?",'Тип товара');
console.log(MainList.shopGoods[2]);
budget = budget/30;
alert("Бюджет вашей фирмы на 1 день " + budget + '$');


var num = 33721;
var a = num % 10; //1
var j = num - a; //33720
var	b = num % 100; //2
var h = j - (b * 10); //337
var y = h % 10; //7