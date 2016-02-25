(function(exports) {
  'use strict';

function App(settings) {

  this.makeInitialDataCall = function() {

       this.model.loadData('http://www.ucg.org/api/v1.0/featured_media',"featuredUrl",  this.featuredCallbackHandler);
      // this.row1 = 'http://www.ucg.org/api/v1.0/media?filter[production]=208';
      // this.data.loadData(this.row1, "beyondTodayDaily",  this.genericCallbackHandler);
      // this.row2 = 'http://www.ucg.org/api/v1.0/media?filter[production]=209';
      // this.data.loadData(this.row2, "beyondTodayTV",  this.genericCallbackHandler);
      // this.row3 = 'http://www.ucg.org/api/v1.0/series?filter[production]=275';
      // this.data.loadData(this.row3, "seriesData",  this.dataLoaded);
  };

    this.featuredCallbackHandler  = function(urlString){
          this.model.loadData(urlString, "featuredRowData",  this.dataLoaded);
    }.bind(this);

    this.genericCallbackHandler = function(data){

    }.bind(this);

    this.dataLoaded = function(data) {

      this.initFeaturedRow(data);
    // this.$appContainer.empty();
    //
    // var html = fireUtils.buildTemplate($("#app-header-template"), {});
    //
    // this.$appContainer.append(html);
    //
    // this.browse();
    // this.gaUrl = "";
    // this.gaUrl += "v=1"; // Version.
    // this.gaUrl += "&tid="+ this.gaClientID; // Tracking ID / Property ID.
    // this.gaUrl += "&cid=555"; // Anonymous Client ID.
    // this.gaUrl += "&t=event"; // Event hit type
    // this.gaUrl += "&ec=Channel%20Launch"; // Event Category. Required.
    // this.gaUrl += "&ea=App%20Launched"; // Event Action. Required.
    // this.gaUrl +=  this.eventLabel; // Event label.
    // this.gaUrl += "&z=" + Date.now();
    // this.data.postData(this.gaUrl);


  }.bind(this);

  this.initFeaturedRow = function (clientData) {
    var ourData = {
      type:'featuredRow',
       width : 800,
       height:400,
       marginTop:20,
       marginRight:20,
       marginBottom: 20,
       marginLeft:0,
       data:clientData.data
      //  data: {
      //    img: clientData.data.image.styles.large
      //  }
    };
    var featuredRow = this.featuredRow =  new Row(ourData, 0);

  };

  this.model = new Model();
  this.makeInitialDataCall();


}

  exports.App = App;
}(window));

// var data = {
//   img:[ "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF",
//         "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF",
//         "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF"
//       ],
//   items:3
// };
//
// var featuredRowConfig = {
//   type:'carousel',
//   width : 800,
//   height:400,
//   marginTop:20,
//   marginRight:20,
//   marginBottom: 20,
//   marginLeft:0,
//   data: data
// };
//
// var gridRowConfig = {
//   type:'gridRow',
//   width : 400,
//   height:200,
//   marginTop:20,
//   marginRight:20,
//   marginBottom: 20,
//   marginLeft:0,
//   data: data
// };
//
// this.handleKey = function(e){
//   this.view.keyDown(e);
//
// }.bind(this);
//
// window.featuredRow = new Row(featuredRowConfig, 0);
// window.gridRow =[];
//
//
//  data.img.forEach(function(element, index, array){
//   window.gridRow[index] = new Row(gridRowConfig,index);
//
//  });
//
// this.view = gridRow[0];
//
// window.addEventListener("keydown",this.handleKey, false);
