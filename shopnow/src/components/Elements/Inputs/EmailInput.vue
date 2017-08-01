<<template>
    <div id="EmailInput">
         <div class="field inputfield">
            <div class="control" :class="{'has-icons-left': !this.isRtl(), 'has-icons-right': this.isRtl()}">
                <float-label class="labeldir">
                    <input v-validate="'required|email'" ref="emailref" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" v-model="email" type="text" v-bind:placeholder='placeholderstr' @input="updateData($event.target.value)">
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </float-label>
                <span class="icon is-small" v-bind:class="{'is-right': this.isRtl(), 'is-left': !this.isRtl()}">
                    <icon name="envelope" scale="2"></icon> 
                </span>
            </div>
        </div> 
    </div>
</template>

<script>
/* eslint-disable indent */
export default {
    name: 'emailinput',
    props: {
        placeholderstr: {
            default: '',
            type: String
        },
        value: {
            default: '',
            type: String
         }
    },
    data () {
        return {
            email: this.value
        }
    },
    /* Example why we use watch for getting the email value from the parent: https://stackoverflow.com/questions/44506200/vue-js-component-with-v-model */
    watch: {
        value(newValue) {
            this.email = newValue
        }
    },
    methods: {
        updateData(val) {
            this.$emit('input', val)
        },
        async validate(callback) {
            var result = await this.$validator.validateAll()
            return result
        }
    }
}
</script>
<style lang='scss'>
@import '/../../../common/sass/base.scss';
@import '/../../../common/sass/localization/directional.scss';
.labeldir {
    direction: $dir;
}

.inputfield {
    padding: 10px;
    direction: $dir;
}

.vfl-label-on-focus {
    color: #aaa !important;
}

.vfl-label {
    text-align: $left;
    direction: $dir
}

.help.is-danger {
    color: #ff3860;
    direction: $dir;
    text-align: $left;
}
</style>
