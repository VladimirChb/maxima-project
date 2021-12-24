// 'use strict';

//
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const checkbox = document.getElementById("checkbox")
//
// const emailBlock = email.parentElement
// const emailLabel = emailBlock.querySelector('label')
// const emailSpan = emailBlock.querySelector('span')
//
// const passwordBlock = password.parentElement
// const passwordLabel = passwordBlock.querySelector('label')
// const passwordSpan = passwordBlock.querySelector('span')
//
// const checkboxBlock = checkbox.parentElement
// const checkboxLabel = checkboxBlock.querySelector('label')
// const checkboxSpan = checkboxBlock.querySelector('span')
//
// const ERROR_BORDER = "error-border"
// const ERROR_BEFORE = "error-before"
// const ERROR_COLOR = "error-color"
// const ERROR = "error"
//
// let isEmailValid = false;
// let isPasswordValid = false;
// let isCheckboxValid = false;
//
// function validateEmail() {
//     if (!email.value) {
//         addClass(email, ERROR_BORDER)
//         addClass(emailBlock, ERROR_BEFORE)
//         addClass(emailLabel, ERROR_COLOR)
//         addClass(emailSpan, ERROR)
//         emailSpan.innerText = "Поле обязательно для заполнения"
//         isEmailValid = false
//     } else if (validateEmailString(email.value) == false) {
//         addClass(email, ERROR_BORDER)
//         addClass(emailBlock, ERROR_BEFORE)
//         addClass(emailLabel, ERROR_COLOR)
//         addClass(emailSpan, ERROR)
//         emailSpan.innerText = "Email невалидный"
//         isEmailValid = false
//     } else {
//         removeClass(email, ERROR_BORDER)
//         removeClass(emailBlock, ERROR_BEFORE)
//         removeClass(emailLabel, ERROR_COLOR)
//         removeClass(emailSpan, ERROR)
//         emailSpan.innerText = "error"
//         isEmailValid = true
//     }
// }
//
// function validatePassword() {
//     if (!password.value) {
//         addClass(password, ERROR_BORDER)
//         addClass(passwordBlock, ERROR_BEFORE)
//         addClass(passwordLabel, ERROR_COLOR)
//         addClass(passwordSpan, ERROR)
//         passwordSpan.innerText = "Поле обязательно для заполнения"
//         isPasswordValid = false
//     } else if (password.value.length < 8) {
//         addClass(password, ERROR_BORDER)
//         addClass(passwordBlock, ERROR_BEFORE)
//         addClass(passwordLabel, ERROR_COLOR)
//         addClass(passwordSpan, ERROR)
//         passwordSpan.innerText = "Пароль должен содержать как минимум 8 символов"
//         isPasswordValid = false
//     } else {
//         removeClass(password, ERROR_BORDER)
//         removeClass(passwordBlock, ERROR_BEFORE)
//         removeClass(passwordLabel, ERROR_COLOR)
//         removeClass(passwordSpan, ERROR)
//         passwordSpan.innerText = "error"
//         isPasswordValid = true
//     }
//
// }
//
// function validateChecked() {
//     if (!checkbox.checked) {
//         addClass(checkboxBlock, ERROR_BEFORE)
//         addClass(checkboxLabel, ERROR_COLOR)
//         addClass(checkboxSpan, ERROR)
//         checkboxSpan.innerText = "Поле обязательно для заполнения"
//         isCheckboxValid = false
//     } else {
//         removeClass(checkboxBlock, ERROR_BEFORE)
//         removeClass(checkboxLabel, ERROR_COLOR)
//         removeClass(checkboxSpan, ERROR)
//         checkboxSpan.innerText = "error"
//         isCheckboxValid = true
//     }
//
// }
//
//
// function validateForm(event) {
//     event.preventDefault()
//     validateEmail()
//     validatePassword()
//     validateChecked()
//
//     if (isEmailValid && isPasswordValid && isCheckboxValid) {
//         localStorage.setItem('email', email.value)
//         localStorage.setItem('password', password.value)
//         console.log({
//             email: email.value,
//             password: password.value
//         })
//     }
//
//
// }
//
// function check() {
//     const email2 = localStorage.getItem('email')
//     const password2 = localStorage.getItem('password')
//     if (email2 && password2) {
//         console.log(email2)
//         email.value = email2
//         password.value = password2
//         return alert("ВЫ УЖЕ АВТОРИЗОВАНЫ")
//     }
// }
//
// check()
//
//
// function validateEmailString(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//
// function addClass(tag, className) {
//     return tag.classList.add(className)
// }
//
// function removeClass(tag, className) {
//     return tag.classList.remove(className)
// }

// export default Loginerrow;