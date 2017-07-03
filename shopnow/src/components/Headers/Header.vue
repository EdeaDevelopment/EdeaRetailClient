/* eslint-disable indent */
<<template>
  <div id='headercart'>
     <div id="logo"><img src="../../assets/images/cart/cd-logo.svg" alt="Homepage"></div>

		<div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
		<router-link to="/ShoppingCart">
      <div id="cd-cart-trigger"><a class="cd-img-replace" href="#0" v-on:click="cartTrigger"></a></div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'header',
  ready () {
  },
  methods: {
    cartTrigger (event) {
    }
  }
}

</script>

<style scouped lang='sass'>
@import '../../common/sass/base.scss'
.cd-img-replace 
  /* replace text with a background-image */
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;

#headercart 
  position: relative;
  margin: -10px;
  height: 50px;
  background: #31353d;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 4;

@media only screen and (min-width: 1200px) 
  #headercart 
    height: 80px;
  
#logo 
  padding-top: 5px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);

@media only screen and (min-width: 1200px) 
  #logo 
    padding-top: 20px;
    position: absolute;
    /* logo left margin on Dekstop */
    right: 2.4em;
    top: 0;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  
#cd-hamburger-menu, #cd-cart-trigger 
  position: absolute;
  top: 0;
  height: 100%;

#cd-hamburger-menu a, #cd-cart-trigger a 
  width: 60px;
  height: 100%;

#cd-cart-trigger 
  left: 0;

#cd-cart-trigger a 
  background: #26292f url("../../assets/images/cart/cd-cart.svg") no-repeat center center;

@media only screen and (min-width: 1200px) 
  #cd-cart-trigger 
    /* cart right margin on desktop */
    left: 0;
  
  #cd-cart-trigger a 
    position: relative;
    width: 100px;
    border-left: none;
    background-color: #26292f;
</style>
