const grafiksales = document.getElementById("grafik");
const datadumy = {
  Avengers: [100, 300, 400, 200, 700, 800],
  Batman: [400, 230, 500, 300, 600, 100],
  Superman: [300, 500, 200, 700, 800, 200],
};
let sales = new Chart(grafiksales, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Sales",
        data: datadumy.Avengers,
        borderWidth: 2,
        fill: true,
        backgroundcolor: "blue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  },
});

const select = document.getElementById("select-one");

const filter = document
  .querySelector("#filter")
  .addEventListener("click", function () {
    const selectedvalue = select.value;
    sales.data.datasets[0].data = datadumy[selectedvalue];
    sales.update();
    document.querySelector("#heading").textContent = `${selectedvalue}`;
  });

// Grafik 2
const grafikticket = document.getElementById("grafik-ticket");
const datadummy2 = {
  CaptainAmerika: [100, 700, 800, 100, 500, 300],
  Hulk: [400, 230, 500, 300, 400, 800],
  Thor: [300, 800, 100, 300, 100, 300],
};
let sales2 = new Chart(grafikticket, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Sales",
        data: datadummy2.CaptainAmerika,
        borderWidth: 2,
        fill: true,
        backgroundcolor: "blue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  },
});

const select2 = document.getElementById("select2");

const filter2 = document
  .getElementById("filter2")
  .addEventListener("click", function () {
    const selectedvalue2 = select2.value;
    sales2.data.datasets[0].data = datadummy2[selectedvalue2];
    sales2.update();
    document.querySelector("#heading2").textContent = `${selectedvalue2}`;
  });
