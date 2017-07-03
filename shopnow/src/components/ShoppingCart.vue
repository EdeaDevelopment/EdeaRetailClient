<<template>
  <div id="ShoppingCart">
      <h3>ShoppingCart</h3>
      <hr>
      <div class="row">
        <h4>
          {{ TemporaryTransactionNumber }}
        </h4>
        <form action="">Add item<br>
        <input ref="ItemCode" type="text">
        </form>
        <button @click="OpenTransaction()">OpenTransaction</button>
        <button @click="UpdateTransaction()">UpdateTransaction</button>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    TemporaryTransactionNumber () {
      return this.$store.getters['ShoppingCartModule/TemporaryTransactionNumber']
    }
  },
  methods: {
    OpenTransaction () {
      this.$store.dispatch('ShoppingCartModule/OpenTransaction')
    },
    UpdateTransaction () {
      var itemCode = this.$refs.ItemCode.value
      if (itemCode) {
        this.$store.dispatch('ShoppingCartModule/UpdateTransaction', itemCode)
      }
    }
  }
}
</script>

<style scoped lang='sass'>
    @import '../common/sass/base.scss'
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
        text-align: left;
        margin: 0 0 10px 0;
        background-color: $edea-main-color
    
    button 
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    
    button:hover 
        background-color: green;
    
</style>
