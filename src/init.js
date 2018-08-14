// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var info = {
  firstName:"Tim",
  lastName:"Williams",
  jobTitle:"Sr. Engagement Manager",
  homeOffice:"Domain - D3",
}

// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(() => {

//check if element has content, if not populate first name
$('.first').on('click', event => {
  if (!$(event.currentTarget).next('.output').html()) {
     $(event.currentTarget).next('.output').append(info.firstName);
  } else {
    return false;
  };
});

//check if element has content, if not populate last name
$('.last').on('click', event => {
    if (!$(event.currentTarget).next('.output').html()) {
      $(event.currentTarget).next('.output').append(info.lastName);
  } else {
    return false;
  };
});


//check if element has content, if not populate job title
$('.title').on('click', event => {
  if (!$(event.currentTarget).next('.output').html()) {
    $(event.currentTarget).next('.output').append(info.jobTitle);
  } else {
    return false;
  };
});

//check if element has content, if not populate home office
$('.office').on('click', event => {
  if (!$(event.currentTarget).next('.output').html()) {
    $(event.currentTarget).next('.output').append(info.homeOffice);
  } else {
    return false;
  };
});

//hide table and display tell me more text
$('.more').on('click', event => {
  $('.table').addClass('disabled');
  $('div.moretext').removeClass('disabled');
});

});
