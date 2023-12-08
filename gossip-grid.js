
import { gossips } from "./gossip-grid.data.js";

export function grid() {
  let body = document.querySelector("body");

  createRange();
  createForm();

  for (let i = 0; i < gossips.length; i++) {
    let elementDiv = document.createElement("div");
    elementDiv.setAttribute("class", "gossip");
    elementDiv.innerText = gossips[i];
    body.append(elementDiv);
  }
}

function createRange() {
  let body = document.querySelector("body");
  let divRange = document.createElement("div");
  divRange.setAttribute("class", "ranges");

  for (let i = 0; i < 3; i++) {
    let inputRange = document.createElement("input");
    inputRange.setAttribute("type", "range");

    if (i == 0) {
      inputRange.setAttribute("id", "width");
      inputRange.setAttribute("min", "200");
      inputRange.setAttribute("max", "800");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "width:" + inputRange.value.toString() + "px"
          );
        }
      });
    } else if (i == 1) {
      inputRange.setAttribute("id", "fontSize");
      inputRange.setAttribute("min", "20");
      inputRange.setAttribute("max", "40");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "font-size:" + inputRange.value.toString() + "px"
          );
        }
      });
    } else if (i == 2) {
      inputRange.setAttribute("id", "background");
      inputRange.setAttribute("min", "20");
      inputRange.setAttribute("max", "75");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "background:" + "hsl(280,50%," + inputRange.value.toString() + "%)"
          );
        }
      });
    }

    divRange.append(inputRange);
  }

  body.append(divRange);
}

function createForm() {
  let body = document.querySelector("body");
  let elementForm = document.createElement("form");
  let elementTextArea = document.createElement("textarea");
  let elementButton = document.createElement("button");

  elementForm.setAttribute("class", "gossip");
  elementButton.innerText = "Share gossip!";

  elementButton.addEventListener("click", () => {
    let elDiv = document.createElement("div");
    elDiv.setAttribute("class", "gossip");
    elDiv.innerText = elementTextArea.value;
    insertAfter(elementForm, elDiv);
    elementTextArea.value = "";
    event.preventDefault();
  });

  elementForm.append(elementTextArea, elementButton);
  body.append(elementForm);
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
