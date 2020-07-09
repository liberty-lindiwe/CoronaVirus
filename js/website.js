/*
****************************
*  CREATING A SLIDESHOW   *
****************************
*/
let startpoint = 0;     /* start index */
let images = [];   /*an array of images */
let time = 6000;   /* similar to 6 seconds */


/* The images inside the array */

images[0] = "../Media/Images/Posters/CoronaInfo.jpg";
images[1] = "../Media/Images/Posters/any.jpg";
images[2] = "../Media/Images/Posters/winter.jpg";
images[3] = "../Media/Images/Posters/iam.png";
images[4] = "../Media/Images/Posters/fact.jpg";
images[5] = "../Media/Images/Posters/what2do.jpg";
images[6] = "../Media/Images/Posters/grocery.png";
images[7] = "../Media/Images/Posters/gloves.png";
images[8] = "../Media/Images/Posters/distancing.jpg";
images[9] = "../Media/Images/Posters/cov.jpg";
images[10] = "../Media/Images/Posters/bacteria.png";
images[11] = "../Media/Images/Posters/spray.png";
images[12] = "../Media/Images/Posters/temp.png";
images[13] = "../Media/Images/Posters/waves.png";
images[14] = "../Media/Images/Posters/pack.jpg";

/* Alternate the images */

function alternateImg(){
  document.slide.src = images[startpoint];   /* Set it to the first index which is zero */
  
  if(startpoint< images.length-1){           /* The length is 3 however the index is zero based so we have to subtract 1 from the length */
      startpoint++;
  }else{
      startpoint=0;
  }

  //Essential Tips 
  /******************************************
   * 
   *Tip: 1000 ms = 1 second.

   *Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method.

   *Tip: Use the clearTimeout() method to prevent the function from running.
   * 
   */

  setTimeout("alternateImg()",time);    /* The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. */
}

window.onload = alternateImg;         

