var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

//проверка на доступ к localStorage
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

//отслеживание клика по кнопки "входа" =>
//отключение перехода по ссылке =>
//открытие модального окна
//проверка на доступ к storage
//переключение фокуса на поле пароля
//переключение фокуса на поле ввода логина

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

//отслеживание клика по кнопке "закрыть" =>
//(на всякий случай, например, когда не контролируешь вёрстку, а только занимаешься js) отмена действия по умолчанию
//закрытие модального окна
//удаление анимации ошибки

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

//отслеживание отправки формы
//проверяем введён ли логин и пароль
//отключение перехода по ссылке, если условие срабатывает и добавляется анимация ошибки
//если условие не срабатывает, получает доступ к записаному логину

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

//отслеживание нажатия клавиши Esc
//проверка, открыт ли попап
//закрытие модального окна клавишей Esc

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});

//открытие модального окна с картой

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

//закрытие модального окна с картой

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

//закрытие маодального онка с картой, нажатием клавиши Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});