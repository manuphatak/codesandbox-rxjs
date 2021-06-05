import { fromEvent } from "rxjs";
export const init = () => {
  console.log("init");

  const button = document.getElementById("theButton")!;

  fromEvent(button, "click");

  // button.addEventListener("click", () => {
  //   console.log("clicked");
  // });
};
