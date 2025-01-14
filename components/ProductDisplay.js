app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: false,
        },
    },
    template:
        /*html*/
        `
            <div class="product-display">
                <div class="product-container">
                    <div class="product-image">
                        <img :src="image" />
                        <!-- <a :href="youtube">sza</a> -->
                    </div>
                    <!-- {{}} 裡面放得東西是透過vue連接 -->
                    <!-- 有點像是電話得概念，串街過去 -->
                    <div class="product-intro">
                        <!-- <h1>{{ brand + " " + product }}</h1> -->
                        <h1>{{ title }}</h1>
                        <!-- <p>{{ h2test }}</p> -->

                        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p> -->
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <p>Shipping:{{shipping}}</p>
                        <p v-show="testShow">abc</p>
                        <ul>
                            <!-- <li v-for="tryIt in tryIts">{{tryIt}}</li> -->
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>
                        <div
                            v-for="(variant, index) in variants"
                            :key="variant.id"
                            @mouseover="updateVariant(index)"
                            class="color-circle"
                            :style="{backgroundColor:variant.color}"
                        >
                            <!-- 可選擇性 若寫css就會是background-color -->
                            {{ }}
                        </div>
                        <!-- 設計cart -->
                        <!-- <button class="button" v-on:click="cart += 1">add to Cart</button> -->
                        <!-- <button class="button" v-on:click="addToCart">add to Cart</button> -->
                        <!-- :class裡的是指定css style去偵測js狀態來決定是否顯示 -->
                        <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">add to Cart</button>
                    </div>
                </div>
            </div>

        `,
    data() {
        return {
            //test SZA youtube
            // youtube: "https://www.youtube.com/watch?v=hWjwNgiLMgA&list=RDhWjwNgiLMgA&start_radio=1",
            testShow: false,
            brand: "Vue Mastery",
            product: "socks",
            // h2test1: "you are",
            // h2test2: "fucking shit hole",
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
            this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
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
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99;
            }
        },
        // h2test() {
        //     return this.h2test1 + " " + this.h2test2;
        // },
    },
});
