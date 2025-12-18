let ToggleBtn = document.querySelector("#theme-toggle");
let body = document.body;
let qoute = document.querySelector("#quote");

let LightModeQoutes = [
    "☀️ Believe in yourself — you’re stronger than you think.",
    "Keep going. Each small step adds up to something big.",
    "Hard work beats talent when talent doesn’t work hard.",
    "The future belongs to those who never stop learning.",
    "Be proud of how far you’ve come and keep pushing!"
];

let DarkModeQoute = [
    "🌙 Even the stars need darkness to shine.",
    "Failures are proof you’re trying.",
    "The night is darkest before the dawn.",
    "Stay focused — your time is coming!",
    "You are the light in someone’s darkness."
];

ToggleBtn.addEventListener("click" , () =>{
    if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode" , "dark-mode");
        ToggleBtn.textContent = "Switch to Light Mode ☀️";
        qoute.textContent = LightModeQoutes[Math.floor(Math.random() * LightModeQoutes.length)]
    } else {
        body.classList.replace("dark-mode" , "light-mode");
        ToggleBtn.textContent = "Switch to Dark Mode 🌙";
        qoute.textContent = DarkModeQoute[Math.floor(Math.random() * DarkModeQoute.length)]
    }
});





// // Event listener for button click
// toggleButton.addEventListener("click", () => {
//   if (body.classList.contains("light-mode")) {
//     // Switch to Dark Mode
//     body.classList.replace("light-mode", "dark-mode");
//     toggleButton.textContent = "Switch to Light Mode ☀️";
//     quote.textContent = darkQuotes[Math.floor(Math.random() * darkQuotes.length)];
//   } else {
//     // Switch to Light Mode
//     body.classList.replace("dark-mode", "light-mode");
//     toggleButton.textContent = "Switch to Dark Mode 🌙";
//     quote.textContent = lightQuotes[Math.floor(Math.random() * lightQuotes.length)];
//   }
// });
