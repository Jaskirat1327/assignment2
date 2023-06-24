
var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

var update = $('#btn-update');

$("#fphotos").hide();
$("#f1").hide();
$("#f2").hide();
$("#f3").hide();
$("#f4").hide();
$("#close").hide();


$('.photo-overlay1').hide();
$('.photo-overlay2').hide();
$('.photo-overlay3').hide();
$('.photo-overlay4').hide();

$(function(){
	$(document).click('click',function(e) {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> You liked this');
		$(this).children('.fa-heart').addClass('animate-like');
	});
});





    $('.thumb1').click(function(event) {
    
    event.preventDefault();


    
    $('.photo-overlay1').show();
    $('#close').show();
    $('.c-slider').hide();
    
    });
    $('#close').click(function() {
        $('.photo-overlay1').hide(); 
        $('.c-slider').show();     
        $('#close').hide();
        $('#favoritet').show();

                                                                                              
    
    });


$('.thumb2').click(function(event) {
    
    event.preventDefault();
    $('#close').show();

        
    $('.photo-overlay2').show();
    $('.c-slider').hide();
        
    });
$('#close').click(function() {
$('.photo-overlay2').hide(); 
$('.c-slider').show();           
$('#close').hide();
$('#favoritet').show();
                                                                             
});


$('.thumb3').click(function(event) {
    event.preventDefault();
    $('#close').show();

    $('.photo-overlay3').show();
    $('.c-slider').hide();
            
            });
            $('#close').click(function() {
                $('.photo-overlay3').hide(); 
                $('.c-slider').show();                                                                                                   
                $('#close').hide();
                $('#favoritet').show();

            });
            $('.thumb4').click(function(event) {
    
                event.preventDefault();
                $('#close').show();
                $('.photo-overlay4').show();
                $('.c-slider').hide();

                });
                $('#close').click(function() {
                    $('.photo-overlay4').hide(); 
                    $('.c-slider').show();                  
                    $('#close').hide();
                    $('#favoritet').show();

                });


//Move last image to the first place
$('#slider section:last').insertBefore('#slider section:first');
//Show first image with a margin of -100%
slider.css('margin-left','-'+100+'%');

setInterval(function() {
      moverD();
      // Do something every 5 seconds
}, 5000); 
function moverD(){
  slider.animate({
    marginLeft:'-'+200+'%'
  },700, function(){
      $('#slider section:first').insertAfter('#slider section:last')
      slider.css('margin-left','-'+100+'%');

  });
};

function moverI(){
  slider.animate({
    marginLeft:0
  },700,function(){
    $('#slider section:last').insertBefore('#slider section:first')
    slider.css('margin-left','-'+100+'%');

  });
};
function updated(){
  slider.animate({
    marginLeft:0
  },700,function(){
    $('#slider section:first');
  });
};





siguiente.on('click',function(){
  moverD();
});
anterior.on('click',function(){    
  moverI();
});
update.on('click',function(){
  updated();
});







//contact


function saveForm(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form element
  var form = document.getElementById("contactForm");

  // Get the form data
  var formData = new FormData(form);

  // Convert the form data to an object
  var formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  // Save the form data to localStorage
  localStorage.setItem("contactFormData", JSON.stringify(formObject));

  // Redirect to the home page
  window.location.href = "/views/index.ejs";
}