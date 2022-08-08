const cardList = [
  {
      title: "Nature 2",
      image: "images/img1.jpg",
      link: "About Nature 2",
      desciption: "Demo desciption about Nature 2"
  },
  {
      title: "Nature 3",
      image: "images/img2.jpg",
      link: "About Nature 3",
      desciption: "Demo desciption about Nature 3"
  }
]

const addCards = (items) => {
  items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">'+
  '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
  '</div><div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
  '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
      '<p class="card-text card-desc-color">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
  });
}

const clickMe = () => {
  alert("Thanks for clicking me!")
}

const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();

  console.log("Form Data Submitted: ", formData);
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
  addCards(cardList);
  $('.modal').modal();
  $('#formSubmit').click(()=>{
      submitForm();
  })
})