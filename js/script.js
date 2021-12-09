$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

const circleChatOne = document.getElementById("circle-chat-one");
const circleChatTwo = document.getElementById("circle-chat-two");
const circleChatThree = document.getElementById("circle-chat-three");
const circleChatFour = document.getElementById("circle-chat-four");

const circleChatOneData = {
  labels: "none",
  datasets: [
    {
      label: "Food Review",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#f46f22",
      tension: 0.1,
      // showLine: false,
    },
  ],
};
const myChat2 = new Chart(circleChatOne, {
  type: "line",
  data: circleChatOneData,
});
const myChat3 = new Chart(circleChatTwo, {
  type: "line",
  data: circleChatOneData,
});
const myChat4 = new Chart(circleChatThree, {
  type: "line",
  data: circleChatOneData,
});
const myChat5 = new Chart(circleChatFour, {
  type: "line",
  data: circleChatOneData,
});

// order table fake data
const orderTable = document.querySelector(".order-table-body");
[...Array(30).keys()].forEach((index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${index}</td>
      <td>French Fries</td>
      <td>Jhon Leo</td>
      <td>New Town</td>
      <td>pending</td>
      <td>10:05</td>
      <td >$10</td>`;

  document.querySelector(".order-table-body").appendChild(tr);
});

// const sidebarItems = document.querySelectorAll(".sidebar-link");

// sidebarItems.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     e.stopImmediatePropagation();
//     const currentName = this.dataset.name;

//     for (const item of sidebarItems) {
//       const name = item.dataset.name;
//       if (currentName === name) {
//         continue;
//       } else {
//         item.classList.add("collapsed");
//         item.nextElementSibling.style.transition = "all 1s";
//         item.nextElementSibling.classList.remove("show");
//       }
//     }
//   });
// });
