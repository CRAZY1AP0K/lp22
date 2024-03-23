document.addEventListener('DOMContentLoaded', function() {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active')); 
        tab.classList.add('active'); 
      });
    });
  });