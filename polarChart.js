var acquisitions = document.getElementById('polarChart');

var labels = ['Вовлечение уязвимых групп (20%)', 'Компоненты теории изменений (60%)', 'Обоснованность достижения соц. воздействия(20%)'];
  
var data = {
  labels: labels,
  datasets: [
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
      label: 'Потенциал оценки с верификацией эксперта',
      data: [0, 1, 1],
      backgroundColor: [
        'rgba(255, 174, 191, 0.75)',
        'rgba(113, 190, 241, 0.75)',
        'rgba(250, 228, 174, 0.75)'
      ]
    },
    {
      label: 'Совокупная оценка',
      data: [0.73, 0.876, 0.739],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: [
        'rgba(255, 0, 55, 0.5)',
        'rgba(0, 153, 255, 0.5)',
        'rgba(255, 183, 0, 0.5)'
      ]
    },
    {
      label: 'Автоматическая оценка',
      data: [0.73, 0.42, 0.329],
      borderColor: 'rgb(116, 52, 27)',
      backgroundColor: [
        'rgba(255, 99, 133, 0.5)',
        'rgba(54, 163, 235, 0.5)',
        'rgba(255, 207, 86, 0.5)'
      ]
    }
  ]
};

var chartOptions = {
  responsive: true,
  interaction: {
    intersect: true,
    mode: 'index',
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Визуализация социального аспекта - Полярный график'
    }
  }
}

var polarChart = new Chart(acquisitions, {
  type: 'polarArea',
  data: data,
  options: chartOptions
});