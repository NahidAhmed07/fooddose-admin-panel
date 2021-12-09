$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable({
      responsive: true,
      dom: "Blfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print"],
    });
  });

  // toaster main function
  function openToast(text, icon, bgColor) {
    $.toast({
      text: `<h6 class="my-2">${text}</h6>`,
      icon: icon,
      showHideTransition: "slide",
      bgColor: bgColor,
      textColor: "#eee",
      hideAfter: 3000,
      textAlign: "left",
      position: "top-right",
    });
  }

  $("#toast-success").click(() => {
    openToast("This is a success toast message", "success", "#269940");
  });

  $("#toast-error").click(() => {
    openToast("This is a Error toast message", "error", "#F44E42");
  });

  $("#toast-warning").click(() => {
    openToast("This is a warning toast message", "warning", "#FFA205");
  });

  $("#toast-info").click(() => {
    openToast("This is a info toast message", "info", "#18A2B8");
  });

  // sweet alert

  $("#alert-success").click(() => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: "This is a Success Alert ",
    });
  });

  $("#alert-error").click(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This is an Error Alert",
    });
  });

  $("#alert-warning").click(() => {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "This is a Warning Alert",
    });
  });

  $("#alert-info").click(() => {
    Swal.fire({
      icon: "info",
      title: "Info...",
      text: "This is a info Alert",
    });
  });

  $("#alert-delete").click(() => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
