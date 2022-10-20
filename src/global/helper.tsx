export const dateFormat = (current: number, previous: number) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' seconds ago';   
  } else if (elapsed < msPerHour) {
    let time = Math.round(elapsed/msPerMinute)

    return time == 1 ? 'a minute ago' : ' minutes ago';   
  } else if (elapsed < msPerDay) {
    let time = Math.round(elapsed/msPerHour)

    return time == 1 ? 'a hour ago' : time + ' hours ago';   
  } else if (elapsed < msPerMonth) {
    let time = Math.round(elapsed/msPerDay)
    return time == 1 ? 'a day ago' : time + ' days ago';   
  } else if (elapsed < msPerYear) {
    let time = Math.round(elapsed/msPerMonth)
    return time == 1 ? 'a month ago' : time + ' months ago';   
  } else {
    let time = Math.round(elapsed/msPerYear)
    return  time == 1 ? 'a year ago' : time + ' years ago';   
  }
}