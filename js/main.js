var elForm = document.querySelector(".site_form");
var elFormName = document.querySelector(".site_input");
var elFormPrice = document.querySelector(".form_resalt");
var elFormResult = document.querySelector(".form_resalt");

var ombor = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();


    var newProduct = [
        [elFormName.value, elFormPrice.value]
    ]

    ombor.push(...newProduct);

    elFormName.value = null;

    console.log(ombor);
    drawPage();
});

function drawPage(){
    var result = "";
    for(var i = 0; i < ombor.length; i++){
        result += 
               "<li class='list-group'>" +
               "<div>" +
               "<p class ='text'> "+ ombor[i][0] +"</p>" +              
               "</div>" +
               "<div>" +
               "<button class='btn_site' type='button' onclick='deleteProduct("+ i +")'>Delete</button>" +
               "<button class='btn_site_exit' type='button'>Edit</button>" +
               "</div>" +
               "</li>"
    }

    elFormResult.innerHTML = result;
}

function deleteProduct(last) {
    ombor.splice(last, 1);
    drawPage();
}
