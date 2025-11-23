const addCards = (items) => {
  $("#card-section").empty();

  items.forEach(item => {
    const cardHTML = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(cardHTML);
  });
};

//Activates modal
$(document).ready(function () {

  $(".modal").modal();

  $.get("/api/plants", (data) => {
    window.currentPlants = data;
    addCards(data);
  });

  //Gets the text
  const addPlantFromForm = () => {
    const name = $("#plantName").val();
    const desc = $("#plantDesc").val();

    //If there is no name stops the function
    if (!name) return;

    //Creates new plan object
    const newPlant = {
      title: name,
      description: desc || "No description provided.",
      image: "images/default.jpg",
      link: "About " + name
    };

    //Shows it in the console
    console.log("New plant submitted:", newPlant);

    //To clear the feild after submtiting input 
    $("#plantName").val("");
    $("#plantDesc").val("");
  };

  $("#formSubmit").click(() => {
    addPlantFromForm();
    $("#addPlantModal").modal("close");
  });
});
