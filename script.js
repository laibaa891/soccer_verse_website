
var btn = $('#btn-back-to-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 70) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});



function openSearchHero() {
  document.getElementById("FullScreenOverlay").style.display = "block";
}

function closeSearchHero() {
  document.getElementById("FullScreenOverlay").style.display = "none";
}















$('.modal-content').resizable({
  //alsoResize: ".modal-dialog",
  minHeight: 300,
  minWidth: 300
});
$('.modal-dialog').draggable();

$('#myModal').on('show.bs.modal', function() {
  $(this).find('.modal-body').css({
    'max-height': '100%'
  });
});


























//////// ui script start /////////
// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
  var tab = $(this).closest('.tab'), 
  index = $(this).closest('li').index();
  tab.find('ul.tabs > li').removeClass('current');
  $(this).closest('li').addClass('current');
  tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
  tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
  g.preventDefault();
});

// search function
$('#search_field').on('keyup', function() {
var value = $(this).val();
var patt = new RegExp(value, "i");

$('.tab_content').find('.col-lg-3').each(function() {
  var $table = $(this);
  
  if (!($table.find('.featured-item').text().search(patt) >= 0)) {
    $table.not('.featured-item').hide();
  }
  if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
    $(this).show();
    document.getElementById('not_found').style.display = 'none';
  } else {
    document.getElementById("not_found").innerHTML = " Product not found..";
    document.getElementById('not_found').style.display = 'block';
  }
  
});

});


$(document).ready(function() {
  $('#example').DataTable({
    //disable sorting on last column
    "columnDefs": [
      { "orderable": false, "targets": 5 }
    ],
    language: {
      //customize pagination prev and next buttons: use arrows instead of words
      'paginate': {
        'previous': '<span class="fa fa-chevron-left"></span>',
        'next': '<span class="fa fa-chevron-right"></span>'
      },
      //customize number of elements to be displayed
      "lengthMenu": 'Display <select class="form-control input-sm">'+
      '<option value="10">10</option>'+
      '<option value="20">20</option>'+
      '<option value="30">30</option>'+
      '<option value="40">40</option>'+
      '<option value="50">50</option>'+
      '<option value="-1">All</option>'+
      '</select> results'
    }
  })  
} );



$(document).ready(function() {
  $("#feedbackForm").submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = $(this).serialize(); // Serialize form data

    $.ajax({
      type: "POST",
      url: "submit-feedback.php", // Create a PHP script to handle form submission
      data: formData,
      success: function(response) {
        // Display success message or perform other actions
        alert("Thank you for your feedback!");
        $("#feedbackForm")[0].reset(); // Reset form fields
      },
      error: function() {
        // Display error message or perform other error handling
        alert("An error occurred. Please try again later.");
      }
    });
  });
});



var swiper = new Swiper(".blog-slider", {
  loop: true,
  slidesPerView: "1",
  speed: 500,
  effect: "coverflow",
  coverflowEffect: {
      slideShadows: false,
  },
  mousewheel: {
      invert: false,
  },
  autoplay: {
      delay: 3000,
  },
  breakpoints: {
      0: {
          effect: "slide",
          centeredSlides: false,
      },
      768: {
          slidesPerView: "2",
          centeredSlides: true,
      },
      1200: {
          slidesPerView: "3",
          centeredSlides: true,
      }
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
  },

});
















