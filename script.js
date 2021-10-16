bscreen = ()=>{
   //document.getElementBytagName('body').style.backgroundImage= url('./smile.jpg');
   var audio = new Audio('./song.mp3');
   audio.play();
   
      document.body.style.backgroundImage="url('./smile.jpg')";

   
     
   
  
   document.getElementById('giftbox').innerHTML=null;

   function disp(){

    
      document.body.style.backgroundImage="url('./leaves.jpg')";

      var disp1 =`<div id='giftbox1'> 

      <h3> Happy Birthday</h3>
      <h2> Ramya Ji &#128512</h2>
      <p> Wishing you all the success</p>
      
     
   
       </div>`;
      //document.getElementById('giftbox').innerHTML=  null;
      document.getElementById('giftbox').innerHTML=  disp1;

   }

   setInterval(() => {
      disp();
      setTimeout(() => {
         document.body.style.backgroundImage="url('./smile.jpg')";
         document.getElementById('giftbox').innerHTML=  null;
      },2000)
    
      
      
      
   }, 3000);
   
   
    
      
  
}
   
  


