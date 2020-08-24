function convertTime(val) {
  var hour = Math.floor(val / 60);
  var minute = val - hour * 60;
  if (hour == 1) {
    console.log(hour + " hour,", minute + " minutes");
  }
  if (minute == 1) {
    console.log(hour + " hours, ", minute + " minute");
  }
  if (hour > 1) {
    console.log(hour + " hours,", minute + " minutes");
    if (minute > 1) {
      console.log(hour + " hours, ", minute + " minutes");
    }
  } else {
    console.log(val + " minutes");
  }
}
convertTime(71);
convertTime(133);
convertTime(30);
