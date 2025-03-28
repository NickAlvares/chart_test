import Chart from 'chart.js/auto'

(async function() {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Автоматическая оценка',
        data: [0.73, 0.811, 0.329],
        backgroundColor: [red, orange, green]
      }
    ]
  }

  const config = {
    type: 'polarArea',
    data: data,
    options: {
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
    },
  }

  const labels = ['Вовлечение уязвимых групп (20%)', 'Компоненты теории изменений (60%)', 'Обоснованность достижения соц. воздействия(20%)'];

  new Chart(
    document.getElementById('acquisitions'),
    config
  );

  

})();