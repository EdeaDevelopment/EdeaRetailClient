/* eslint-disable indent */
<<template>
  <div id='headercart'>
    <nav class="nav customheader">
    <div class="nav-left">
      <a class="nav-item">
        <router-link to="/ShoppingCart">
          <div>
            <a class="cd-img-replace shoppingcarticon" href="#0" v-on:click="cartTrigger">
              <icon name="shopping-cart" scale="3"></icon>
            </a>
          </div>
        </router-link>
      </a>
      <a class="nav-item">
        <span class="itemscount">{{ itemsCount }}</span>
      </a>
    </div>
    <div class="nav-center">
      <a class="nav-item spancustomername">                
        <span class="spanheader spancustomername">{{ customerName }}</span>
        <span class="spanheader"> {{ $n(leftToPay, 'currency') }}</span>
      </a>
    </div>
    <div class="nav-right">
      <a class="nav-item">
        <a class="button is-large plusbtn">+</a>
      </a>
    </div>
  </nav>
    <!--<div id="logo"><img src="../../assets/images/cart/cd-logo.svg" alt="Homepage"></div>-->
    <!-- <div id="logo"><img class="logoheader" src="http://mobileapi.edea.co.il/mobileresources/RetailChains/castro.png" alt="Homepage"></div>
    <div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
    <router-link to="/ShoppingCart">
      <div id="cd-cart-trigger">
        <a class="cd-img-replace" href="#0" v-on:click="cartTrigger"></a>
      </div>
    </router-link> -->
    <!--<div class="customcart">
      <i class="fa fa-shopping-cart" @click="showCart = !showCart"></i>
    </div>-->
    <!-- <div class="item">
      <span class="textabove headertext">{{ customerName }}</span><br>
      <div class="textbelow">        
        <span class="headertext"> {{ $n(leftToPay, 'currency') }}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'header',
  mounted() {
    var data = {
      employeeIdNumber: '2524',
      posPassword: '12'
    }
    this.$store.dispatch('userModule/getEmployeeDetails', data)
  },
  data: function () {
    return {
    }
  },
  computed: {
    customerName() {
      var data = this.$store.getters['ShoppingCartModule/TransactionUserDetails']
      if (data) {
        return data
      }
      return 'Aloni Ploni'
    },
    leftToPay() {
      var temptransaction = this.$store.getters['ShoppingCartModule/LeftToPay']
      return temptransaction
    },
    itemsCount() {
      var itemCount = this.$store.getters['ShoppingCartModule/ItemsCount']
      return itemCount
    }
  },
  methods: {
    cartTrigger(event) { }
  }
}
</script>

<style scouped lang='scss'>
@import '../../common/sass/base.scss';
@import '../../common/sass/responsive/mediaqueries.scss';

.customheader {
  height: $headerheight !important;
  background-color: black !important;
}

.shoppingcarticon {
  color: white !important;
}

.itemscount {
  color: white;
  font-size: x-large;
}

.spanheader {
  color: white;
  font-size: large;
}

.spancustomername {
  display: block !important;
}

.plusbtn {
  border-radius: 25px !important;
  border: 2px solid white !important;
}

@media #{$mobileportrait} {  
  .plusbtn {
    border-radius: 25px !important;
    border: 1px solid white !important;
  }
}

// @media ($tablet) {
//   .spanheader {
//     color:white;
//     font-size: small;
//   }
// }
// @media ($desktop) {
//   p {
//     font-size: 20px;
//   }
// }
// .customcart 
//   background-color: yellow
//   float: left
//   width: 10%
//   height: 100%
// .headertext
//   color: white
//   text-align: center
// .currencsym
//   color: white  
// div.item 
//     display: inline-block
//     text-align: center
//     width: 30%
//     height: 100%
//     position: relative
//     line-height: 1.5
//     top: 20%
// .caption 
//     display: block
// .textabove 
//   top: 20%
//   left: 40%
// .textbelow
//   top: 50%
//   left: 40%
//   display: initial;
//   width: 150px
// .cd-img-replace 
//   /* replace text with a background-image */
//   display: inline-block;
//   overflow: hidden;
//   text-indent: 100%;
//   white-space: nowrap;
// #headercart 
//   position: relative;
//   margin: -8px;
//   height: 50px;
//   background: #31353d;
//   text-align: center;
//   box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
//   z-index: 4;
// @media only screen and (min-width: 1200px) 
//   #headercart 
//     height: 80px;
// .logoheader
//   height: 100%
// #logo 
//   float:right
//   -webkit-transform: scale(0.8)
//   -moz-transform: scale(0.8)
//   -ms-transform: scale(0.8)
//   -o-transform: scale(0.8)
//   transform: scale(0.8)
//   background: white
//   height: 100%
// @media only screen and (min-width: 1200px) 
//   #logo 
//     float:right
//     position: absolute;
//     /* logo left margin on Dekstop */
//     right: 2.4em
//     -webkit-transform: scale(1)
//     -moz-transform: scale(1)
//     -ms-transform: scale(1)
//     -o-transform: scale(1)
//     transform: scale(0.5)
//      background: white
// @media only screen and (min-width: 600px) and (max-width: 1200px) 
//   #logo 
//     float:right
//     position: absolute
//     /* logo left margin on Dekstop */
//     right: 0.4em
//     -webkit-transform: scale(1)
//     -moz-transform: scale(1)
//     -ms-transform: scale(1)
//     -o-transform: scale(1)
//     transform: scale(0.5)
//     background: white
//   div.item 
//     display: inline-block;
//     text-align: center;
//     width: 30%;
//     height: 100%;
//     position: relative;
//     line-height: 1.5;
//     top: 5%;
// #cd-hamburger-menu, #cd-cart-trigger 
//   position: absolute;
//   top: 0;
//   height: 100%;
// #cd-hamburger-menu a, #cd-cart-trigger a 
//   width: 60px;
//   height: 100%;
// #cd-cart-trigger 
//   left: 0;
// #cd-cart-trigger a 
//   background: #26292f url("../../assets/images/cart/cd-cart.svg") no-repeat center center;
// @media only screen and (min-width: 1200px) 
//   #cd-cart-trigger 
//     /* cart right margin on desktop */
//     left: 0;
//   #cd-cart-trigger a 
//     position: relative;
//     width: 100px;
//     border-left: none;
//     background-color: #26292f;
</style>
