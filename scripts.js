let password = document.querySelector("#user_password");
let passwordCheck = document.querySelector("#confirm_password");
if (passwordCheck !== password) {
    passwordCheck.setCustomValidity('Password does not match.');
}