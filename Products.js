var HMD14AMD_BTN = document.getElementById("HMD14AMD");
var HMD14AMD_PRICE =document.getElementsByClassName("HMD14AMD");
var HMD15_BTN = document.getElementById("HMD15");
var HMD15_PRICE = document.getElementsByClassName("HMD15");
var HMD142020_BTN = document.getElementById("HMD142020");
var HMD142020_PRICE = document.getElementsByClassName("HMD142020");
var HMD132020_BTN = document.getElementById("HMD132020");
var HMD132020_PRICE = document.getElementsByClassName("HMD132020");
var XPRO_BTN = document.getElementById("XPRO");
var XPRO_PRICE = document.getElementsByClassName("XPRO");
var ul = document.querySelector ("ul");
var TOTAL = document.getElementById("TOTAL");

HMD14AMD_BTN.addEventListener ("click", function()
{
    alert("Added to Cart");
    }

)

HMD15_BTN.addEventListener ("click", function()
{
    alert("Added to Cart");
    }

)

HMD142020_BTN.addEventListener ("click", function()
{
    alert("Added to Cart");
    }

)

HMD132020_BTN.addEventListener ("click", function()
{
    alert("Added to Cart");
    }

)

XPRO_BTN.addEventListener ("click", function()
{
    alert("Added to Cart");
    }

)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  console.log("ITEMS")


  
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  
}

HMD14AMD_BTN.addEventListener ("click", function()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$ 39.99 - Huawei MateBook D 14 AMD"));
    
    ul.appendChild(li);        
    input.value="";
})
HMD15_BTN.addEventListener ("click", function()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$ 69.99 - Huawei MateBook D 15 AMD"));
    ul.appendChild(li);        
    input.value="";
})
HMD142020_BTN.addEventListener ("click", function()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$ 49.99 - Huawei MateBook D 14 2020D"));
    ul.appendChild(li);        
    input.value="";
})
HMD132020_BTN.addEventListener ("click", function()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$ 49.99 - Huawei MateBook D 13 2020"));
    ul.appendChild(li);        
    input.value="";
})
XPRO_BTN.addEventListener ("click", function()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$ 59.99 - Huawei MateBook X Pro 2021"));
    ul.appendChild(li);        
    input.value="";
})
TOTAL.addEventListener ("click", function()
{
    alert("Thank You for Checking Out");
    window.parent.location = window.parent.location.href;
})




// function updateCartTotal() {
// for (var i = 0; i < cartRows.length; i++) {
// if HMD14AMD_BTN (click, funtion()
// {
//     var price = 19.99 + price,
// })
