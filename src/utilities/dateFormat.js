const dateFormat = (timeStamp) => {
  const dayMonthYear = timeStamp.match(/^\d\d\d\d-\d\d-\d\d/);
  const time = timeStamp.slice(-13, -8);

  return {
    dateTime: `${dayMonthYear} ${time}`,
    date: `${dayMonthYear}`,
    time: `${time}`
  };
};

export default dateFormat;
