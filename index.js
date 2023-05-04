// Create an iFrame element
const eltIF = document.createElement("iframe");
eltIF.setAttribute("src", "https://youtube.com/embed/U2ipRvgCjnc");

// Define the initial styles for the iFrame
eltIF.style.position = "fixed";
eltIF.style.top = "50px";
eltIF.style.right = "20px";
eltIF.style.width = "400px";
eltIF.style.height = "300px";
eltIF.style.border = "0";
eltIF.style.zIndex = "9999";

// Add the iFrame to the page
document.body.appendChild(eltIF);

// Create a button element
const btnToggle = document.createElement("button");
btnToggle.textContent = "Toggle Video";

// Define the styles for the button
btnToggle.style.position = "fixed";
btnToggle.style.top = "10px";
btnToggle.style.right = "20px";
btnToggle.style.zIndex = "9999";

// Add the button to the page
document.body.appendChild(btnToggle);

// Define a flag to track whether the iFrame is currently visible or not
let isIframeVisible = true;

// Add a click event listener to the button
btnToggle.addEventListener("click", () => {
  if (isIframeVisible) {
    // Hide the iFrame
    eltIF.style.display = "none";
    btnToggle.textContent = "Show Video";
    isIframeVisible = false;
  } else {
    // Show the iFrame
    eltIF.style.display = "block";
    btnToggle.textContent = "Hide Video";
    isIframeVisible = true;
  }
});

// Add an event listener to the iFrame to adjust its size when the window is resized
window.addEventListener("resize", () => {
  eltIF.style.width = "400px";
  eltIF.style.height = "300px";
});
