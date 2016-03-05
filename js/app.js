(function(exports) {
  'use strict';

function App(settings) {

  this.settings = settings;

  this.allGridRows =[];
  this.gridRow = [];
  this.featuredRow = [];
  this.Y = 0;
  this.allClasses = [];
  this.upDownIndex = 0;
  this.posFromLeft = [-300,100,100,100];
  this.episodesData = [];
  var thisPos = -300;
  var thisOtherPos = [0,0,0];
  var ttt = 0;
  this.index = [1,0,0,0];

  $(this).on( "allDataLoaded", function() {
    //console.log(this);
    this.dataLoaded();

    });
    $(this).on( "episodesLoaded", function() {
      console.log("Episodes loaded");
      //console.log(event);
      //console.log(this.episodesData);
       this.episodesData.springboardButtons = 0;
        var html = this.util.buildTemplate($('#springboard-template'), this.episodesData.data);
         $('.app-container').append(html);
           $(".landingPage").hide();
        // this.springboardRow[0] =  new Row(this.episodesData.data, 0,$('.springboardContainer') );
        // springboard = this.springboard = new Springboard();
        this.view = this.springboard;
    }.bind(this));



  this.makeInitialDataCall = function() {

      this.model.loadData('http://www.ucg.org/api/v1.0/featured_media',"featuredUrl",  this.featuredCallbackHandler);
      this.row1 = 'http://www.ucg.org/api/v1.0/media?filter[production]=208';
      this.model.loadData(this.row1, "beyondTodayDaily",  this.gridRowCallbackHandler);
      this.row2 = 'http://www.ucg.org/api/v1.0/media?filter[production]=209';
      this.model.loadData(this.row2, "beyondTodayTV",  this.gridRowCallbackHandler);
      this.row3 = 'http://www.ucg.org/api/v1.0/series?filter[production]=275';
      this.model.loadData(this.row3, "seriesData", this.gridRowCallbackHandler);
      //console.log(this);
      $( this).trigger( "allDataLoaded" );
  };

    this.featuredCallbackHandler  = function(urlString){
          this.model.loadData(urlString, "featuredRowData", this.genericCallbackHandler);

    }.bind(this);

    this.genericCallbackHandler = function(data){
      this.allGridRows.push(data);
    }.bind(this);

    this.episodesCallbackHandler = function(data){
      //console.log( data);
      //var thisData = data;
      this.episodesData = data;

      $(this).trigger("episodesLoaded");

    }.bind(this);

    this.gridRowCallbackHandler = function(data){
      this.allGridRows.push(data);
    //console.log(  app.allGridRows);
    }.bind(this);

    this.dataLoaded = function() {


          // for(var index in this.allGridRows) {
          //   console.log(index);
          //
          // }
        this.allGridRows.forEach( function(element, index, array){
          //console.log(this);
          if(index === 0){
              this.initFeaturedRow(element, index);
              return;
          }

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

  this.initFeaturedRow = function (element, index) {
    this.settings.featuredRowData.data = element.data;
    this.featuredRow[index] = this.featuredRow =  new Row(this.settings.featuredRowData, index);
    this.allClasses.push(this.settings.featuredRowData.type+index);
  }.bind(this);

  this.initGridRow = function (element,index) {
    this.settings.gridRowData.data = element.data;
    this.gridRow[index] =  new Row(this.settings.gridRowData, index);
    this.allClasses.push(this.settings.gridRowData.type+index);
  }.bind(this);

  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = minutes+':'+seconds;
    return time;
};

  this.keyDown = function(e){
      var html;
      var posFromLeft;
      var springboard;


      switch(e.keyIdentifier){
        case "Enter":
          //console.log(this.index[this.upDownIndex]);
          var id = $('.'+this.allClasses[this.upDownIndex]+" "+"img").eq(this.index[this.upDownIndex]).attr('id');
          //console.log(id);

          var fff = (function(){
            for(var ttt in this.allGridRows){
              for(var ppp in this.allGridRows[ttt].data){
                if(parseInt(this.allGridRows[ttt].data[ppp].id, 10 ) === parseInt(id, 10)){//? this.allGridRows[ttt].data[ppp]: false ;
                   return this.allGridRows[ttt].data[ppp];
                }
              }
            }
          }.bind(this))();

          if(this.upDownIndex < 3){
            fff.fliYear = new Date().getFullYear(fff.created);
            fff.fliTime = fff.duration.toHHMMSS();
            fff.springboardButtons = 1;
            html = this.util.buildTemplate($('#springboard-template'), fff);
            $('.app-container').append(html);
            $(".landingPage").hide();
            springboard = this.springboard = new Springboard();
            this.view = this.springboard;
          }
          else{

            this.model.loadData(fff.self,"episodesData",  this.episodesCallbackHandler);


          }






        break;
        case "Right":
          console.log(this.row);
          console.log(this.upDownIndex);
          switch(this.row){

              case "featuredRow0":
                  if(this.index[this.upDownIndex] < $('.'+this.row).children().length-1){
                    thisPos += -820;

                     $('.'+this.allClasses[this.upDownIndex]).css({
                       'transform': "translate3d("+thisPos+"px, 0px,0px)"
                     });

                     this.index[this.upDownIndex]+=1;
                   }
                break;
                default:
                  if(this.index[this.upDownIndex] < $('.'+this.row).children().length-1){
                    thisOtherPos[this.upDownIndex-1] += -420;

                    $('.'+this.allClasses[this.upDownIndex]).css({
                      'transform': "translate3d("+thisOtherPos[this.upDownIndex-1]+"px, 0px,0px)"
                    });

                    this.index[this.upDownIndex]+=1;

                  }

                break;

            }




        break;

        case "Left":
          switch(this.row){

            case "featuredRow0":
              if(this.index[this.upDownIndex] > 0){
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
                }
              break;
              default:
                if(this.index[this.upDownIndex] > 0){
                  thisOtherPos[this.upDownIndex-1] += 420;

                  $('.'+this.allClasses[this.upDownIndex]).css({
                    'transform': "translate3d("+thisOtherPos[this.upDownIndex-1]+"px, 0px,0px)"
                  });

                  this.index[this.upDownIndex]-=1;
                }
              break;
            }





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


      }

     }.bind(this);

  this.handleKey = function(e){
    //console.log('one');
    this.view.keyDown(e);

  }.bind(this);

  this.view = this;
  this.row = 'featuredRow0';

  window.addEventListener("keydown",this.handleKey, false);
  this.util = new Util();
  this.model = new Model();
  this.makeInitialDataCall();


}

  exports.App = App;
}(window));
