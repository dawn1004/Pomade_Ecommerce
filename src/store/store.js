import Vue from 'vue'
import Vuex from 'vuex'
// import { for } from 'core-js/fn/symbol';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: "mamamammamamama",
        products: [
            {
                url: require(`../assets/pomades/product (1).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (2).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (3).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (4).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (5).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (6).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (7).jpg`),
                name: "Greasy Basky POmade",
                price: 560.0,
                description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            },
            {
                url: require(`../assets/pomades/product (8).jpg`),
                name: "Greasy Basky POmade1",
                price: 560.0,
                description: { hold: 2, shine: 2, washability: 2, restylability: 5 },
            },
        ],
        cart: [{
            url: require(`../assets/pomades/product (6).jpg`),
            name: "Greasy Basky POmade asdasdasd",
            price: 560.0,
            description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            quantity: 1
        },
        {
            url: require(`../assets/pomades/product (7).jpg`),
            name: "Greasy Basky POmade",
            price: 560.0,
            description: { hold: 4, shine: 1, washability: 3, restylability: 5 },
            quantity: 1

        },
        {
            url: require(`../assets/pomades/product (8).jpg`),
            name: "Greasy Basky POmade1",
            price: 560.0,
            description: { hold: 2, shine: 2, washability: 2, restylability: 5 },
            quantity: 1

        }]
    },
    mutations: {
        addProductsOnCart: (state, args) => {
            if (args.byIndex == true) {
                let item = state.products[args.index];
                item.quantity = 1;
                state.cart.push(item);

            } else {
                let item = args.obj
                item.quantity = 1;
                state.cart.push(item);
                console.log(item.quantity);

            }
        },
        addQuantity: (state, args) => {
            console.log(args)
            state.cart.forEach((item, index) => {
                if (index == args.index) {
                    if (args.add == true) {
                        item.quantity += 1;
                    } else {
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                        }
                    }
                }
            });


        },
        removeFromCart: (state, index) => {
            let items = state.cart;
            let newValue = [];
            items.forEach((item, i) => {
                if (i != index) {
                    newValue.push(item)
                }
            })
            state.cart = newValue;
        }
    }

})