
function wishList(){
    var list = document.getElementById("toast");
  list.classList.add("show");
  list.innerHTML = '<i class="far fa-heart wish"></i> <span>  0   </span> Product added to List';
  setTimeout(function(){
    list.classList.remove("show");
  },3000);
}
function removeList() {
  var listR = document.getElementById("toast");
  listR.classList.add("show");
  listR.innerHTML = '<i class="fas fa-times-circle wish"></i> Product removed from the List';
  setTimeout(function () {
    listR.classList.remove("show");
  }, 3000);
}
function addCart(){
      var cart = document.getElementById("toast-cart");
  cart.classList.add("show");
  cart.innerHTML = '<i class="fas fa-shopping-cart cart"></i> Product added to cart';
  setTimeout(function(){
    cart.classList.remove("show");
  }, 3000);
}
let sum = 0;
function updateTotal(){
  const quantityT = Array.from(document.querySelectorAll(".updown"));
  const unitPrice = Array.from(document.querySelectorAll(".price"));
  const totalPrice = document.querySelector(".tot");
 
  for (let i = 0; i < quantityT.length; i++) {
    sum =sum +  Number(quantityT[i].innerText) * Number(unitPrice[i].innerText);
    totalPrice.innerText = sum;
  }
}
window.addEventListener("load", updateTotal);
function plus(event){
   x = event.target.nextElementSibling.innerHTML++   ;
   if(x == 0){
    z = event.currentTarget.parentNode.lastElementChild.innerHTML
    y=z;
   }
   else 
 if (x > 0 ) {
 
 event.currentTarget.parentNode.lastElementChild.innerHTML = z * x ;   
  let  y = event.currentTarget.parentNode.lastElementChild.innerHTML ;   
  updateTotal();
return y ;

 }
    } 
    function moins(event){
      x= event.target.previousElementSibling.innerHTML ;
      if (x > 0) {
      x = event.target.previousElementSibling.innerHTML--  ;
      let  y = event.currentTarget.parentNode.lastElementChild.innerHTML ;  
      event.currentTarget.parentNode.lastElementChild.innerHTML = z * x  ;   
      updateTotal();
     return x  ;
      }
      else {
        return 0;
      }
    

       }     

       //Remove Btn
const   removeBtns = document.querySelectorAll(".delete-selection")
function removeProduct(event) {
  event.target.parentElement.parentElement.remove();
  updateTotal();
}

for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", removeProduct);
}

function quantity(){  
     if (document.querySelectorAll(".up")){
    for (let i = 0  ; i< document.querySelectorAll(".up").length ; i= i+1  ){
    document.querySelectorAll(".up")[i].addEventListener( "click" ,plus ) ;
    } 
  }
     if (document.querySelectorAll(".down")){
      for (let i = 0  ; i< document.querySelectorAll(".down").length ; i= i+1  ){
        document.querySelectorAll(".down")[i].addEventListener( "click" ,moins ) ;
        }

    }
    
  }



  function cardShop(){
   card =  document.querySelector(".btn btn-secondary") ;
   for (i=0; i>card.length ; i++) {
     
   }
  }
  window.addEventListener("load", updateTotal);
  /*
  function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers) ;
    if (productNumbers){
    localStorage.setItem('cartNumbers' , productNumbers + 1)
    document.querySelector('.glob h5').lastElementChild.textContent=productNumbers +1 ;
    } else {
      localStorage.setItem('cartNumbers' , 1) ;
      document.querySelector('.glob h5').lastElementChild.innerHTML= 1 ;
    }
  }
  
    
  function cardShop(){
let carts = document.querySelectorAll(".btn btn-secondary")
for(i=0 ; i < carts.length ; i++){
carts[i].addEventListener('click',cartNumbers )
}
  }
*/
