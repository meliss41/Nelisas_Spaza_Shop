var assert = require('assert')
var profits = require('../modules/profit');

var purchasesFile = './files/NelisaPurchases.csv';
var salesFile = './files/NelisaSalesHistory.csv';

describe('it should check for Nelisas profits', function(){
it('should find profits for each product', function(){
	var nelisasProfitsPerProd = profits.getProfitPerProducts('salesFile-purchasesFile');
		//nelisasProfitsPerProd = profits.getProfitPerProducts(purchasesFile);
	
	var result = {'Chakalaka Can': 264,
				  'Coke 500ml': 435,
				  'Cream Soda 500ml': 205.5,
				  'Fanta 500ml': 177.5,
				  'Gold Dish Vegetable Curry Can': 295,
				  'Imasi': 887,
				  'Iwisa Pap 5kg': 390,
				  'Milk 1l': 358.5,
				  'Top Class Soy Mince': 368,
				  'Bananas - loose': 156,
				  'Apples - loose': -567,
				  'Mixed Sweets 5s': -1615,
				  'Shampoo 1 litre': 260,
				  'Soap Bar': 144,
				  'Bread': 290,
				  'Rose (plastic)': 10,
				  'Heart Chocolates': 200,
				  'Valentine Cards': 16 };

	assert.deepEqual(result,nelisasProfitsPerProd);

	});

});

