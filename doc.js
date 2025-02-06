function show() {
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age input").value;
  let date = document.querySelector('input[type="date"]').value;
  let treatment = document.querySelector("#prescription").value;

  document.getElementById("patientName").innerHTML = name;
  document.getElementById("prescriptionDate").innerHTML = date;
  document.getElementById("patientAge").innerHTML = age;

  let items = document.querySelector(".prescription ul li ");

  items.innerText = treatment;

  news[0].innerText = treatment;
}
