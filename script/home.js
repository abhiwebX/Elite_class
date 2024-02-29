const myarray = [
  {
    img: "../img/at.jpeg",
    name: "Automata Theory",
    download: "../doc/oracal database.pdf",
    call: 100,
  },
  {
    img: "../img/os.jpeg",
    name: "Operating System",
    download: "../doc/PHP crash course.pdf",
    call: 100,
  },
  {
    img: "../img/math.jpeg",
    name: "Maths Theory",
    download: "../doc/project Management.pdf",
    call: 100,
  },
  {
    img: "../img/web.jpeg",
    name: "WebX Theory",
    download: "../doc/udemy full stack development.pdf",
    call: 100,
  },
  {
    img: "../img/db.jpeg",
    name: "Database Theory",
    call: 100,
    download: "../doc/web development.pdf",
  },
  {
    img: "../img/at.jpeg",
    name: "Automata Theory",
    download: "../doc/PHP crash course.pdf",
    call: 100,
  },
  {
    img: "../img/os.jpeg",
    name: "Operating System",
    download: "../doc/oracal database.pdf",
    call: 100,
  },
];
/// dataset 2 for add2card
const dataset2 = [];

function render() {
  let htl = "";
  myarray.map((value, index) => {
    if (index === 0) {
      htl = `
    <div class='val' id='valmo'><h3>Name: <input type="text" class='namee csstype'/></h3><h4> Contact : <input type="text" class='contactis csstype'/></h4>
    <button onclick='adddata()'>Add Data</button>
    </div>
    
    `;
    }
    htl += ` <div class='val'>
    <div class='imgss'><img src="${value.img}"></img></div>
    <div class ='name-call'>

    <h3>Name: ${value.name}</h3><h4> Contact :${value.call}</h4>
    <button class='btn_data'  data-product-name="${value.name}" data-product-contact="${value.call}" data-product-img="${value.img} ">Add to card ${index}</button> <a href='${value.download}' target='_Blank'> <button>Download</button></a>
    </div>
    </div>`;
  });
  document.querySelector(".con").innerHTML = htl;
}
render();

function adddata() {
  let name = document.querySelector(".namee");
  let data1 = name.value;
  let contact = document.querySelector(".contactis");
  let data2 = contact.value;
  myarray.push({ name: data1, call: data2 });
  name.value = "";
  contact.value = "";
  render();
  adding_data_to_array();
}

/// add to card data

function adding_data_to_array() {
  document.querySelectorAll(".btn_data").forEach((button) => {
    button.addEventListener("click", () => {
      const productname = button.dataset.productName;
      const productContact = button.dataset.productContact;
      const productImg = button.dataset.productImg;
      const productdown = button.dataset.productDown;
      dataset2.push({
        name: productname,
        call: productContact,
        img: productImg,
      });
      let datahtml = "";
      dataset2.map((value) => {
        datahtml += `<div id='cardid'>
        
        <div class ='cardid1'>
        <img src ='${value.img}'></img>
        </div>
        <div class= 'cardid2'>
<p> Name is: ${value.name}
</p>
<button> <a href='${value.img}' target='_Blank' > Download </a></button>
        </div>
        </div>`;
      });
      document.getElementById("main").innerHTML = datahtml;
    });
  });
}
adding_data_to_array();

/// adding data when user click on btn

/// card hide and sick
let div = document.getElementById("main");
var display = 0;

function show() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

let useradd = document.getElementById("valmo");
var userc = 0;
function addbook() {
  if (userc == 1) {
    useradd.style.display = "block";
    userc = 0;
  } else {
    useradd.style.display = "none";
    userc = 1;
  }
}
