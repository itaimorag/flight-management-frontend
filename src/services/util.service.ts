

export const utilService = {
    makeId,
    timeStampConverter,
    generateFlightNumber
}



function makeId(length = 5): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function timeStampConverter(timestamp: number) {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const date = new Date(timestamp)
    const day = date.getDate()
    const month = months[date.getMonth()]
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const formattedHours = hours < 10 ? `0${hours}` : hours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return (`${day} ${month} at ${formattedHours}:${formattedMinutes}`)
}

const fligntNumberSet = new Set<string>();
 function generateFlightNumber(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  result += chars.charAt(Math.floor(Math.random() * chars.length)) + chars.charAt(Math.floor(Math.random() * chars.length));
  for (let i=0; i<4; i++) {
    result += Math.floor(Math.random() * 10);
  }
  if (fligntNumberSet.has(result)) {
    return generateFlightNumber();
  } else {
    fligntNumberSet.add(result);
    return result;
  }
}

