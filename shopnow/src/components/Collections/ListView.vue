<<template>
    <div id="listviewid">
        <section id="js-grid-list" class="grid-list" v-cloak>
            <div class="tool-bar">
                <!-- These link buttons use Vue.js to bind click events to change the "layout" variable and bind an active class -->
                <a class="list-icon" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List"></a>
                <a class="grid-icon" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid"></a>
            </div>
            <!-- Vue.js lets us choose which UL to show depending on the "layout" variable -->
            <ul v-if="layout === 'grid'" class="grid">
                <!-- A "grid" view with photos only -->
                <li v-for="blog in transactionItems">
                    <a v-bind:href="blog.url" v-bind:style="{ backgroundImage: 'url(' + blog.image.large + ')' }" target="_blank"></a>
                </li>
            </ul>
            <ul v-if="layout === 'list'" class="list">
                <!-- A "list" view with small photos and blog titles -->
                <li v-for="(item, index) in transactionItems">
                    <a target="_blank">
                        <img v-bind:src="item.image.small">
                        <p>{{item.ItemDescription}}</p>
                        <button class="btnremove" @click="removeItem(index)">X</button>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
  name: 'listview',
  props: ['transactionItems', 'removeitem'],
  data: function () {
    return {
            // The layout mode, possible values are "grid" or "list".
      layout: 'list'
    }
  },
  methods: {
    removeItem(index) {
      this.$parent.removeItem(index)
    }
  }
}
</script>

<style scoped lang='sass'>
    @import '../../common/sass/base.scss'
    @import '../../common/sass/localization/rtl.scss'
   
    /* Starting ListView CSS */
     /* Hide un-compiled mustache bindings until the Vue instance is ready */
    [v-cloak] 
        display: none

    * 
        box-sizing: border-box
    a,
    a:visited,
    a:hover 
      color: #389dc1;
      display: block;
      outline: none;
      text-decoration: none;
    

    a:hover 
      text-decoration: none;
    
    .btnremove
       border-radius: 25px;
       background: red;
       padding: 20px;
       width: 100px;
       height: 100px;
       margin-bottom: 10%
       float: left

      

    .grid-list 
      background-color: #fff;
      color: #5e5b64;
      font: 17px/1.3 "Open Sans", sans-serif;
      margin: 0 auto;
      // max-width: 1024px;
      min-width: 300px;
      padding: 30px;
      text-align:center
    

    .tool-bar 
      background-color: black;      
      background-position: top left;
      background-repeat: no-repeat;
      background-size: contain;
      box-shadow: 0 1px 1px #ccc;
      line-height: 1;
      margin: 0 auto;
      padding: 10px;
      position: relative;
      text-align: $textalign;
      width: 100%;
    

    .tool-bar a 
      background: rgba( 255, 255, 255, 0.50 ) center center no-repeat;
      border: 1px solid #e4e4e4;
      border-right: 1px solid #908f8f;
      border-bottom: 1px solid #908f8f;
      cursor: pointer;
      display: inline-block;
      height: 32px;
      margin-right: 5px;
      text-decoration: none;
      width: 32px;
    

    .tool-bar a:hover 
      border: 1px solid #e4e4e4;
    

    .tool-bar a.active 
      background-color: rgba( 0, 0, 0, 0.50 );
      border: 1px solid #908d8d;
      border-right: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
    

    .tool-bar a.active:hover 
      cursor: default;
    

    .tool-bar a.list-icon 
      background-image: url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=" );
    

    .tool-bar a.grid-icon  
      background-image: url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==" );
    

    .grid 
      background-color: #ddedfb;
      list-style: none;
      margin: 0 auto;
      padding: 20px;
      text-align: $textalign;
      width: 100%;

    .grid li 
      display: inline-block;
      position: relative;
      width: 50%;

    .grid li:after 
      content: "";
      display: block;
      padding-bottom: 52%;
    

    .grid li a 
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: 2px solid #fff;
      height: 99%;
      position: absolute;
      width: 98%;
      
    
      
    

    .grid li a:hover 
      border: 2px solid #000;
      box-shadow:         inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
      -moz-box-shadow:    inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
      -webkit-box-shadow: inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
    

    /* List layout */
    .list 
      background-color: #ddedfb;
      list-style: none;
      margin: 0 auto;
      padding: 0;
      text-align: $textalign;
      width: 100%;
      direction: $direction;
    

    .list li 
      border-bottom: 1px solid #fff;
      overflow: hidden;
      padding: 20px;
      transition: background 0.2s linear;
    

    .list li:hover 
      background-color: #fff;
    

    .list li a 
      display: table;
      width: 100%;
    


    .list li img 
      border: none;
      display: table-cell;
      height: 120px;
      vertical-align: middle;
      width: 120px;
    

    .list li:hover p 
      color: #0096d4;
    

    .list li p 
      color: #000;
      display: table-cell;
      font-weight: 700;
      padding: 0 15px 0 15px;
      vertical-align: middle;
      width: 100%;
    
    /* End ListView CSS */
    
</style>
