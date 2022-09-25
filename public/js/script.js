const getProjects = () => {
  $.get('/api/projects',(response) => {
      if(response.statusCode==200){
          addCards(response.data);
      }
  })
}

//ajax function
const addProjectToApp = (project) => {
  $.ajax({
      url: '/api/projects',
      data: project,
      type: 'POST',
      success: (result) => {
          alert(result.message);
          location.reload(); // it automatically reloads the page 
      }
  })
}

const cardList = [
  {
      title: "Wine Tasting",
      image: "images/winetasting.jpg",
      link: "Wine Tasting",
      desciption: "Find best places for Wine Tasting"
  },
  {
      title: "Day Trip",
      image: "images/daytrip.jpg",
      link: "Day Trip",
      desciption: "Search best destinations for Day Trip"
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
  formData.title = $('#title').val();
  formData.image = $('#image').val();
  formData.link = $('#link').val();
  formData.description = $('#description').val();

  console.log("Form Data Submitted: ", formData);
  addProjectToApp(formData);
}

//connecting the socket
let socket = io();

socket.on('number', (msg) => {
  $('#time').html(`Time: ${msg}`);
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
  addCards(cardList);
  $('.modal').modal();
  $('#formSubmit').click(()=>{
      submitForm();
  })
  getProjects();
  $('.modal').modal();
})