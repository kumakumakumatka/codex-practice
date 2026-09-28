const actionButton = document.querySelector("#action-button");
const message = document.querySelector("#message");

actionButton.addEventListener("click", () => {
  message.hidden = false;
});
