const actionButton = document.querySelector("#action-button");
const message = document.querySelector("#message");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector("[aria-hidden]");
const themeLabel = themeToggle.querySelector(".theme-toggle-label");

actionButton.addEventListener("click", () => {
  message.hidden = false;
});

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "ライトモード" : "ダークモード";
});
