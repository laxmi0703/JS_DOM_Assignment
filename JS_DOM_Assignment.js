// Assignment 1
document.querySelector(".side-bar  .crayons-subtitle-2").innerHTML = "Laxmi Nimbalkar";
document.querySelector(".side-bar > .crayons-card > .color-base-70").innerText = "My passion is about new things. Currently am learning web development with iNeuron";

// Assignment 2
let productElements = document.querySelector(".as-imagegrid-item-title" );
let productList = [];
productElements.forEach((ele) => {
    productList.push(ele.firstChild.textContent.trim());
})

// Assignment 3

let accordian = document.querySelector(".accordion-homepage");
let sectionAdd = document.createElement("section");
let sectionHeading = document.createElement("h3");
let textHeading = "My New FAQ";
sectionHeading.textContent = textHeading;
sectionAdd.appendChild(sectionHeading)
sectionAdd.classList = ["parent"];
accordian.appendChild(sectionAdd)

// Assignment 4
document.querySelector(".customer-support > a").lastChild.textContent = '+6555521322' // 1st way
document.querySelector(".customer-support > a > i").nextSibling; // 2nd

// Assignment 5
document.querySelector(".feature-column-carousel__button > a").innerText ="Check Out";

// Assignment 6 
document.querySelector("[placeholder=Search]").style.backgroundColor='red';

// Assignment 9

document.querySelector(".display-heading-1").style.color='rgb(177, 54, 30)';
document.querySelector(".display-heading-1").style.fontFamily='monospace';

// Assignment 11
document.querySelector('.icon-logo').style.backgroundImage="url('https://ineuron.ai/images/ineuron-logo.png')";

// Assignment 12
document.querySelector('.btn-primary').style.backgroundColor='blue';

// Assignment 13
document.querySelector('.fl-heading').innerHTML = 'JSBOOTCAMP';
document.querySelector('.fl-heading').style.color ='rgb(192, 201, 200)';

// Assignment 14
document.querySelector('.HotDealsAll__Heading__2fIbe').style.fontSize = "10rem";

// Assignment 15
document.querySelector('.ps-title').style.textAlign = 'right';

// Assignment 16
document.querySelector('.section-title_title__VEDfK').innerHTML = "Start with Scratch";


// Assignment 17
document.querySelector(".ps-module .btn.buy-button").innerHTML = currentDate = new Date();
document.querySelector(".ps-module .btn.buy-button").style.backgroundColor = 'white';
document.querySelector(".ps-module .btn.buy-button").style.color = "black";

// Assignment 18
document.querySelector('.p-f03-footer-container .p-footer>div ').style.backgroundColor = 'orange';

// Assignment 19
document.querySelector(".logo").src;
document.querySelector(".logo").innerHTML = "https://in.canon/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png";

// Assignment 20
document.querySelector('.desc').style.color ='orange';