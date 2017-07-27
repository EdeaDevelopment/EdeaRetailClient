<<template>
  <div id="Pay" class="pagesize">
    <h3>תשלום</h3>
    <emailinput v-model="shippingEmail" ref="eins"></emailinput>     
    <div class="mainimage">
      <div class="footer">
        <a class="button paymentbtn" v-on:click="VerifyEmailAndNavigate('GiftCardPayment')">
          <span class="icon is-small">
              <icon name="gift" scale="2"></icon>             
            </span>
          <span>{{ $t('message.payingiftcard') }}</span>
        </a>
        <a class="button paymentbtn" v-on:click="VerifyEmailAndNavigate('CreditCardPayment')">
          <span class="icon is-small">
              <icon name="credit-card" scale="2"></icon>             
            </span>
          <span>{{ $t('message.payincreditcard') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import emailinput from '@/components/Elements/Inputs/EmailInput'
export default {
  name: 'pay',
  data() {
    return {
      itemCode: '',
      shippingEmail: ''
    }
  },
  components: {
    emailinput
  },
  methods: {
    async VerifyEmailAndNavigate(paymentPage) {
      var result = await this.$refs.eins.validate()
      if (result) {
        this.$store.dispatch('ShoppingCartModule/UpdateTransactionShippingEmail', this.shippingEmail.value)
        this.$router.push('/Payments/' + paymentPage)
        return
      }
      window.alert('אי מייל שדה חובה, נא למלא את השדה באי מייל תקין')
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../common/sass/base.scss';
.pagesize {
  height: 100%;
}

.inputfield {
  padding: 10px;
}

.mainimage {
  height: 45%;
  background-repeat: no-repeat;
  background-image: url("http://images.globes.co.il/images/NewGlobes/big_image_800/2015/e08_SCOTTCHAN575.jpg");
  background-position: center center;
  background-size: cover;
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

.vfl-label-on-focus {
  color: black;
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
