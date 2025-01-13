//# 次處為options object 雖然教options 卻不能都是空值，至少要一個空物件
//# 這樣會新增一個instance實例，而html裡面得id=app就會被它連接
const app = Vue.createApp({
    data() {
        return {
            //test SZA youtube
            // youtube: "https://www.youtube.com/watch?v=hWjwNgiLMgA&list=RDhWjwNgiLMgA&start_radio=1",
            cart: 0,
            testShow: false,
            brand: "Vue Mastery",
            product: "socks",
            h2test1: "you are",
            h2test2: "fucking shit hole",
            selectedVariant: 0,
            inventory: 0,
            details: ["50% happy", "30% jeremy", "20% watson"],
            // tryIts: ["try1", "try2", "try3"],
            variants: [
                { id: 2234, color: "green", image: "../Intro-to-Vue-3/assets/images/socks_green.jpg", quantity: 50 },
                // , image: "../Intro-to-Vue-3/assets/images/socks_green.jpg", quantity: 50
                { id: 2235, color: "blue", image: "../Intro-to-Vue-3/assets/images/socks_blue.jpg", quantity: 0 },
                // image: "../Intro-to-Vue-3/assets/images/socks_blue.jpg", quantity: 0
            ],
        };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
    },
    //用來計算用，相加相減
    computed: {
        title() {
            //這裏連接到h1 相加了brand ＆ product
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },

        h2test() {
            return this.h2test1 + " " + h2test2;
        },
    },
});
