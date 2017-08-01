<<template>
  <div id="ShoppingCart">
    <h3>Shopping Cart</h3>
    <input type="text" v-model="itemCode" value="a">
    <button @click="TransactionAddItem(itemCode)">Transaction Add Item</button>
    <listview :transactionItems="TransactionItems"></listview>
    <div class="footer">
      <div class="columns is-mobile removemarginbottom">
        <div class="column is-half-mobile is-half-desktop">
          <router-link to="/Coupons">
            <a class="button is-info footer-button">
                {{ $t('message.coupons') }}
              </a>
          </router-link>
        </div>
        <div class="column is-half-mobile is-half-desktop">
          <router-link to="/Points">
            <a class="button is-info footer-button">
                  {{ $t('message.implementpoint') }}           
                </a>
          </router-link>
        </div>
      </div>
      <router-link to="/Pay">
        <a class="button is-info footer-button">{{ $t('message.continuetopay') }}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import ListView from '@/components/Collections/ListView'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'shoppingcart',
  data() {
    return {
      itemCode: ''
    }
  },
  mounted() {
    this.$bus.$emit('headermanipulation', { showplusbutton: 'true', cart: 'show' })
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
    // async TransactionAddItem(itemCode) {
    // var itemCode = this.$refs.ItemCode.value
    // this.show = true
    //  await this.$store.dispatch('ShoppingCartModule/TransactionAddItem', itemCode)
    //  this.show = false
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
<style scoped lang='scss'>
@import '../common/sass/base.scss';
@import '../common/sass/localization/rtl.scss';
.removemarginbottom {
  margin-bottom: 0px;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5px;
  background-color: #efefef;
  text-align: center;
}

.footer-button {
  //margin-top: 8px;
  width: 150px;
  box-shadow: 2px 2px 2px #888888;
} // #registration 
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
</style>
