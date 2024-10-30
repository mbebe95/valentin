 // Állítsd be a kezdő dátumot (pl. 2023-01-01)
 const startDate = new Date("2023-06-25");
        
 // Számold ki az eltelt napokat
 function calculateDaysElapsed() {
     const today = new Date();
     const timeDiff = today - startDate;
     const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
     return daysElapsed;
 }

 // Felpörgő animációs hatás
 function animateCounter(targetNumber) {
     const counterElement = document.getElementById("counter");
     let currentCount = 0;
     const interval = setInterval(() => {
         currentCount += Math.ceil(targetNumber / 100); // gyorsítás a pörgéshez
         if (currentCount >= targetNumber) {
             counterElement.textContent = targetNumber;
             clearInterval(interval);
         } else {
             counterElement.textContent = currentCount;
         }
     }, 20); // sebesség a pörgéshez
 }

 // Kiszámítja az eltelt napokat, és elindítja az animációt
 const daysElapsed = calculateDaysElapsed();
 animateCounter(daysElapsed);

  document.querySelector('#no').addEventListener('click', function(){
    document.querySelector('.no').style.display = 'none';
    document.querySelector('.yes').style.display = 'none';
    document.querySelector('.sad').style.display = 'block';
  });

  document.querySelector('#yes').addEventListener('click', function(){
    document.querySelector('.no').style.display = 'none';
    document.querySelector('.yes').style.display = 'none';
    document.querySelector('.happy').style.display = 'block';
  });