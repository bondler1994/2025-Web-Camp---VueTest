//# 次處為options object 雖然教options 卻不能都是空值，至少要一個空物件
//# 這樣會新增一個instance實例，而html裡面得id=app就會被它連接
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            inStock: false,
            inventory: 0,
            details: ["50% happy", "30% jeremy", "20% watson"],
            variants: [
                { id: 2234, color: "green", image: "../Intro-to-Vue-3/assets/images/socks_green.jpg", quantity: 50 },
                { id: 2235, color: "blue", image: "../Intro-to-Vue-3/assets/images/socks_blue.jpg", quantity: 50 },
            ],
        };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.variantImage = index;
            console.log(index);
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
    },
});
