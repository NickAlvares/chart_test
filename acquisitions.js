var acquisitions = document.getElementById('acquisitions');

var labels = ['Вовлечение уязвимых групп (20%)', 'Компоненты теории изменений (60%)', 'Обоснованность достижения соц. воздействия(20%)'];
  
var data = {
  labels: labels,
  datasets: [
    {
      label: 'Автоматическая оценка',
      data: [0.73, 0.811, 0.329],
      backgroundColor: [
        'rgba(255, 99, 133, 0.75)',
        'rgba(54, 163, 235, 0.75)',
        'rgba(255, 207, 86, 0.75)'
      ]
    },
    {
      label: 'Потенциал Автоматической оценки',
      data: [1, 1, 0.6],
      backgroundColor: [
        'rgba(255, 174, 191, 0.75)',
        'rgba(113, 190, 241, 0.75)',
        'rgba(250, 228, 174, 0.75)'
      ]
    }
  ]
};

var chartOptions = {
  responsive: true,
  scales: {
    r: {
      pointLabels: {
        display: true,
        centerPointLabels: true,
        font: {
          size: 18
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Визуализация социального аспекта'
    }
  }
}

var polarChart = new Chart(acquisitions, {
  type: 'polarArea',
  data: data,
  options: chartOptions
});