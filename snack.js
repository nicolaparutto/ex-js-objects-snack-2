// 🏆 Code Question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Doubble Cheese Burgher
console.log(secondBurger.name); // Doubble Cheese Burgher

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
/* Risposta: Stamperà "Doubble Cheese Burgher" perchè la "copia" secondBurgher fa soltanto da riferimento a hamburgher,
quindi cambiandone il valore, verra sostituito quello di hamburgher.
Inoltre a riga 5 viene sostituito anche il valore della proprietà weight*/

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: Un solo oggetto.

//================================================================================

// 🏆 Code Question 2
const hamburger1 = {
	name: "Cheese Burger",
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
const secondBurger1 = { ...hamburger1 };
secondBurger1.ingredients[0] = "Salad";

console.log(hamburger1.ingredients[0]); // Salad
console.log(secondBurger1.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//  Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
/* Risposta: Stamperà "Salad", perchè facendo lo spread operator, si crea una copia dell'oggetto hamburgher1,
ma non della proprietà ingredients conenuta al suo interno. Quindi modificando la proprietà ingredients di secondBurger1,
verrà modificata anche quella di hamburgher1. */

//  Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: Vengono creati 2 oggetti, uno con i dati di hamburgher1 e uno con la copia dei dati di hamburgher1.
//================================================================================

// 🏆 Code Question 3
const hamburger2 = {
	name: "Cheese Burger",
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger2 = structuredClone(hamburger2);
const thirdBurger = structuredClone(hamburger2);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: Vengono creati 3 oggetti, uno con i dati di hamburgher2 e due con la copia dei dati di hamburgher2.

//================================================================================

// 🏆 Code Question 4
const chef2 = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Risposta: Il miglior metodo per clonare l'oggetto chef2 è lo Spread Operator  perchè permette di creare una copia dell'oggetto chef2.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// Risposta: Il miglior metodo per clonare l'oggetto restaurant è lo structuredClone, perchè riesce a restituirci il risultato dell'oggetto newDate, contenuto in openingDate.

//================================================================================

// 🎯 Code Question 5 (Bonus)
const hamburger3 = {
	name: "Cheese Burger",
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = { ...hamburger3.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger3 = { ...hamburger3 };
secondBurger3.maker.restaurant = newRestaurant;
secondBurger3.maker.name = "Chef Hyur";

console.log(hamburger3.maker.name); // Chef Hyur
console.log(secondBurger3.maker.name); // Chef Hyur
console.log(hamburger3.maker.restaurant.name); // Hyur's II
console.log(secondBurger3.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
/* Risposta:
-- 1 Log: Stamperà "Chef Hyur" perchè a riga 113 viene modificato il valore della proprietà name di maker, in secondBurgher3. 
Però siccome secontdBurgher3 fa lo spread di hamburgher3, non crea una copia del contenuto di maker, ma fa riferimento ad esso, quindi lo modifica.
-- 2 Log: Stamperà "Chef Hyur", perchè viene creato un oggetto secondBurgher3 che è una copia di hamburgher3 e alla proprietà name viene poi assegnato il valore "Chef Hyur".
-- 3 Log: Stamperà "Hyur's II", perchè viene creato un oggetto newRestaurant che è una copia di hamburgher3.maker.restaurant e alla proprietà name viene poi assegnato il valore "Hyur's II".
-- 4 Log: Stamperà "Hyur's II", perchè secondBurgher3 è un oggetto creato con lo spread di hamburgher3 e la proprietà restaurant viene poi modificata con il valore di newRestaurant, 
newRestaurant nella proprietà name ha valore "Hyur's II".
*/
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: 3 oggetti.
//================================================================================

// 🎯 Code Question 6 (Bonus)
const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},

	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
/* Risposta: Il miglior metodo per clonare l'oggetto chef è lo Spread Operator perchè permette di creare una copia dell'oggetto chef,
copiando anche i metodi al suo interno.*/

//================================================================================

// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
