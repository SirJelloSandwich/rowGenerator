(function(exports) {
  'use strict';

var settings = {
   featuredRowData : {
     type:'featuredRow',
     width : 825,
     height:464,
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
     width : 398,
     height:224,
     marginTop:0,
     marginRight:20,
     marginBottom: 20,
     marginLeft:0,
     rowArrows: 1,
     position: 0,
      parentClass: 'gridRowUpperSibling'
    //  data:clientData.data

  }
};

  exports.app = new App(settings);
}(window));
