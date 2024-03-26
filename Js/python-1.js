window.addEventListener('scroll', () =>  {
    let purchase = document.getElementById('purchase-section')
    let footer = document.getElementById('footer')
    let purchaseHeight = purchase.offsetLeftsetHeight;
    let footerPosition = footer.getBoundingClientRect().top

     // Check if footer is in view
 if (footerPosition <= window.innerHeight) {
   purchase.classList.add('hidden');   
} 

else {
   purchase.classList.remove('hidden'); 
   
}
});


