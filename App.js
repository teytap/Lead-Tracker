let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

function saveInput() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItems("myLeads"));
}

inputBtn.addEventListener("click", saveInput);

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
