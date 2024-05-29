function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 0, 234, 5000);

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