
var speedCanvas = document.getElementById("revenueChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 0;
Chart.defaults.global.defaultFontColor = '#ffffff';

var speedData ={
    labels: [0,1,2,3,4,5,6,7,8,9],
    datasets: [{
        label: "",
        data: [7,7,7,8,9,8,8,9,8],
        backgroundColor: [
            'rgba(139, 211, 68, 0.8)',
        ]
    }]
};
var chartOptions = {

    legend: {
        display: false,
        position: 'top',
        labels: {
            boxWidth: 0,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});
