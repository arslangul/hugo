var day='friday';
function DayOfWeek(day, 4, 2016) {
    var a = Math.floor((14 - 4) / 12);
    var y = 2016 - a;
    var m = 4 + 12 * a - 2;
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
             Math.floor(y / 400) + Math.floor((31 * m) / 12))  % 7;
    return d;
}