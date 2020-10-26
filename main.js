const LINECHART = document.getElementById("lineChart");

let lineChart = new Chart(LINECHART, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: [
      "Jun 2016",
      "Jul 2016",
      "Aug 2016",
      "Sep 2016",
      "Oct 2016",
      "Nov 2016",
      "Dec 2016",
      "Jan 2017",
      "Feb 2017",
      "Mar 2017",
      "Apr 2017",
      "May 2017",
    ],
    // Information about the dataset
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "lightblue",
        borderColor: "royalblue",
        data: [
          26.4,
          39.8,
          66.8,
          66.4,
          40.6,
          55.2,
          77.4,
          69.8,
          57.8,
          76,
          110.8,
          142.6,
        ],
      },
    ],
  },

  // Configuration options
  options: {
    layout: {
      padding: 10,
    },
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Precipitation in Toronto",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Precipitation in mm",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Month of the Year",
          },
        },
      ],
    },
  },
});

const BARCHART = document.getElementById("barChart");

let barChart = new Chart(BARCHART, {
  type: "bar",
  data: {
    labels: [
      "2015-01",
      "2015-02",
      "2015-03",
      "2015-04",
      "2015-05",
      "2015-06",
      "2015-07",
      "2015-08",
      "2015-09",
      "2015-10",
      "2015-11",
      "2015-12",
    ],
    datasets: [
      {
        label: "# of Tomatoes",
        data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      xAxes: [
        {
          ticks: {
            maxRotation: 90,
            minRotation: 80,
          },
          gridLines: {
            offsetGridLines: true, // à rajouter
          },
        },
        {
          position: "top",
          ticks: {
            maxRotation: 90,
            minRotation: 80,
          },
          gridLines: {
            offsetGridLines: true, // et matcher pareil ici
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

const HORIZONTALBARCHART = document.getElementById("horizontalBarChart");

let horizontalBarChart = new Chart(HORIZONTALBARCHART, {
  type: "horizontalBar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: { scales: { xAxes: [{ ticks: { beginAtZero: true } }] } },
});

let pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
});

new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
});
