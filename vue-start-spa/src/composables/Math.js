// eslint-disable-next-line @typescript-eslint/no-unused-vars
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export const degToRad = Math.PI/180;

export function lerp(startValue, endValue, t) {
    return startValue + (endValue - startValue) * t
}

export function remap(value, oldMin, oldMax, newMin, newMax) {
    // Check for division by zero to avoid errors
    if (oldMin === oldMax) {
        throw new Error("oldMin and oldMax must be different");
    }

    // Calculate the percentage of the old range that the value represents
    const percentage = (value - oldMin) / (oldMax - oldMin);

    // Map the percentage to the new range
    const newValue = newMin + percentage * (newMax - newMin);

    return newValue;
}