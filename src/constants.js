const canvasSize = [800,800];
const snakeStart = [[8,7],[8,8]];
const appleStart = [8,3];
const scale = 40;
const speed = 100;
const directions = {
    38: [0,-1],
    40: [0,1],
    37: [-1,0],
    39: [1,0]
};

export { canvasSize, snakeStart, appleStart, scale, speed, directions };