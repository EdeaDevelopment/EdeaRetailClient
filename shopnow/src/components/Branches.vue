<<template>
    <div id="brancheslistview">
          <!-- <h2>{{SelectedBranch}}</h2>   -->
        <section id="js-grid-list" class="grid-list" v-cloak>
            <div class="tool-bar">
                <!-- These link buttons use Vue.js to bind click events to change the "layout" variable and bind an active class -->
                <!-- <a class="list-icon" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List"></a>
                                    <a class="grid-icon" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid"></a> -->
            </div>
            <!-- Vue.js lets us choose which UL to show depending on the "layout" variable -->
            <ul v-if="layout === 'list'" class="list">
                <li v-for="(branch, index) in PermittedBranches" class="pli" @click="DidSelectBranch(branch)">
                    <div class="columns is-mobile pli">
                        <div class="column is-10 productdescription">
                            <div class="columns is-mobile licontent">
                                <div class="column is-10-mobile titlepos">
                                    <h1 class="titlestyle">{{branch.BranchCode}} ,{{branch.Branch.BranchDescription}}</h1>
                                </div>
                            </div>
                            <div class="columns fittext">
                                <div class="column is-12-mobile fulllinedescription">
                                    <h3 class="subtitle subtitlestyle">
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="column is-2 fixpadding">
                            <icon name="bluetooth" scale="2" v-bind:style="{visibility: branch.BranchDetectedByProximityIdentification}"></icon>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    /* eslint-disable indent */
    export default {
        name: 'listview',
        props: ['transactionItems', 'removeitem'],
        data: function() {
            return {
                // The layout mode, possible values are "grid" or "list".
                layout: 'list',
                list: 'list'
            }
        },
        mounted() {
            this.$store.dispatch('BranchesModule/OnMounted')
            this.$bus.$emit('headermanipulation', { title: this.$t('message.selectBranch'), showplusbutton: false, showLeftToPay: false, showCartbutton: false, cart: 'show' })
            this.$store.dispatch('ShoppingCartModule/OpenTransaction')
        },
        destroyed() {
            this.$bus.$emit('headermanipulation', { title: 'לקוח כללי', showLeftToPay: true, true: false, cart: 'show' })
            this.$bus.$emit('openCatalog')
        },
        methods: {
            DidSelectBranch(branch) {
                this.$store.dispatch('BranchesModule/DidSelectBranch', branch)
                this.$router.push('/ShoppingCart')
            }
        },
        computed: {
            PermittedBranches() {
                var branches = this.$store.getters['BranchesModule/PermittedBranches']
                if (branches && branches.length === 1) {
                    this.$store.dispatch('BranchesModule/DidSelectBranch', branches[0])
                    this.$router.push('/ShoppingCart')
                }
                return branches
            },
            SelectedBranch() {
                return this.$store.getters['BranchesModule/SelectedBranch']
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import '../common/sass/responsive/mediaqueries.scss';
    @import '../common/sass/localization/directional.scss';
    /* Starting ListView CSS */
    /* Hide un-compiled mustache bindings until the Vue instance is ready */
    [v-cloak] {
        display: none
    }
    * {
        box-sizing: border-box
    }
    .fittext {}
    .salesnewline {
        display: block;
    }
    .pli {
        margin: 0px;
        padding: 0px;
    }
    .titlepos {}
    .licontent {
        margin-bottom: 6px;
    }
    .imagefloat {
        //float: $left
        padding: 0px;
        margin: 0px;
    }
    .scrolling {
        overflow-y: scroll;
    }
    .productdescription {
        text-align: $left;
        padding-top: 2px;
    }
    .productdesfirstline {
        position: relative;
    }
    .fulllinedescription {
        padding-top: 0px;
    }
    .titlestyle {
        font-weight: 700;
        font-size: 30px
    }
    .removebtn {
        margin-bottom: -12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        color: red;
        direction: ltr;
    }
    .subtitlestyle {
        font-weight: 600;
        font-size: 30px;
    }
    .grid-list {
        color: #5e5b64;
        font: 17px/1.3 "Open Sans", sans-serif;
        margin: 0 auto; // max-width: 1024px;
        min-width: 300px;
        padding: 30px;
        text-align: center;
        direction: $dir;
    }
    .grid {
        list-style: none;
        margin: 0 auto;
        padding: 20px;
        text-align: $left;
        width: 100%;
    }
    .imagesize {
        height: 64px !important;
        width: 64px !important;
    }
    .list {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        width: 100%;
        overflow-y: auto;
        max-height: 600px
    } // .list li {
    //   border-bottom: 1px solid #fff;
    //   border-radius: 25px;
    //   border: 2px solid black;
    //   overflow: hidden;
    //   padding: 20px;
    //   transition: background 0.2s linear;
    //   background-color: #ddedfb;
    //   margin-bottom: 5px;
    // } 
    .list li {
        position: relative;
        background: #FFF;
        overflow: hidden; //border-bottom: 1px solid #f5f5f5;
        min-height: 68px;
        /* padding-left: 5px; */
        padding-right: 85px;
    }
    @media #{$mobileportrait} {
        .subtitlestyle {
            font-weight: 400;
            font-size: 14px;
        }
        .fixpadding {
            padding: 0px;
        }
        .titlestyle {
            font-weight: 700;
            font-size: 15px
        }
        .imagefloat {
            float: inherit
        }
        #trashicon {
            transform: scale(0.8);
        }
        .imagesize {
            height: 64px;
            width: 64px;
        }
        .list {
            list-style: none;
            margin: 0 auto;
            padding: 2px;
            width: 100%;
            overflow-y: auto;
            max-height: 300px
        }
        .grid-list {
            font: 17px/1.3 "Open Sans", sans-serif;
            margin: 6px; // max-width: 1024px;
            padding: 2px;
            min-width: 300px;
            text-align: center;
            border: 1px solid #FFF;
            background: #FFF;
        }
        .list li {
            position: relative;
            background: #FFF;
            overflow: hidden;
            border-bottom: 2px solid #f5f5f5;
            min-height: 68px;
            /* padding-left: 5px; */
            margin-bottom: 2px;
            padding-right: 1px;
        }
    }
</style>
