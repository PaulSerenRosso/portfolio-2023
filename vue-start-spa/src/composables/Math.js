// eslint-disable-next-line @typescript-eslint/no-unused-vars
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export const degToRad = Math.PI/180;

export function lerp(startValue, endValue, t) {
    return startValue + (endValue - startValue) * t
}