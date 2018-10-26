
function makeCircle (circle) {
  return `
    <div class="mt-2 d-flex justify-content-center">
        <div style = "height:${circle.radius}px; width: ${circle.radius}px; border-radius:${circle.radius}px; background-color:${circle.color}"></div>
    </div>
    `
}

function renderCircles(circles) {
    return circles.map(makeCircle).join('')
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    // var html = ''
    // var i
    // for (i = 0; i < circles.length; i++) {
    //     html += `
    //         <div class="mt-2 d-flex justify-content-center">
    //             <div style = "height:${radius}px; width: ${circles[i].radius}px; border-radius:${circles[i].radius}px; background-color:${circles[i].color}"></div>
    //         </div>
    //         `
    // }
    // return html
}

function circles () {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}