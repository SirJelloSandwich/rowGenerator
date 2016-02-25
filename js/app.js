(function(exports) {
  'use strict';

function App(settings) {

  this.allGridRows =[];
  this.gridRow = [];

  $(this).on( "allDataLoaded", function() {
    this.dataLoaded();

    });

  this.makeInitialDataCall = function() {

      this.model.loadData('http://www.ucg.org/api/v1.0/featured_media',"featuredUrl",  this.featuredCallbackHandler);
      this.row3 = 'http://www.ucg.org/api/v1.0/series?filter[production]=275';
      this.model.loadData(this.row3, "seriesData", this.gridRowCallbackHandler);
      this.row2 = 'http://www.ucg.org/api/v1.0/media?filter[production]=209';
      this.model.loadData(this.row2, "beyondTodayTV",  this.gridRowCallbackHandler);
      this.row1 = 'http://www.ucg.org/api/v1.0/media?filter[production]=208';
      this.model.loadData(this.row1, "beyondTodayDaily",  this.gridRowCallbackHandler);
      $( this).trigger( "allDataLoaded" );
  };

    this.featuredCallbackHandler  = function(urlString){
          this.model.loadData(urlString, "featuredRowData", this.genericCallbackHandler);

    }.bind(this);

    this.genericCallbackHandler = function(data){

    }.bind(this);

    this.gridRowCallbackHandler = function(data){
      this.allGridRows.push(data);
    //console.log(  app.allGridRows);
    }.bind(this);

    this.dataLoaded = function() {
        this.initFeaturedRow(this.model.featuredRowData);

          // for(var index in this.allGridRows) {
          //   console.log(index);
          //
          // }
        this.allGridRows.forEach( function(element, index, array){
          //console.log(this);
           this.initGridRow(element, index);
        }.bind(this));
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
       height:500,
       marginTop:20,
       marginRight:20,
       marginBottom: 20,
       marginLeft:0,
       data:clientData.data

    };
    var featuredRow = this.featuredRow =  new Row(ourData, 0);

  }.bind(this);

  this.initGridRow = function (clientData, index) {
    var ourData = {
      type:'gridRow',
       width : 400,
       height:200,
       marginTop:40,
       marginRight:20,
       marginBottom: 20,
       marginLeft:0,
       data:clientData.data

    };
    var gridRow = [];
    gridRow[index] = this.gridRow[index] =  new Row(ourData, index);

  }.bind(this);

  this.keyDown = function(e){
      console.log('two');
      if(e.keyIdentifier === "Right"){
        console.log('three');
        $(this.row).css({
          'transform':'translate3d(-600px, 0px, 0px)',
         'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        });
         e.preventDefault();
      }
      if(e.keyIdentifier === "Left"){
         $(this.row).css({
           'transform':'translate3d(0px, 0px, 0px)',
           'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
         });
          e.preventDefault();
       }
     }.bind(this);

  this.handleKey = function(e){
    console.log('one');
    this.view.keyDown(e);

  }.bind(this);

  this.view = this;
  this.row = '.featuredRow0';

  window.addEventListener("keydown",this.handleKey, false);

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
//
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
