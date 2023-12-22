const getSleepHours = (day) => {
  
    switch (day) {
    case 'monday':
    return 8;
    break;
  
    case 'tuesday':
    return 8;
    break;
  
    case 'wednesday':
    return 8;
    break;
  
    case 'thursday':
    return 8;
    break;
  
    case 'friday':
    return 8;
    break;
  
    case 'saturday':
    return 8;
    break;
  
    case 'sunday':
    return 8;
    break;
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      return 'You have gotten the perfect amount of sleep';
    } else if (actualSleepHours > idealSleepHours) {
      return 'You have gotten more sleep than needed by ' + (actualSleepHours - idealSleepHours);
    } else {
      return 'You need to get more sleep by ' + (idealSleepHours - actualSleepHours)
    };
  
  };
  
  console.log(calculateSleepDebt());
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  