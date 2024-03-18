class TeamMember {
  constructor(name, daysOff, hoursForCeremonies, minHoursPerDay, maxHoursPerDay) {
    this.name = name;
    this.daysOff = daysOff;
    this.hoursForCeremonies = hoursForCeremonies;
    this.minHoursPerDay = minHoursPerDay;
    this.maxHoursPerDay = maxHoursPerDay;
  }

  calculateEffortHours(numSprintDays) {
    if (numSprintDays <= 0) {
      return 0; // Return 0 if sprint days is zero or negative
    }

    const totalWorkDays = numSprintDays - this.daysOff;
    if (totalWorkDays < 0) {
      throw new Error("Total work days cannot be negative.");
    }

    if (this.minHoursPerDay === 0 && this.maxHoursPerDay === 0) {
      return 0; // Return 0 if both minHoursPerDay and maxHoursPerDay are zero
    }

    const hoursPerDayAverage = (this.minHoursPerDay + this.maxHoursPerDay) / 2;
    return (hoursPerDayAverage - this.hoursForCeremonies) * totalWorkDays;
  }
}

module.exports = TeamMember;
