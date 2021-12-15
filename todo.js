var addbtn = document.getElementById("addBtn");
var removeBtn = document.getElementById("removeBtn");
var input = document.getElementById("addInput");
var list = document.getElementById("lists");
var dlt = document.getElementsByClassName("listIcon");

addbtn.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);

function addItem() {
  let data = input;
  let listCeate = document.createElement("li");
  let listText = document.createTextNode(data.value);
  listCeate.appendChild(listText);
  list.appendChild(listCeate);
  //Close icon
  let iconD = document.createElement("div");
  iconD.classList.add("listIcon");
  let closeIcon = document.createElement("Button");
  closeIcon.classList.add("rBTN");
  closeIcon.innerText = "X";
  iconD.appendChild(closeIcon);
  listCeate.appendChild(iconD);
  //Clear Input
  data.value = "";
}
//Delete Items
function deleteItem(t) {
  let item = t.target;
  if (item.classList[0]) {
    const list = item.parentElement;
    //animation
    list.classList.add("falling");
    list.addEventListener("transitionend", function () {
      //remove item
      this.remove();
    });
  }
}

// Hide List
removeBtn.addEventListener("click", function () {
  let rBox = document.getElementById("listHolder");
  rBox.classList.toggle("rBox");
});
