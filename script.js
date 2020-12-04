
// importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
// console.log(price, tq); 
// addToCart('bread', 5)
// console.log(shippingCost); 

console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js'  

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 2);

console.log(cart);

/*
const ShoppingCart2 = (function(){
    const cart = [];
    const shoppingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`);
    }

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    }

    return {
        addToCart, cart, totalPrice, totalQuantity
    }
})();

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)
console.log(ShoppingCart2.shoppingCost);
*/

/*
// export
export.addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`);
}


// import
const {addToCart} = require('./shoppingCart.js')
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart : [
        { product: 'bread', quantity: 5},
        { product: 'pizza', quantity: 5},
    ],
    user:{loggedIn : true},
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if(module.hot){
    module.hot.accept();
}

class Person{
    greeting = 'Hey'
    constructor(name){
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}

const hanson = new Person('Hanson')

console.log('Hanson' ?? null);
console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x=>console.log(x))

import 'core-js/stable'
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// polifilling async functions
import 'regenerator-runtime/runtime';