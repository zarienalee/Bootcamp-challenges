function convertTime(val) {
  if (val > 60) {
    var hour = Math.floor(val / 60);
    var minute = val - hour * 60;
    console.log(hour + " hours,", minute + " minutes");
  } else {
    console.log(val + " minutes");
  }
}
convertTime(71);
convertTime(133);
