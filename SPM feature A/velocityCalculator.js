
function calculateVelocity(previousSprintPoints) {
    if (previousSprintPoints.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const totalPoints = previousSprintPoints.reduce((acc, pt) => acc + pt, 0);
    return totalPoints / previousSprintPoints.length;
}

module.exports = calculateVelocity;