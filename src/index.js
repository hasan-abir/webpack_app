import { sayHello } from "./sayHello";
import "./styles/main.scss";

const text = document.querySelector(".text");

text.innerHTML = sayHello("Eugene");
