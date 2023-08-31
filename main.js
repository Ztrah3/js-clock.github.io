// Selecting the second, minute and hour hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// Check if the elements exist
if (!secondHand || !minuteHand || !hourHand) {
    console.error('One or more clock hand elements are missing.');
} else {
    // Function to set the rotation of the hands based on current time
    function rotateClockHands() {
        // Getting the current time
        const now = new Date();


        // Calculating the rotation for the second hand
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


        // Calculating the rotation for the minute hand
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${minsDegrees}deg)`;


        // Calculating the rotation for the hour hand
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }


    // Setting the interval to update every second
    setInterval(rotateClockHands, 1000);


    // Initial call to set the time on page load
    rotateClockHands();
}
