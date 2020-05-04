let ny = new Date();
console.log(ny.toDateString());
console.log(ny.toTimeString())

let gmt = ny.getTime() + ny.getTimezoneOffset() * 60000;

let dubai = new Date(gmt + 4 * 60 * 60000);

console.log(dubai.toString());

let skyColors = {
    '4-38': {
        linearGradient: '0deg, #f5b94a, #e63636, #073066, #e63636, #f5b94a'
    }
}

function timePassing() {
    let ny = new Date();
    console.log(ny.toDateString());
    console.log(ny.toTimeString())

    let gmt = ny.getTime() + ny.getTimezoneOffset() * 60000;

    let dubai = new Date(gmt + 4 * 60 * 60000);

    let key = `${dubai.getHours()}-${dubai.getMinutes()}`;
    
    let color = skyColors[key];

    backgroundElement.style.backgroundImage = `linear-gradient(${color.top}, ${color.middle})`;

    if (dubai.getMinutes() % 5 == 0) {

    }
}

setInterval(timePassing, 60 * 1000);