const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

const inputId = document.querySelector('#userEmail');
const inputPw = document.querySelector('#userPassword');
const clickButton = document.querySelector('.btn-login');

inputPw.onclick = function enterId() {
  if (!emailReg(inputId.value)) {
    inputId.classList.add('is--invalid');
  } else if (inputId.value !== user.id) {
    alert('아이디가 일치하지 않습니다.');
  } else {
    inputId.classList.remove('is--invalid');
  }
};

clickButton.onclick = function enterPw() {
  if (!pwReg(inputPw.value)) {
    inputPw.classList.add('is--invalid');
  } else if (inputPw.value !== user.pw) {
    alert('비밀번호가 일치하지 않습니다.');
  } else {
    inputPw.classList.remove('is--invalid');
    window.location.href = 'welcome.html';
  }
};

clickButton.onkeyup = function enterkeyButton() {
  if (window.event.keyCode == 13) {
  }
};

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
