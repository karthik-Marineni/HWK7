const TeamMember = require('./teamMember');

test('calculateEffortHours() should return correct effort hours for different sprint durations', () => {
  // Test for a shorter sprint duration
  let teamMember = new TeamMember('Alice', 2, 1, 4, 6);
  let result = teamMember.calculateEffortHours(5);
  let expected = (5 - 1) * 3; // Assuming average of minHoursPerDay and maxHoursPerDay is 5
  expect(result).toBe(expected);

  // Test for a longer sprint duration
  teamMember = new TeamMember('Bob', 2, 1, 4, 6);
  result = teamMember.calculateEffortHours(15);
  expected = (5 - 1) * 13; // Assuming average of minHoursPerDay and maxHoursPerDay is 5
  expect(result).toBe(expected);
});

test('calculateEffortHours() should return 0 for zero sprint days', () => {
  const teamMember = new TeamMember('Carol', 2, 1, 4, 6);
  const result = teamMember.calculateEffortHours(0);
  expect(result).toBe(0);
});

test('calculateEffortHours() should return 0 for zero minHoursPerDay and maxHoursPerDay', () => {
  const teamMember = new TeamMember('David', 2, 1, 0, 0);
  const result = teamMember.calculateEffortHours(10); 
  expect(result).toBe(0);
});

test('calculateEffortHours() should handle zero hours for ceremonies', () => {
  const teamMember = new TeamMember('Eve', 2, 0, 4, 6);
  const result = teamMember.calculateEffortHours(10);
  const expected = (5 - 0) * 8; 
  expect(result).toBe(expected);
});

test('calculateEffortHours() should handle negative sprint duration', () => {
  const teamMember = new TeamMember('Frank', 2, 1, 4, 6);
  const result = teamMember.calculateEffortHours(-5);
  expect(result).toBe(0); 
});


test('calculateEffortHours() should handle minHoursPerDay and maxHoursPerDay both equal to zero', () => {
  const teamMember = new TeamMember('Ivy', 2, 1, 0, 0);
  const result = teamMember.calculateEffortHours(10);
  expect(result).toBe(0); 
});
