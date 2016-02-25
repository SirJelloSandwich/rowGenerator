
(function(exports){

  function Row(config, myindex) {

    $('.app-container').append('<div class='+config.type+myindex+' index="'+myindex+'"></div');

    $.each(config.data.img, function(index, value){
        $('.'+config.type+myindex+'').append('<img src='+config.data.img[index]+'>');
    });

    $.each($('.'+config.type+myindex+' img'),function(){
      $(this).css('width', config.width+'px');
      $(this).css('height', config.height+'px');
      $(this).css('margin-top',  config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom',  config.marginBottom+'px' );
      $(this).css('margin-left',  config.marginLeft+'px' );
    });

    this.row = $('.'+config.type+myindex+'')[0];
    var w = (config.width * config.data.img.length );
    var mr = w +  config.marginRight*config.data.img.length;
    $(this.row).css('width',mr);
    $(this.row).css('transform', 'translate3d('+ -config.width/2.7 +'px, 0px, 0px)');


    this.keyDown = function(e){
      if(e.keyIdentifier === "Right"){

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

  }

var data = {
  img:[ "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF",
        "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF",
        "http://www.ucg.org/files/styles/large/public/image/media-production/christian-view-on-politics-part-2.jpg?itok=gXV5WBfF"
      ],
  items:3
};

var featuredRowConfig = {
  type:'carousel',
  width : 800,
  height:400,
  marginTop:20,
  marginRight:20,
  marginBottom: 20,
  marginLeft:0,
  data: data
};

var gridRowConfig = {
  type:'gridRow',
  width : 400,
  height:200,
  marginTop:20,
  marginRight:20,
  marginBottom: 20,
  marginLeft:0,
  data: data
};

this.handleKey = function(e){
  this.view.keyDown(e);

}.bind(this);

window.featuredRow = new Row(featuredRowConfig, 0);
window.gridRow =[];


 data.img.forEach(function(element, index, array){
  window.gridRow[index] = new Row(gridRowConfig,index);

 });

this.view = gridRow[0];

window.addEventListener("keydown",this.handleKey, false);

})(window);
