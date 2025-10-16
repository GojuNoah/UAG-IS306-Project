const calanderSection = document.getElementById('calanderSection');

const date = new Date();

// adding date to calander section
calanderSection.innerHTML = `<p id=currentDate>${date}</p>`;
