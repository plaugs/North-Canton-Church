$(document).ready(function() {
  $('.delete-page').popover();
  
  $('.carousel').carousel();

  $("#image-upload-spinner").hide();

  $(".alert").alert();

  $(".image-sidebar #new_admin_image").submit(function(){
	$("#image-upload-spinner").show();
    $(this).ajaxSubmit({
      dataType: 'json',
	  success: function(response){
	    $('#image-list').html(response.image_list);
	    $("#admin_image_image").attr('value', '');
		$("#image-upload-spinner").hide();
      }	
    });
    return false;	
  });

  var opts = {
    lines: 12, // The number of lines to draw
    length: 5, // The length of each line
    width: 2, // The line thickness
    radius: 5, // The radius of the inner circle
    color: '#000', // #rgb or #rrggbb
    speed: 1.6, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false // Whether to use hardware acceleration
  };
  var target = document.getElementById('image-upload-spinner');
  var spinner = new Spinner(opts).spin(target);

  $(".insertable-image").live('click', function(e){
    CKEDITOR.instances.content.insertHtml("<img src='" + $(e.target).attr('data-url') + "'>");
  });
});