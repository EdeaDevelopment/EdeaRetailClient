<<template>
  <div id="ShoppingCart">
    <h3>Shopping Cart</h3>
    <hr>
    <div class="row">
      <h4>
        {{ TemporaryTransactionNumber }}
      </h4>
      <!-- <h4>
        {{ LeftToPay }}
      </h4> -->
      <div>
      <input type="text" v-model="itemCode"  value="a">
      </div>
      <!-- <button @click="OpenTransaction()">Open Transaction</button> -->
      <button @click="TransactionAddItem(itemCode)">Transaction Add Item</button>
      <!-- <button @click="TransactionRemoveItem()">Transaction Remove Item 0</button> -->
    </div>
    <listview :transactionItems="TransactionItems"></listview>
      <div class="columns">
       <div class="column is-half">
         <a class="button is-medium is-black footer-button">
           קופונים
        </a>
      </div>
       <div class="column is-half">
         <a class="button is-medium is-black footer-button">
           מימוש נקודות
           </a>
      </div>
    </div>
    <router-link to="/Pay">
      <button>המשך לתשלום</button>
    </router-link>
  </div>
</template>

<script>
import ListView from '@/components/Collections/ListView'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'shoppingcart',
  data() {
    return {
      itemCode: ''
    }
  },
  components: {
    'listview': ListView
  },
  computed: {
    ...mapGetters('ShoppingCartModule', [
      'TemporaryTransactionNumber',
      'LeftToPay',
      'PrerequisiteTransactionData',
      'TransactionItems'
    ])
    // TemporaryTransactionNumber() {
    //   return this.$store.getters['ShoppingCartModule/TemporaryTransactionNumber']
    // },
    // LeftToPay() {
    //   return this.$store.getters['ShoppingCartModule/LeftToPay']
    // },
    // PrerequisiteTransactionData() {
    //   return this.$store.getters['ShoppingCartModule/CurrentPrerequisiteTransactionData']
    // },
    // transaction() {
    //   var temptransaction = this.$store.getters['ShoppingCartModule/TransactionItems']
    //   return temptransaction
    // }
  },
  methods: {
    ...mapActions('ShoppingCartModule', [
      'OpenTransaction',
      'TransactionAddItem',
      'TransactionRemoveItem',
      'removeItem'
    ]),
    // TransactionAddItem() {
    //   console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ')
    //   // console.log(itemCode)
    //   // var itemCode = this.$refs.ItemCode.value
    //   // this.$store.dispatch('ShoppingCartModule/TransactionAddItem', itemCode)
    // },
    // TransactionRemoveItem() {
    //   var itemIndex = 0
    //   this.$store.dispatch('ShoppingCartModule/TransactionRemoveItem', itemIndex)
    // },
    removeItem(index) {
      this.log('remove item from mixin')
      this.$store.dispatch('ShoppingCartModule/TransactionRemoveItem', index)
    }
  }
}
</script>
<style scoped lang='sass'>
    @import '../common/sass/base.scss'
    @import '../common/sass/localization/rtl.scss'
    @import '../../node_modules/bulma/bulma.sass'

    // #registration 
    //     box-shadow: 1px 1px 2px 1px #ccc;
    //     margin: 20px;
    //     padding: 20px;
    //     display: inline-block;
    //     width: 300px;
    //     vertical-align: top;
    
    // .row h4 
    //     display: inline-block;
    //     width: 70%;
    //     text-align: $textalign;
    //     margin: 0 0 10px 0;
    //     background-color: $edea-main-color
    
    // button 
    //     background-color: lightgreen;
    //     border: none;
    //     box-shadow: 1px 1px 1px black;
    //     font-size: inherit;
    //     text-align: $textalign;
    //     cursor: pointer;
    
    // button:hover 
    //     background-color: green;

       .footer-button
          width: 120px
</style>
