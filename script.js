$(document).ready(function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const rsvpid = urlParams.get('rsvpid');
    const eventName = urlParams.get('event_name');

    // Log the parameters to the console
    console.log('RSVP ID:', rsvpid);
    console.log('Event Name:', eventName);

    // Make messages
    let OKtitle = `Confermata presenza a ${eventName}!`;
    const OKdescription = `Grazie per aver confermato la tua presenza ${eventName}. A breve riceverai una email con il tuo biglietto!`;
     
    // Webhook Url
    const webhookUrl = `https://hooks.airtable.com/workflows/v1/genericWebhook/appbMdAyfEpFmIzZp/wfl7wKNg6m4aXuC4L/wtrR4lb8ovl1btBWY`;
    
    const data = {
        rsvpid: rsvpid
      };
      
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            console.log("Webhook request sent successfully");
            document.getElementById('event-name').textContent = OKtitle;
            document.getElementById('event-description').textContent = OKdescription;
          } else {
            console.error("Failed to send webhook request");
          }
        })
        .catch(error => {
          console.error("Error sending webhook request:", error);
        });

});
