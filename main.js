canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.beginpath();
ctx.strokstyle = "grey";
ctx.rect()= 1;
ctx.(x 430, y 200, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.beginpath();
ctx.strokestyle = "blue";
ctx.linewidth= 5;
ctx.arc(x 250, y 210, r 40, startAngle 0, endAngle 2 * Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx.beginpath();
ctx.strokestyle = "black";
ctx.linewidth= 5;
ctx.arc(x 350, y 210, r 40, startAngle 0, endAngle 2 * Math.PI);
ctx.stroke();
// Similarly, create a red circle with position 210 and 40
ctx.beginpath();
ctx.strokestyle = "red";
ctx.linewidth= 5;
ctx.arc(x 210, y 40, r 40, startAngle 0, endAngle 2 * Math.PI);
ctx.stroke();
// Similarly, create an orange circle with position 300 and 250
ctx.beginpath();
ctx.strokestyle = "orange";
ctx.linewidth= 5;
ctx.arc(x 300, y 250, r 40, startAngle 0, endAngle 2 * Math.PI);
ctx.stroke();
// Similarly, create a green circle with position 400 and 250
ctx.beginpath();
ctx.strokestyle = "green";
ctx.linewidth= 5;
ctx.arc(x 400, y 250, r 40, startAngle 0, endAngle 2 * Math.PI);
ctx.stroke();