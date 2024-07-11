const countDownDate = new Date("July 12, 2024 17:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 *60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The stoop sale has started!"
    }

}, 1000);

function initMap() {
    const carrollGarden = [40.6795, -73.9957];
    const map = L.map('map').setView(carrollGarden,15);
    L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(carrollGarden).addTo(map)
    .bindPopup('Carroll Gardens - Cornet of Court St and 2nd Ave')
    .openPopup();

}

function setReminder() {

    const eventDate = new Date(countDownDate);
    const startDate = eventDate.toISOString().replace(/-|:|\.\d\d\d/g,"");
    const endDate = new Date(eventDate.getTime() + 2*60*60*1000).toISOString().replace(/-|:|\.\d\d\d/g,"");

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Brooklyn Stoop Sale')}&dates=${startDate}/${endDate}&details=${encodeURIComponent('Join us for an amazing stoop sale filled with unique treasures and great vibes!')}&location=${encodeURIComponent('123 Brooklyn Street, Brooklyn, NY 11201')}`;
    window.open(url, '_blank');

}