let subscribe = false;

const subscribeBtn = document
  .getElementById("subscribe")
  .addEventListener("click", function () {
    if (!subscribe) {
      subscribe = true;
      document
        .getElementById("subscribe")
        .classList.replace("button", "subscribe");
      document.querySelector(".subscribe").textContent = "Subscribed!";
    } else {
      subscribe = false;
      document
        .getElementById("subscribe")
        .classList.replace("subscribe", "button");
      document.getElementById("subscribe").textContent = "Subscribe";
    }
  });
