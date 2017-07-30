<<template>
    <div id="EmailInput">
        <div class="field inputfield">
            <div class="control" :class="{'has-icons-left': !this.isRtl(), 'has-icons-right': this.isRtl()}">
                <float-label class="labeldir">
                    <input v-validate="'required|email'" ref="email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" v-bind:placeholder="$t('message.reciptemail')" @input="updateData()">
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
    props: ['email'],
    methods: {
        updateData() {
            this.$emit('input', this.$refs.email)
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
