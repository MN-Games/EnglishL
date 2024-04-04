// Function to fetch the content of a URL and count occurrences of a specified text
async function countTextOccurrences(url, searchText) {
    try {
        // Fetch the content of the URL
        const response = await fetch(url);
        const text = await response.text();
        
        // Count occurrences of the specified text
        const occurrences = (text.match(new RegExp(searchText, 'gi')) || []).length;
        
        return occurrences;
    } catch (error) {
        console.error('Error fetching URL:', error);
        return -1; // Return -1 in case of error
    }
}

// Function to display the count of occurrences on the webpage
function displayOccurrencesCount(count, searchText) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Found ${count} occurrences of "${searchText}"`;
}

// Form submission event listener
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const url = document.getElementById('urlInput').value;
    const searchText = document.getElementById('textInput').value;

    const count = await countTextOccurrences(url, searchText);
    if (count >= 0) {
        displayOccurrencesCount(count, searchText);
    } else {
        console.log('Failed to fetch URL or count occurrences.');
    }
});
