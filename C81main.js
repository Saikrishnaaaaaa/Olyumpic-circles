var canvas= document.getElementById("mycanvas");
ctx=  canvas.getContext("2d");

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2 * Math.PI);

ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2 * Math.PI);

ctx.stroke();

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,200,40,0,2 * Math.PI);

ctx.stroke();

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250,250,40,0,2 * Math.PI);

ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350,250,40,0,2 * Math.PI);

ctx.stroke();



/*canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("circlecolor").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ", Y =" + mouse_y);
    circle(mouse_y,mouse_x);
} */

function circle(mouse_y,mouse_x)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40,0,2* Math.PI);
ctx.stroke();
}
