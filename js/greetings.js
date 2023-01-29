const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const weatherHidden1 = document.querySelector("#weather span:first-child");
const weatherHidden2 = document.querySelector("#weather span:last-child");
const clockHidden = document.querySelector("#clock");
const todoFormHidden = document.querySelector("#todo-form");
const todoListHidden = document.querySelector("#todo-list");
const quoteHidden1 = document.querySelector("#quote span:first-child");
const quoteHidden2 = document.querySelector("#quote span:last-child");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  weatherHidden1.classList.remove(HIDDEN_CLASSNAME);
  weatherHidden2.classList.remove(HIDDEN_CLASSNAME);
  clockHidden.classList.remove(HIDDEN_CLASSNAME);
  todoFormHidden.classList.remove(HIDDEN_CLASSNAME);
  todoListHidden.classList.remove(HIDDEN_CLASSNAME);
  quoteHidden1.classList.remove(HIDDEN_CLASSNAME);
  quoteHidden2.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
