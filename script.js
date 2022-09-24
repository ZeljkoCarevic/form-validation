const form = document.getElementById("form");
const personName = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("gmail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  nameCheck();
});

checkInputs = function () {
  emailVal = email.value;
  passwordVal = password.value;
  password2Val = password2.val;
};

nameCheck = function () {
  errorMsg = function () {
    personName.classList.add(".error");
    surname.classList.add(".error"); //triba napravit classu error koja ce prominit border u crveno
    console.log("test");
  };
  nameVal = personName.value;
  surnameVal = surname.value;

  reg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ 0-9]/;

  if (reg.test(nameVal) || reg.test(surnameVal)) {
    //ovo gleda jel ima specijalnih znakova ili brojeva u imenu ili prezimenu
    errorMsg();
  } else if (
    //a ovo jel prvo slovo veliko
    nameVal[0].toUpperCase() !== nameVal[0] ||
    surnameVal[0].toUpperCase() !== surnameVal[0]
  ) {
    errorMsg();
  }
};
