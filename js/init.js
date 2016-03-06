(function(exports) {
  'use strict';

var settings = {
   featuredRowData : {
     type:'featuredRow',
     width : 800,
     height:500,
     marginTop:0,
     marginRight:20,
     marginBottom: 20,
     marginLeft:0,
    position: -300,
    parentClass: 'featuredRowParent'
    //  data:clientData.data

  },
  gridRowData : {
    type:'gridRow',
     width : 400,
     height:200,
     marginTop:0,
     marginRight:20,
     marginBottom: 20,
     marginLeft:0,
     rowArrows: 1,
     position: 0,
      parentClass: 'gridRowParent'
    //  data:clientData.data

  }
};

  exports.app = new App(settings);
}(window));
