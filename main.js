// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        if(data.length === 0) {
            throw new Error('No tickets found');
        }
        displayTickets(data);
    } catch (error) {
        console.error('Error fetching data', error);
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = error.message;
    }
};