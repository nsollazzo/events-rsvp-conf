$(document).ready(function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const rsvpid = urlParams.get('rsvpid');
    const eventName = urlParams.get('event_name');

    // Log the parameters to the console
    console.log('RSVP ID:', rsvpid);
    console.log('Event Name:', eventName);

    // Make message
    let title = `Confermata presenza a ${eventName}!`;
    const description = `A breve riceverai una email con il tuo biglietto.`;
     
    
    // Make API call with parameters
    // const apiUrl = `https://api.example.com/events/${rsvpid}`;
    
    // $.getJSON(apiUrl, function(data) {
    //     // Handle the API response here
    //     // For simplicity, let's assume the API response contains the event details
    //     const eventDetails = data.eventDetails;
        
    //     // Update HTML elements with event details
    //     document.getElementById('event-name').textContent = eventDetails.name;
    //     document.getElementById('event-description').textContent = eventDetails.description;
    // });
    document.getElementById('event-name').textContent = title;
    document.getElementById('event-description').textContent = description;
});
