var formCont = document.getElementById("mainForm"),
  divSearch = document.getElementById("byNameContainer"),
  divId = document.getElementById("byIdContainer"),
  searchInput = document.getElementById("searchByName"),
  searchByNmBtn = document.getElementById("searchBtn"),
  searchByIdBtn = document.getElementById("searchByIdBtn"),
  searchIdInput = document.getElementById("searchById"),
  firstNameInput = document.getElementById("firstName"),
  lastNameInput = document.getElementById("lastName"),
  birthYearInput = document.getElementById("birthYear"),
  idNumberInput = document.getElementById("idNumber"),
  cityInput = document.getElementById("city"),
  addPatientButton = document.getElementById("addPatientBtn"),
  table = document.getElementById("patientsTable"),
  patientsArr = [];

/*searchByNmBtn.addEventListener("click", () => {
  for (let i = 0; i < patientsArr.length; i++) {
    if (searchInput.value == patientsArr[i].firstName) {
      divSearch.innerHTML += `<p>${patientsArr[i].firstName}<br>${patientsArr[i].lastName}<br>${patientsArr[i].birthYear}<br>${patientsArr[i].id}<br>${patientsArr[i].city}<br>${patientsArr[i].checkDate}</p><br>`;
    }
    if (searchInput.value != patientsArr[i].firstName) {
      divSearch.innerHTML = `<p>"patient doesn't exist in the table"</p><br>`;
    }
  }
});*/

/*searchByIdBtn.addEventListener("click", () => {
  for (let i = 0; i < patientsArr.length; i++) {
    if (searchIdInput.value == patientsArr[i].id) {
      divId.innerHTML = `<p>"patient doesn't exist in the table"</p><br>`;
    }
    if (searchIdInput.value != patientsArr[i].id) {
      divId.innerHTML += `<p>${patientsArr[i].firstName}<br>${patientsArr[i].lastName}<br>${patientsArr[i].birthYear}<br>${patientsArr[i].id}<br>${patientsArr[i].city}<br>${patientsArr[i].checkDate}</p><br>`;
    }
  }
});*/

firstNameInput.oninput = function () {
  firstNameInput.value = firstNameInput.value.toUpperCase();
};
lastNameInput.oninput = function () {
  lastNameInput.value = lastNameInput.value.toUpperCase();
};
cityInput.oninput = function () {
  cityInput.value = cityInput.value.toUpperCase();
};

addPatientButton.addEventListener("click", () => {
  var newPatient = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    birthYear: birthYearInput.value,
    id: idNumberInput.value,
    city: cityInput.value,
  };
  patientsArr.push(newPatient);
  newPatient.checkDate = new Date();
  for (let i = 0; i < patientsArr.length; i++) {
    for (let j = i + 1; j < patientsArr.length; j++) {
      if (patientsArr[i].id == patientsArr[j].id) {
        patientsArr.splice(patientsArr[j], 1);
        alert("this id exist already");
      }
    }
  }
  table.innerHTML += `<tr><td>name: ${newPatient.firstName} last name: ${newPatient.lastName} birth year: ${newPatient.birthYear} ID: ${newPatient.id} city: ${newPatient.city} date of check:${newPatient.checkDate}</td></tr><br>`;
});
