jQuery(document).ready(function($) {

  var currentYear = (new Date).getFullYear();
  $(function copy() {
    $("#year").text( currentYear );
  });

});
