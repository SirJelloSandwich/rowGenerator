(function(exports) {
  'use strict';

function App(settings) {

  this.allGridRows =[];
  this.gridRow = [];
  this.Y = 0;
  this.allClasses = [];
  this.upDownIndex = 0;
  this.posFromLeft = [-300,100,100,100];
  var thisPos = -300;
  var ttt = 0;
  this.index = [1,0,0,0];

  $(this).on( "allDataLoaded", function() {
    this.dataLoaded();

    });

  this.makeInitialDataCall = function() {

      this.model.loadData('http://www.ucg.org/api/v1.0/featured_media',"featuredUrl",  this.featuredCallbackHandler);
      this.row1 = 'http://www.ucg.org/api/v1.0/media?filter[production]=208';
      this.model.loadData(this.row1, "beyondTodayDaily",  this.gridRowCallbackHandler);
      this.row2 = 'http://www.ucg.org/api/v1.0/media?filter[production]=209';
      this.model.loadData(this.row2, "beyondTodayTV",  this.gridRowCallbackHandler);
      this.row3 = 'http://www.ucg.org/api/v1.0/series?filter[production]=275';
      this.model.loadData(this.row3, "seriesData", this.gridRowCallbackHandler);

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

    this.featuredRowItemWidth = $('.'+this.allClasses[this.upDownIndex]+" "+'img').width();
    this.upDownIndex = 1;
    this.gridRowItemWidth = $('.'+this.allClasses[this.upDownIndex]+" "+'img').width();
    this.upDownIndex = 0;
    // console.log(this.featuredRowItemWidth);
    // console.log(this.gridRowItemWidth);
  }.bind(this);

  this.initFeaturedRow = function (clientData) {
    var ourData = {
      type:'featuredRow',
       width : 800,
       height:500,
       marginTop:0,
       marginRight:20,
       marginBottom: 20,
       marginLeft:0,
        position: -300,
       data:clientData.data

    };
    var featuredRow = this.featuredRow =  new Row(ourData, 0);
    this.allClasses.push(ourData.type+0);
  }.bind(this);

  this.initGridRow = function (clientData, index) {
    var ourData = {
      type:'gridRow',
       width : 400,
       height:200,
       marginTop:0,
       marginRight:20,
       marginBottom: 20,
       marginLeft:0,
       position: 0,
       data:clientData.data

    };

    this.gridRow[index] =  new Row(ourData, index);
    this.allClasses.push(ourData.type+index);
  }.bind(this);

  this.keyDown = function(e){
      //console.log(e);
      var posFromLeft;


      switch(e.keyIdentifier){
        case "Enter":
          switch(this.row){
            case '.featuredRow0':
                $(this.row).css({
                   'transform':'translate3d(-600px, 0px, 0px)',
                  'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
                 });
                e.preventDefault();
              break;
              case '.gridRow0':
                  $(this.row).css({
                     'transform':'translate3d(-420px, 0px, 0px)',
                    'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
                   });
                  e.preventDefault();
                break;
          }

        break;
        case "Right":

               thisPos += -820;

                $('.'+this.allClasses[this.upDownIndex]).css({
                  'transform': "translate3d("+thisPos+"px, 0px,0px)"
                });

             this.index[this.upDownIndex]+=1;



        break;

        case "Left":

        if(this.index[this.upDownIndex] === 1){

              thisPos = 520;

           $('.'+this.allClasses[this.upDownIndex]).css({
             'transform': "translate3d("+thisPos+"px, 0px,0px)"
           });
        }
        else{

          thisPos += 820;

           $('.'+this.allClasses[this.upDownIndex]).css({
             'transform': "translate3d("+thisPos+"px, 0px,0px)"
           });
        }
          this.index[this.upDownIndex]-=1;


        break;
        case "Down":
          if(this.upDownIndex < this.allClasses.length-1){
           this.upDownIndex+=1;
           this.row = this.allClasses[this.upDownIndex];
           posFromLeft = $('.'+this.allClasses[this.upDownIndex]).position();
          this.posFromLeft[this.upDownIndex] = posFromLeft.left;
           console.log(this.row);
          console.log(this.posFromLeft[this.upDownIndex]);
         }
         break;
          // switch(this.allClasses[this.upDownIndex]){
          //   case '.featuredRow0':
          //     this.row = '.gridRow0';
          //     this.Y += -520;
          //     $(".app-container").css({
          //       'transform':'translate3d(0px,'+this.Y+'px, 0px)',
          //       'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
          //     });
          //   break;
          //   case '.gridRow0':
          //     this.row = '.gridRow1';
          //       this.Y += -220;
          //       $(".app-container").css({
          //         'transform':'translate3d(0px,'+this.Y+'px, 0px)',
          //         'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
          //       });
          //     break;
          //     case '.gridRow1':
          //       this.row = '.gridRow2';
          //         this.Y += -220;
          //         $(".app-container").css({
          //           'transform':'translate3d(0px,'+this.Y+'px, 0px)',
          //           'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
          //         });
          //       break;
          // }


        //break;
        case "Up":

        if(this.upDownIndex > 0){
          this.upDownIndex-=1;
          this.row = this.allClasses[this.upDownIndex];
           posFromLeft = $('.'+this.allClasses[this.upDownIndex]).position();
          this.posFromLeft[this.upDownIndex] = posFromLeft.left;
          console.log(this.row);
          console.log(this.posFromLeft[this.upDownIndex]);
        }
        break;
        // switch(this.row){
        //   case '.gridRow0':
        //     this.row = '.featuredRow0';
        //       this.Y +=520;
        //       $(".app-container").css({
        //         'transform':'translate3d(0px,'+this.Y+'px, 0px)',
        //         'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        //       });
        //     break;
        //     case '.gridRow1':
        //       this.row = '.gridRow0';
        //         this.Y +=220;
        //         $(".app-container").css({
        //           'transform':'translate3d(0px,'+this.Y+'px, 0px)',
        //           'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        //         });
        //       break;
        //   case '.gridRow2':
        //     this.row = '.gridRow1';
        //       this.Y +=220;
        //       $(".app-container").css({
        //         'transform':'translate3d(0px,'+this.Y+'px, 0px)',
        //         'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        //       });
        //     break;
        //
        //
        // }

      //  break;

      }
      // if(e.keyIdentifier === "Right"){
      //   //console.log('three');
      //   $(this.row).css({
      //     'transform':'translate3d(-600px, 0px, 0px)',
      //    'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
      //   });
      //    e.preventDefault();
      // }
      // if(e.keyIdentifier === "Left"){
      //    $(this.row).css({
      //      'transform':'translate3d(0px, 0px, 0px)',
      //      'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
      //    });
      //     e.preventDefault();
      //  }
     }.bind(this);

  this.handleKey = function(e){
    //console.log('one');
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
