const computeYearlyOnTheMonthday = (data, rruleObj) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    return data.repeat.yearly.onThe.day;
  }

  const weekdays = rruleObj.byweekday.map(weekday => weekday.weekday).join(',');

  switch (weekdays) {
    case '0': {
      return 'Segunda';
    }
    case '1': {
      return 'Terça';
    }
    case '2': {
      return 'Quarta';
    }
    case '3': {
      return 'Quinta';
    }
    case '4': {
      return 'Sexta';
    }
    case '5': {
      return 'Sábado';
    }
    case '6': {
      return 'Domingo';
    }
    case '0,1,2,3,4,5,6': {
      return 'Dia';
    }
    case '0,1,2,3,4': {
      return 'Dia útil';
    }
    case '5,6': {
      return 'Weekend day';
    }
    default: {
      return data.repeat.yearly.onThe.day;
    }
  }
};

export default computeYearlyOnTheMonthday;
