$(document).ready(() => {
  
  //check remember me checkbox
  $('.check-label').click(() => {
    if ($('#check').is(':checked')) {
      $('.check-icon').removeClass('hidden');
    } else {
      $('.check-icon').addClass('hidden');
    }
  });
  
  //gender radios
  $('input[name="gender"]').on('change', function() {
    if ($(this).val() === 'male') {
      $('.gender-icon').addClass('hidden');
      $('.gender-icon.male').removeClass('hidden');
    } else if ($(this).val() === 'female') {
      $('.gender-icon').addClass('hidden');
      $('.gender-icon.female').removeClass('hidden');
    }
  });
  
 
  //toggle between the forms
  $('.btn-sign-up').click((e) => {
    $(e.currentTarget).removeClass('bg-white');
    $(e.currentTarget).addClass('text-white');
    $(e.currentTarget).siblings().addClass('bg-white');
    $(e.currentTarget).siblings().removeClass('text-white').addClass('text-teal-400');
    $('.sign-up-box').addClass('right-0');
    $('.sign-in-box').addClass('-left-[100%]');
  });
  
  //===========

  $('.btn-sign-in').click((e) => {
    $(e.currentTarget).removeClass('bg-white');
    $(e.currentTarget).addClass('text-white');
    $(e.currentTarget).siblings().addClass('bg-white');
    $(e.currentTarget).siblings().removeClass('text-white').addClass('text-teal-400');
    $('.sign-in-box').removeClass('-left-[100%]');
    $('.sign-up-box').removeClass('right-0');
  });


});
