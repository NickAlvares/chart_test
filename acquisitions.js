var acquisitions = document.getElementById('acquisitions');

var labels = ['Вовлечение уязвимых групп (20%)', 'Компоненты теории изменений (60%)', 'Обоснованность достижения соц. воздействия(20%)'];
  
var data = {
  labels: labels,
  datasets: [
    {
      label: 'Автоматическая оценка',
      data: [0.73, 0.42, 0.329],
      backgroundColor: [
        'rgba(255, 99, 133, 0.5)',
        'rgba(54, 163, 235, 0.5)',
        'rgba(255, 207, 86, 0.5)'
      ]
    },
    {
      label: 'Потенциал Автоматической оценки',
      data: [1, 0.5, 0.6],
      backgroundColor: [
        'rgba(255, 174, 191, 0.5)',
        'rgba(113, 190, 241, 0.5)',
        'rgba(250, 228, 174, 0.5)'
      ]
    },
    {
      label: 'Совокупная оценка',
      data: [0.73, 0.876, 0.739],
      backgroundColor: [
        'rgba(255, 0, 55, 0.5)',
        'rgba(0, 153, 255, 0.5)',
        'rgba(255, 183, 0, 0.5)'
      ]
    },
    {
      label: 'Потенциал оценки с верификацией эксперта',
      data: [0, 1, 1],
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