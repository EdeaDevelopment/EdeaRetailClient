<<template>
  <div id="Pay">
    <h3>תשלום</h3>
    <hr>
    <div class="field inputfield">
      <div class="control has-icons-left has-icons-right">
        <float-label>
          <input v-validate="'required|email'" v-model="shippingEmail" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" v-bind:placeholder="$t('message.reciptemail')">
          <span v-show="errors.has('email')" class="help is-danger" style="direction:rtl">{{ errors.first('email') }}</span>
        </float-label>
        <span class="icon is-small is-left">
                    <icon name="envelope" scale="2"></icon> 
              </span>
      </div>
    </div>
    </br>
    <div class="footer">
      <router-link to="/Pay">
        <a class="button paymentbtn" v-on:click="GiftCardPayment">
          <span class="icon is-small">
              <icon name="gift" scale="2"></icon>             
           </span>
          <span>{{ $t('message.payingiftcard') }}</span>
        </a>
      </router-link>
      <router-link to="/Pay">
        <a class="button paymentbtn" v-on:click="CreditCardPayment">
          <span class="icon is-small">
              <icon name="credit-card" scale="2"></icon>             
           </span>
          <span>{{ $t('message.payincreditcard') }}</span>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pay',
  data() {
    return {
      itemCode: '',
      shippingEmail: ''
    }
  },
  methods: {
    GiftCardPayment() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$store.dispatch('ShoppingCartModule/UpdateTransactionShippingEmail', this.shippingEmail)
          window.alert('אי מייל עודכן בהצלחה!')
          return
        }
        window.alert('אי מייל שדה חובה, נא למלא את השדה באי מייל תקין')
      })
    },
    CreditCardPayment() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$store.dispatch('ShoppingCartModule/UpdateTransactionShippingEmail', this.shippingEmail)
          window.alert('אי מייל עודכן בהצלחה!')
          return
        }
        window.alert('אי מייל שדה חובה, נא למלא את השדה באי מייל תקין')
      })
    }
  }
}
</script>
<style lang='scss'>
@import '../common/sass/base.scss';
.inputfield {
  padding: 10px;
}

.vfl-label-on-focus {
  color: #aaa;
}

.paymentbtn {
  width: 200px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
}

.paymentbtn:hover {
  color: white;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>
