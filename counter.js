document.addEventListener('DOMContentLoaded', function () {
    // Check if the counter is already in local storage
    if (localStorage.getItem('visitorCount')) {
        updateCounter(localStorage.getItem('visitorCount'));
    } else {
        // If not, initialize the counter in local storage
        localStorage.setItem('visitorCount', 0);
    }

    // Update the counter on the webpage
    function updateCounter(count) {
        document.getElementById('visitorCounter').textContent = count;
    }

    // Increment the counter and update the webpage
    function incrementCounter() {
        let count = parseInt(localStorage.getItem('visitorCount')) + 1;
        localStorage.setItem('visitorCount', count);
        updateCounter(count);
    }

    // Call incrementCounter when the page is loaded
    incrementCounter();
});
