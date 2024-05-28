function registerRunner() {
    // Generate random race number
    const raceNumber = Math.floor(Math.random() * 1000);
  
    // Boolean to indicate early registration
    const registeredEarly = Math.random() < 0.5; // 50% chance of being true
  
    // Random age between 18 and 65
    const age = Math.floor(Math.random() * (65 - 18 + 1)) + 18;
  
    let resultMessage = '';
  
    if (age > 18 && registeredEarly) {
      resultMessage = `Your race number is ${raceNumber}. You will race at 9:30 am.`;
    } else if (age > 18 && !registeredEarly) {
      resultMessage = `Your race number is ${raceNumber}. You will race at 11:00 am.`;
    } else if (age === 18) {
      resultMessage = `Your race number is ${raceNumber}. Please see the registration desk.`;
    } else {
      resultMessage = `Your race number is ${raceNumber}. You will race at 12:30 pm.`;
    }
  
    document.getElementById('result').innerHTML = `<p>${resultMessage}</p>`;
  }
  