(function(exports) {
  'use strict';
 function Model(settings){

     this.featuredUrl = 'http://www.ucg.org/api/v1.0/media/';

   this.loadData = function(url, name,  dataLoadedCallback, type) {
    var requestData;
     var dataType ='json';

      if(type){
        //type = true;
        if(type === "vtt"){
          dataType = "text";
        }
        // else{
        //     type =true;
        // }
      }else{
          type =true;
      }
      console.log(url+type+dataType);

      requestData = {
          url: url,
          type: 'GET',
          crossDomain: true,
          dataType: dataType,
          context: this,
          async:type,
          cache: true,
          timeout: '',
          success: function () {

              var name2 = name.replace(/['"]+/g, '');

              if(name2 === "featuredUrl"){
                  var featuredItems = arguments[0];

                  for (var ttt in featuredItems.data) {

                      this.featuredUrl += featuredItems.data[ttt].id + ',';
                  }
                  this[name2] = this.featuredUrl.substring(0, this.featuredUrl.length - 1);
                  dataLoadedCallback(this[name2]);

                  return;
              }

              this[name2] = arguments[0];

              dataLoadedCallback(this[name2]);

          }.bind(this),
          error: function (jqXHR, textStatus) {
              // Data feed error is passed to model's parent (app.js) to handle
              if (jqXHR.status === 0) {
                //  this.trigger("error", ErrorTypes.INITIAL_NETWORK_ERROR, errorHandler.genStack());
                  return;
              }
              switch (textStatus) {
                  case "timeout":
                    //  this.trigger("error", ErrorTypes.INITIAL_FEED_TIMEOUT, errorHandler.genStack());
                      break;
                  case "parsererror":
                    //this.trigger("error", ErrorTypes.INITIAL_PARSING_ERROR, errorHandler.genStack());
                      break;
                  default:
                      console.log("UNKNOWN ERROR");
                      //this.trigger("error", ErrorTypes.INITIAL_FEED_ERROR, errorHandler.genStack());
                      break;
              }
          }.bind(this)
      };
    //fireUtils.ajaxWithRetry(requestData);
    $.ajax(requestData);
  }.bind(this);

  }


  exports.Model = Model;
}(window));
