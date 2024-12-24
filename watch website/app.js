const mainImage = document.getElementById('main-image');

const cards = Array.from(document.getElementsByClassName('card'));
cards.forEach(card =>{
   card.addEventListener("click",(e)=>{
    //    e.explicitOriginalTarget.classList.add("addClass")
    // mainImage.classList.add("addMainImage")
       mainImage.src = e.explicitOriginalTarget.src
       console.log(e.explicitOriginalTarget)

//   if(e.target.classList.contains('card__image')){
//     console.log('Image clicked');
//   }
   })
})


let header = document.querySelector("[nav]")
window.addEventListener("scroll",()=>{
   if(window.scrollY > 100){
      // header.classList.add("sticky");
   }
      else{
         // header.classList.remove("sticky");
      }
})