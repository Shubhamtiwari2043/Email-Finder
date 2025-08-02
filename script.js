document.getElementById('emailFinderForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const companyDomain = document.getElementById('companyDomain').value;

    // Replace this with your Hunter.io API key
    const apiKey = 'f86c211cc3f9ecfb67977956bd2ed39ccb38a695';
    const apiUrl = `https://api.hunter.io/v2/email-finder?domain=${companyDomain}.com&first_name=${firstname}&last_name=${lastname}&api_key=f86c211cc3f9ecfb67977956bd2ed39ccb38a695`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data && data.data.email) {
            const email = data.data.email;
            document.getElementById('result').innerHTML = `Email Address: <strong>${email}</strong>`;
        } else {
            document.getElementById('result').innerHTML = 'No email found for this person.';
        }
    } catch (error) {
        console.error('Error fetching email:', error);
        document.getElementById('result').innerHTML = 'Error retrieving email address. Please try again.';
    }
});
