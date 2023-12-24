// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Vector2, Vector3} from "three";

export function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
export function randomInt(min, max){
    return  Math.round(randomFloat(min, max));
}

export const degToRad = Math.PI/180;

export function clampVectorMagnitude(vector, desiredMagnitude) {
    // Calculate the current magnitude of the vector
    var currentMagnitude = vector.length();

    // Normalize the vector (make it a unit vector)
    vector.normalize();

    // Clamp the magnitude by multiplying with the desired magnitude
    vector.multiplyScalar(Math.min(desiredMagnitude, currentMagnitude));

    // Return the clamped vector
    return vector;
}

export function getRandomNormalizedVector3() {
    // Generate random values for x, y, and z components
    const x = Math.random() * 2 - 1; // Random value between -1 and 1
    const y = Math.random() * 2 - 1; // Random value between -1 and 1
    const z = Math.random() * 2 - 1; // Random value between -1 and 1

    // Create a Three.js vector
    const randomVector = new Vector3(x, y, z);

    // Normalize the vector
    randomVector.normalize();

    return randomVector;
}


export function getRandomNormalizedVector2() {
    // Generate random values for x, y, and z components
    const x = Math.random() * 2 - 1; // Random value between -1 and 1
    const y = Math.random() * 2 - 1; // Random value between -1 and 1

    // Create a Three.js vector
    const randomVector = new Vector2(x, y);

    // Normalize the vector
    randomVector.normalize();

    return randomVector;
}
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