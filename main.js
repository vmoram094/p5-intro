function preloaded()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(128, 0, 0);
    circle(30, 30, 50);
    circle(605, 30, 50);
    fill(0, 0, 128);
    rect(70, 10, 500, 50);
    rect(10, 60, 50, 350);
    fill(128, 0, 0);
    circle(605, 450, 50);
    fill(0, 0, 128);
    rect(70, 420, 500 , 50);
    fill(128, 0, 0);
    circle(30, 450, 50);
    fill(0, 0, 128);
    rect(580, 60, 50, 350);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}