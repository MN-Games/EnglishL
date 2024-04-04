// Define the script for blocking functionality

// Function to redirect to a different URL
function redirect(url) {
    window.location.href = url;
}

// Event listener for the button leading to a blocked URL
document.getElementById("blockedURLButton").addEventListener("click", function() {
    // Simulating a blocked URL
    // You can replace this with actual logic to check the URL
    // and perform redirection if necessary
    const blockedURL = "vercel.com";
    const redirectURL = "https://google.com";
    if (window.location.href.includes(blockedURL)) {
        redirect(redirectURL);
    }
});

// Event listener for the button containing blocked text
document.getElementById("blockedTextButton").addEventListener("click", function() {
    // Simulating blocked text
    // You can replace this with actual logic to scan the page content
    // and perform redirection if necessary
    const blockedText = "Example Domain";
    const redirectURL = "https://example.com";
    if (document.body.innerText.includes(blockedText)) {
        redirect(redirectURL);
    }
});
