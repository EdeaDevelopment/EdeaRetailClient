<<template>
  <div id="registrations">
      <h3>Register here {{ apiData }}</h3>
      <hr>
      <div class="row" v-for="user in users">
        <h4>
          {{ user.name }}
        </h4>
        <button @click="registerUser(user)">Register</button>
      </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  computed: {
    users () {
      return this.$store.getters['userModule/unregisteredUsers']
    },
    blahblash () {
      console.log(this.$store)
      return this.$store.getters['userModule/totalRegistrations']
    },
    apiData () {
      console.log(this.$store)
      return this.$store.getters['userModule/apidata']
    }
  },
  /* eslint-disable no-undef */
  methods: {
    registerUser (user) {
      console.log(user.id)
      SMPOS.SetBranchName('XXXXXXXX')
      // this.$store.dispatch('userModule/register', user.id)
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
