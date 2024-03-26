const tasksData = {
    labels: ["To Do", "In Progress", "Done"],
    datasets: [{
        label: 'Tasks',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#fff',
        data: [10, 20, 30]
    }]
};

// Create chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: tasksData,
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        }
    }
});