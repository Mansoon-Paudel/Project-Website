const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      
      preloader.remove();
    }, 1000); 
  });
 

