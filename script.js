document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const skeletonLoader = document.querySelector('.skeleton-loader');
      skeletonLoader.style.display = 'none';
  
      // Statistics Graph
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Monthly Stats',
          data: [10, 20, 15, 25, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };
  
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
      const ctx = document.getElementById('statsGraph').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
  
    }, 2000); 
  });