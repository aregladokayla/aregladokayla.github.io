//Positions hovered/popped bubbles
function bubblePopped (event) {
    let hoverObject = event.target;
    if (event.propertyName == 'opacity') {
        hoverObject.style.top = `${Math.round(Math.random() * 100)}%` ;
        hoverObject.style.left = `${Math.round(Math.random() * 95)}%` ;

        hoverObject.classList.remove('pop');
        hoverObject.removeEventListener('transitionend', bubblePopped);
    }
}

//Starting position for bubbles
function popBubble (event) {
    let hoverObject = event.target;
    if (hoverObject.classList.contains('bubble')) {
        hoverObject.classList.add('pop');

        hoverObject.addEventListener('transitionend', bubblePopped);
    }
}

function popBubbles(event) {
    let bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(function (bubble) {
        bubble.classList.add('pop');
        bubble.addEventListener('transitionend', bubblePopped);
    });
}

let bubbleWrapper = document.querySelector('.bubble-wrapper');
let glass = document.querySelector('#glass');

//bubbleWrapper.addEventListener('mouseover', popBubbles);
glass.addEventListener('click', popBubbles);

//Creates many bubbles
for (let i = 0; i < 80; i++) {
    //create divs in DOM
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.top = `${Math.round(Math.random() * 100)}%`;
    bubble.style.left = `${Math.round(Math.random() * 95)}%`;

    //add divs to container
    bubbleWrapper.append(bubble);
}
