var acquisitions = document.getElementById('polarChartFinal');

var labelsAspects = ['Социальный аспект (40%)', 'Управленческий аспект (20%)', 'Предпринимательский аспект (40%)'];

var labelsSocialAspect = ['Социальный аспект (40%)', 'Управленческий аспект (20%)', 'Предпринимательский аспект (40%)'];
var labelsManagingAspect = ['Социальный аспект (40%)', 'Управленческий аспект (20%)', 'Предпринимательский аспект (40%)'];
var labelsBusinessAspect = ['Социальный аспект (40%)', 'Управленческий аспект (20%)', 'Предпринимательский аспект (40%)'];

var data = {
  labels: labelsAspects,
  datasets: [
    {
      label: 'Автоматическая оценка',
      data: [0.6, 0.31, 0.231],
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
      data: [0.6, 0.876, 0.739],
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
    },
    {
        type: 'radar',
        labels: labelsSocialAspect,
        data: [0.6, 0.78, 0.9]
    }
  ]
};

var chartOptions = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 3
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Визуализация трех аспектов - Полярный график + Радар'
    }
  }
}

var polarChart = new Chart(acquisitions, {
  type: 'polarArea',
  data: data,
  options: chartOptions
});