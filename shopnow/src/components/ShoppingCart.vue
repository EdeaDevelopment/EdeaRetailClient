<<template>
  <div id="ShoppingCart">
    <h3>ShoppingCart</h3>
    <hr>
    <div class="row">
      <h4>
        {{ TemporaryTransactionNumber }}
      </h4>
      <h4>
        {{ LeftToPay }}
      </h4>
      <form action="">Add item<br>
        <input ref="ItemCode" type="text">
      </form>
      <button @click="OpenTransaction()">Open Transaction</button>
      <button @click="TransactionAddItem()">Transaction Add Item</button>
      <button @click="TransactionRemoveItem()">Transaction Remove Item</button>
    </div>
    <listview :transactionItems="transaction"></listview>
  </div>
</template>

<script>
import ListView from '@/components/Collections/ListView'
export default {
  name: 'shoppingcart',
  components: {
    'listview': ListView
  },
  computed: {
    TemporaryTransactionNumber() {
      return this.$store.getters['ShoppingCartModule/TemporaryTransactionNumber']
    },
    LeftToPay() {
      return this.$store.getters['ShoppingCartModule/LeftToPay']
    },
    PrerequisiteTransactionData() {
      return this.$store.getters['ShoppingCartModule/CurrentPrerequisiteTransactionData']
    },
    transaction() {
      var temptransaction = this.$store.getters['ShoppingCartModule/TransactionItems']
      return temptransaction
    }
  },
  methods: {
    OpenTransaction() {
      this.$store.dispatch('ShoppingCartModule/OpenTransaction')
    },
    TransactionAddItem() {
      var itemCode = this.$refs.ItemCode.value
      this.$store.dispatch('ShoppingCartModule/TransactionAddItem', itemCode)
    },
    TransactionRemoveItem() {
      var itemIndex = 0
      this.$store.dispatch('ShoppingCartModule/TransactionRemoveItem 0', itemIndex)
    }
  }
}
</script>
<style scoped lang='sass'>
    @import '../common/sass/base.scss'
    @import '../common/sass/localization/rtl.scss'
    #registration 
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    
    .row h4 
        display: inline-block;
        width: 70%;
        text-align: $textalign;
        margin: 0 0 10px 0;
        background-color: $edea-main-color
    
    button 
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: $textalign;
        cursor: pointer;
    
    button:hover 
        background-color: green;
</style>
