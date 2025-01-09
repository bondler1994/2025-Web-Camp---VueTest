//# 次處為options object 雖然教options 卻不能都是空值，至少要一個空物件
//# 這樣會新增一個instance實例，而html裡面得id=app就會被它連接
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "socks",
            image: "../Intro-to-Vue-3/assets/images/socks_green.jpg",
            // inStock: false,
            inventory: 0,
            details: ["50% happy", "30% jeremy", "20% watson"],
            variants: [
                { id: 2234, color: "green", image: "../Intro-to-Vue-3/assets/images/socks_green.jpg" },
                { id: 2235, color: "blue", image: "../Intro-to-Vue-3/assets/images/socks_blue.jpg" },
            ],
        };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
    },
});
