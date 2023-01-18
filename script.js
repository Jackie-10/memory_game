const boxImage = document.querySelectorAll(".frame");
 
let doubleImages = [];
let imageIndex = [];
let test = [];
let x=0 , y=0 , n=0;
initRandomImage()   

for(let i = 0 ; i < boxImage.length ; i++){  
   boxImage[i].addEventListener("click" , () => {
       // console.log(i)
    if(test[i]){
      n++;
       if(n <=2){          
         boxImage[i].style.background = `url('./image/${imageIndex[i]}.jpg')`;
         boxImage[i].style.backgroundSize = "120px 120px"  
          if(n == 1 ) x=i
          if(n == 2 ){
            y=i  
            check()  
          } 
       }
    }
  })
}

   function check(){                 
       console.log( imageIndex[x] + " " + imageIndex[y]);
          if(imageIndex[x] == imageIndex[y] ){
            test[x] = false
            test[y] = false
            console.log("ok " );
            n=0;
          }else if(n==2 && test[x] && test[y]){
            setTimeout(() => {          
              boxImage[x].style.background  = 'url("./image/images.jpg")';
              boxImage[y].style.background  = 'url("./image/images.jpg")';          
              boxImage[x].style.backgroundSize  = "120px" 
              boxImage[y].style.backgroundSize  = "120px" 
              n=0
              x=0
              y=0
            },1000)
          } 
        }         
   
function initRandomImage(){
  const images=['img1','img2','img3','img4','img5','img6',
  'img7','img8','img9','img10','img11','img12',
  'img13','img14','img15','img16']     
  
  let i = 0;
  doubleImages = images.concat(images)

 while(i < doubleImages.length) {       
   let index = Math.floor(Math.random() * doubleImages.length  )
      
    if(!test[index]){
      test[index] = true
      imageIndex[index] = doubleImages[i];      
      // console.log( imageIndex[index]);
      i++;
    } 
 } 
}

