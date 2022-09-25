const form = document.getElementById("form");
const personName = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("gmail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  //nameCheck();
  //emailCheck()
});

errorMsg = function (class1, class2) {
  class1.classList.add(".error");
  class2.classList.add(".error");
};

checkInputs = function () {
  passwordVal = password.value;
  password2Val = password2.value;

  ////email validacija priko api////

  ///password val, mora imat broj, soec znak, najmanje 6 slova itd///

  if (password2Val.length < 6 || passwordVal.length < 6) {
    errorMsg(password, password2);
  } else if (password2Val !== passwordVal) {
    errorMsg(password, password2);
  } else password2Val;
};

nameCheck = function () {
  nameVal = personName.value;
  surnameVal = surname.value;

  reg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ 0-9]/;

  if (reg.test(nameVal) || reg.test(surnameVal)) {
    //ovo gleda jel ima specijalnih znakova ili brojeva u imenu ili prezimenu
    errorMsg(personName, surname);
  } else if (
    //a ovo jel prvo slovo veliko
    nameVal[0].toUpperCase() !== nameVal[0] ||
    surnameVal[0].toUpperCase() !== surnameVal[0]
  ) {
    errorMsg(personName, surname);
  }
};

emailCheck = async function () {
  emailVal = email.value;
  try {
    const res = await fetch(
      `https://api.zerobounce.net/v1/validate?apikey=b6f79ec22fe6448082d9e8eca3dbad87&email=${emailVal}`
    );
    const data = await res.json();

    if (data.status !== "Valid") {
      email.classList.add(".error");
    }
  } catch (err) {
    alert(err.message);
  }
};
