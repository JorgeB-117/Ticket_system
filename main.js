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

// Task 3: Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const ticketsContainer = document.getElementById('tickets');
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket');
        ticketElement.innerHTML = `
            <h2>Ticket ID #${ticket.id}</h2>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>`;
        ticketsContainer.appendChild(ticketElement);
    });
};