let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function saveInput() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItems("myLeads"));
}
function tabInput() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
}
function deleteInput() {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", saveInput);
tabBtn.addEventListener("click", tabInput);
deleteBtn.addEventListener("dblclick", deleteInput);
