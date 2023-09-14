var newItemData = [];
var users = [
  {
    name: "Maecenas",
    surname: "Lacus",
    photo: "./img/Avatar.svg",
  },

  {
    name: "Viverra",
    surname: "Diam",
    photo: "./img/Avatar (2).svg",
  },
];

defTaskNum();
dragDrop();

// show new item container, when new item (div) is clicked
$(".new-item-button").click(() => {
  $(".newitem-container").show();
  $(".popup-background").show();
  emptyNewItemFields();
  newItemData = [];
});

// adding data from new item container to an empty array
$(".sv-btn").click(() => {
  if (
    $("#input-name")[0].value == "" ||
    $("#input-description")[0].value == "" ||
    $("#input-date")[0].value == "" ||
    $("#select-assigne")[0].value == "default"
  ) {
    $(".newitem-container").css("outline", "2px solid red");
    $(".newitem-container").css("transition", "0.1s all ease-in-out");
    console.log("if di");
    console.log($("#input-name")[0].value);
  } else {
    $(".newitem-container").css("outline", "none");
    $(".newitem-container").hide();
    $(".popup-background").hide();

    newItemData.push($("#input-name")[0].value);
    newItemData.push($("#input-description")[0].value);
    newItemData.push($("#input-date")[0].value);
    newItemData.push($("#select-assigne")[0].value);

    console.log(newItemData);

    // let idNum = $("#jobs-container-1 > div").length + 1
    let idNum = document.querySelectorAll(".task").length + 1;

    $("#jobs-container-1")
      .prepend(`<div id = "task${idNum}" draggable="true" class="task">
    <span class="task-name">${newItemData[0]}</span>

    <div class="task-description">${newItemData[1]}</div>


    <span class="user-name">${newItemData[3]}</span>


    <div class="task-date-n-usrphoto">
      <div style="display: flex; align-items: center; gap: 4px;">
        <img src="./img/clock.svg" alt="">
        <span class="task-date">${newItemData[2]}</span>
      </div>
      <img src="./img/Avatar.svg" alt="">
    </div>
  </div>`);

    defTaskNum();
    dragDrop();
  }
});

// hide new item container, when cancel (button) is clicked
$(".cnl-btn").click(() => {
  $(".newitem-container").hide();
  $(".popup-background").hide();
  $(".newitem-container").css("outline", "none");
});

function emptyNewItemFields() {
  var array = $(".new-task-details > input");
  array = array.toArray();
  for (var i = 0; i < array.length; i++) {
    array[i].value = "";
  }
  $("select")[0].value = "default";
}

// defining number of tasks per column -- column 1

$("#job-count-1").html($("#jobs-container-1 > div").length);

// console.log($("#jobs-container-1 > div"));

function dragDrop() {
  // console.log("works");
  // drag drop

  // const task = document.querySelector("#task1");
  let tasksArray = document.querySelectorAll(".task");

  tasksArray = Array.from(tasksArray);
  // console.log(tasksArray);

  tasksArray.map((task) => {
    task.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", task.id);
      console.log(e);
    });
    defTaskNum();
  });

  let dropZones = document.querySelectorAll(".drop-zone");
  dropZones = Array.from(dropZones);

  dropZones.map((e) => {
    e.addEventListener("dragover", (item) => {
      item.preventDefault();
    });
    e.addEventListener("drop", (item) => {
      item.preventDefault();
      console.log(item);

      const droppedElementId = item.dataTransfer.getData("text/plain");
      const droppedElement = document.getElementById(droppedElementId);

      e.prepend(droppedElement);
      // e.prependChild(droppedElement)
      console.log(droppedElementId);

      defTaskNum();
    });
  });
}

function defTaskNum() {
  $("#job-count-1").html($("#jobs-container-1 > div").length);
  $("#job-count-2").html($("#jobs-container-2 > div").length);
  $("#job-count-3").html($("#jobs-container-3 > div").length);
  $("#job-count-4").html($("#jobs-container-4 > div").length);
}

// new member code
$("#newmemb").click(function () {
  $(".newmember-container").css("display", "block");
});

$(".newm-cnl-btn").click(function () {
  $(".newmember-container").css("display", "none");
});

//getting inputs of newmember-container

$(".newm-sv-btn").click(() => {
  console.log($("#new_member_name")[0].value);
  console.log($("#new_member_surname")[0].value);
  console.log($("#new_member_photo")[0].files[0]);
});

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return this.name + " ad budur";
  }

  get Name() {
    return this.name + " ad budur";
  }

  set newName(ad) {
    this.name = ad;
  }
}

let ilkin = new Human("ilkin", 19);
// ilkin.newName = "ismayil";
ilkin.name = "ismayil";
console.log(ilkin.Name);
