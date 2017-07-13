<<template>
  <div id="Pay">
    <h3>Pay</h3>
    <hr>
    <div>
      <input type="email" v-model="itemCode"  placeholder="אימייל לשליחת קבלה">
    </div>
    </br>
    <div>
      <router-link to="/Pay">
        <button type="button">תשלום בכרטיס מתנה</button>
      </router-link>
    </div>
    </br>
    <div>
      <router-link to="/Pay">
        <button type="button">תשלום בכרטיס אשראי</button>
      </router-link>
    </div>
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
