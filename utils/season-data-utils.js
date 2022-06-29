export const getDetailAverage = (objArray, detail) => {
  if (objArray.every((obj) => !obj[detail])) return '';
  return objArray.reduce((acc, obj) => acc + obj[detail], 0) / objArray.length;
};

export const getBingeDuration = (objArray, detail) => {
  if (objArray.every((obj) => !obj[detail])) return '';
  const minutesDuration = objArray.reduce((acc, obj) => acc + obj[detail], 0);
  const hoursDuration = (minutesDuration / 60).toFixed(1);
  const dayDuration = (hoursDuration / 24).toFixed(1);
  return [minutesDuration, hoursDuration, dayDuration];
};
