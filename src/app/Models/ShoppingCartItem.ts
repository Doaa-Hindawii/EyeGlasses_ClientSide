export class ShoppingCartItem {
    constructor(
        public id:number,
        public quantity:number,
        public price:number,
        public totalPrice:number,
        public product_ID:number,
        public shoppingCart_ID:number,
    ){}
}