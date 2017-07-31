<<template>
    <div id="giftCardPayment" class="pagesize">
        <h3>תשלום ברכטיס מתנה</h3>
        <div class="field inputfield">
            <p class="control" v-bind:class="{ 'has-icon': !giftcardnumberkeyup, 'has-icon-right': !giftcardnumberkeyup }">
                <float-label>
                    <input name="giftcardnumber" v-on:keyup="HideGiftCardNumberIcon()" v-model="giftcardnumber" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('giftcardnumber') }" type="text" v-bind:placeholder="$t('message.cardnumber')">
                </float-label>
                <i v-show="errors.has('giftcardnumber')" class="fa fa-warning"></i>
                <span v-show="errors.has('giftcardnumber')" class="help is-danger has-text-right">{{ errors.first('giftcardnumber') }}</span>
                <span v-show="!giftcardnumberkeyup" class="icon is-small is-right">
                                        <icon name="credit-card" scale="2"></icon> 
                        </span>
            </p>
        </div>
        <div class="field inputfield">
            <p class="control" v-bind:class="{ 'has-icon': !giftcardserialnumberkeyup, 'has-icon-right': !giftcardserialnumberkeyup }">
                <float-label>
                    <input name="giftcardserialnumber" v-on:keyup="HideSerialNumberIcon()" v-model="giftcardserialnumber" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('giftcardserialnumber') }" type="text" v-bind:placeholder="$t('message.serialnumber')">
                </float-label>
                <i v-show="errors.has('giftcardserialnumber')"></i>
                <span v-show="errors.has('giftcardserialnumber')" class="help is-danger has-text-right">{{ errors.first('giftcardserialnumber') }}</span>
                <span v-show="!giftcardserialnumberkeyup" class="icon is-small is-right">
                                        <icon name="credit-card" scale="2"></icon> 
                        </span>
            </p>            
        </div>
        <div class="mainimage">
            <div class="footer">
                <router-link to="/Pay">
                    <a class="button paymentbtn" v-on:click="ApprovePayment">
                        <span>{{ $t('message.approvepayment') }}</span>
                    </a>
                </router-link>
                <router-link to="/Pay">
                    <a class="button paymentbtn" v-on:click="Cancel">
                        <span>{{ $t('message.cancel') }}</span>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable indent */
    export default {
        name: 'pay',
        data() {
            return {
                itemCode: '',
                shippingEmail: '',
                giftcardnumberkeyup: false,
                giftcardnumber: '',
                giftcardserialnumber: '',
                giftcardserialnumberkeyup: false
            }
        },
        methods: {
            Cancel() {},
            HideGiftCardNumberIcon() {
                if (this.giftcardnumber.length > 0) {
                    this.giftcardnumberkeyup = true
                } else {
                    this.giftcardnumberkeyup = false
                }
            },
            HideSerialNumberIcon() {
                if (this.giftcardserialnumber.length > 0) {
                    this.giftcardserialnumberkeyup = true
                } else {
                    this.giftcardserialnumberkeyup = false
                }
            },
            ApprovePayment() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        //eslint-disable-next-line
                        //  this.$store.dispatch('ShoppingCartModule/UpdateTransactionShippingEmail', this.shippingEmail)
                        window.alert('ולידציה תקינה!')
                        return
                    }
                    window.alert('מספר סידורי ומספר כרטיס הינם שדות חובה')
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../common/sass/base.scss';
    @import '../../common/sass/localization/directional.scss';
    .pagesize {
        height: 100%;
    }
    .inputfield {
        padding: 10px;
        direction: $dir;
    }
    .mainimage {
        height: 45%;
        background-repeat: no-repeat;
        background-image: url("http://www.vulevufamily.com/en/wp-content/uploads/2016/01/gift-card.jpg");
        background-position: center center;
        background-size: cover;
    }
    .vfl-label-on-focus {
        color: #aaa;
    }
    .paymentbtn {
        width: 150px;
        height: 50px;
        background-color: black;
        color: white;
    }
    .paymentbtn:hover {
        color: white;
    }
    .vfl-label-on-focus {
        color: black;
    }
    .vfl-label-on-focus+input {
        border-bottom: 2px solid black;
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
