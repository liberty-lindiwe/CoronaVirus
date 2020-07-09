/*******************************************************
 * 
 * Creating Toggle classes
 * 
 ******************************************************/

const box = document.getElementsByClassName("accordion");
let i;

for(i=0;i<box.length;i++)
{
 box[i].addEventListener('click',showContent);

}

console.log("why");

function showContent()
{
   
   this.classList.toggle("active");

    let panel = this.nextElementSibling; 
    
    if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   } 
    
}
