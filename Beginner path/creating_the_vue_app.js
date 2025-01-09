//# 次處為options object 雖然教options 卻不能都是空值，至少要一個空物件
//# 這樣會新增一個instance實例，而html裡面得id=app就會被它連接
const app = Vue.createApp({
    data() {
        return {
            product: "socks",
            image: "../Intro-to-Vue-3/assets/images/socks_green.jpg",
            // inStock: false,
            inventory: 0,
            details: ["50% happy", "30% jeremy", "20% watson"],
            variants: [
                { id: 2235, color: "blue" },
                { id: 2234, color: "blue" },
                { id: 1, color: "black" },
            ],
        };
    },
});
