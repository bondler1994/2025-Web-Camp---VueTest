//# 次處為options object 雖然教options 卻不能都是空值，至少要一個空物件
//# 這樣會新增一個instance實例，而html裡面得id=app就會被它連接
const app = Vue.createApp({
    data() {
        return {
            //test SZA youtube
            // youtube: "https://www.youtube.com/watch?v=hWjwNgiLMgA&list=RDhWjwNgiLMgA&start_radio=1",
            cart: 0,
            premium: true,
        };
    },
    methods: {},
    //用來計算用，相加相減
});
