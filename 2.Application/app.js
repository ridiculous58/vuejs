Vue.component('vue-cart',{
    props: {
        cart:{type:Array , required:true},
        title:{type:String,required:true},
        type:{type:String,required:true}
    },
    methods:{
        removeFromCart(index){
            this.cart.splice(index,1);
        },
        changeCart(index){
            const item = this.cart.splice(index,1);
            this.$emit("itemchangedoncart",item[0],this.type);
        }
    },
    computed :{
        cartTotal(){
            let total = 0;
            this.cart.forEach(item => {
                total += parseFloat(item.price);
            });
            return total.toFixed(2);
        },
        isShoppingCart(){
            return this.type == "shoppingCart"
        },
        isSavedCart(){
            return this.type == "savedCart"
        },
        isCartItemExist(){
            return this.cart.length > 0;
        }
    }
    ,
    template: `
    <div class="bind-root">
        <h2>{{title}}</h2>
        <p v-if="!cart.length">No item in cart</p>
        <div class="cart">
            <div class="item" v-for="(item,index) in cart">
                <div class="image">
                    <a v-bind:href="item.url">
                        <img v-bind:src="item.image" alt="" />
                    </a>
                </div>
                <div class="info">
                    <h4>{{item.name}}</h4>
                    <p class="seller">by {{item.seller}} </p>
                    <p class="status available" v-if="item.isAvailable">In Stock</p>
                    <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
                    <a href="#" v-on:click="removeFromCart(index)">Delete</a>
                    <a href="#" class="secondary" v-on:click="changeCart(index)" v-if="isShoppingCart">Save for later</a>
                    <a href="#" class="secondary" v-on:click="changeCart(index)" v-if="isSavedCart">Move To Cart</a>
                    </div>
                <p class="price">\${{item.price}}</p>
            </div>
            <div class="subtotal" v-if="isCartItemExist">
                Subtotal ({{cart.length}} items): <span class="price">{{cartTotal}}</span>
            </div>
        </div>
    </div>
    `
});


window.addEventListener('load', () => {
window.vue = new Vue({
        el:"#app",
        data:{
            isloading:true,
            cart:[],
            saved:[]
        },
        methods:{
            handleItemChange(item,type){
                if(type === "shoppingCart"){
                    this.saved.push(item)
                }
                else{
                    this.cart.push(item)
                }
            }
        },
        created(){
            fetch('data.json')
            .then((response) => {return response.json()})
            .then((response) => { 
                this.isloading = false;
                this.cart = response.cart;
                this.saved = response.saved;
            })
        }
    });
});