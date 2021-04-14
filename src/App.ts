import "./index.scss";

const rootDom = document.getElementById("root");
const canvas:HTMLCanvasElement = document.createElement("canvas");

canvas.height = 500;
canvas.width = 500;
canvas.id = "canvas_map";

rootDom?.appendChild(canvas);