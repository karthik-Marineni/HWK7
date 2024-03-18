// Import readline-sync only if it's available (not in a testing environment)
let readlineSync;
if (process.env.NODE_ENV !== 'test') {
  readlineSync = require('readline-sync');
}

const TeamMember = require('./teamMember');

function calculateEffortHoursCapacity() {
  const numSprintDays = parseInt(getInput("Enter Number of Sprint Days: "));
  const numTeamMembers = parseInt(getInput("Enter Number of Team Members: "));
  const teamMembers = [];

  for (let i = 0; i < numTeamMembers; i++) {
    const name = getInput(`Enter name of Team Member ${i + 1}: `);
    const daysOff = parseInt(getInput(`Enter number of days off for ${name}: `));
    const hoursForCeremonies = parseInt(getInput(`Enter number of hours for ceremonies per day for ${name}: `));
    const minHoursPerDay = parseInt(getInput(`Enter minimum number of hours available per day for sprint for ${name}: `));
    const maxHoursPerDay = parseInt(getInput(`Enter the maximum number of hours available per day for sprint for ${name}: `));

    const teamMember = new TeamMember(name, daysOff, hoursForCeremonies, minHoursPerDay, maxHoursPerDay);
    teamMembers.push(teamMember);
  }

  let totalEffortHoursForTeam = 0;
  teamMembers.forEach(member => {
    const effortHours = member.calculateEffortHours(numSprintDays);
    console.log(`${member.name}'s Available Effort-Hours:`, effortHours);
    totalEffortHoursForTeam += effortHours;
  });

  console.log("Total Available Effort-Hours for Team:", totalEffortHoursForTeam);
}

// Helper function to get input, mockable for testing
function getInput(prompt) {
  if (process.env.NODE_ENV === 'test') {
    // If running in a test environment, return a placeholder
    return '';
  } else {
    // If running in a non-test environment, use readline-sync
    return readlineSync.question(prompt);
  }
}

module.exports = calculateEffortHoursCapacity;

// Uncomment the line below if you want to run the function directly without testing
// calculateEffortHoursCapacity();
