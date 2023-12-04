Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

function format(date, haha) {
    const d = new Date(date);
    const lM = [
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
    ];
    const sM = lM.map((m) => m.slice(0, 3));
    const lD = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const sD = lD.map((d) => d.slice(0, 3));
    haha = haha.replace(/dd/g, ("0" + d.date()).slice(-2));
    haha = haha.replace(/d/g, d.date());
    haha = haha.replace(/HH/g, ("0" + d.hours()).slice(-2));
    haha = haha.replace(/H/g, d.hours());
    haha = haha.replace(/hh/g, ("0" + (d.hours() % 12 || 12)).slice(-2));
    haha = haha.replace(/h/g, d.hours() % 12 || 12);
    haha = haha.replace(/mm/g, ("0" + d.getMinutes()).slice(-2));
    haha = haha.replace(/m/g, d.getMinutes());
    haha = haha.replace(/ss/g, ("0" + d.getSeconds()).slice(-2));
    haha = haha.replace(/s/g, d.getSeconds());
    haha = haha.replace(/GGGG/g, d.year() < 0 ? "Before Christ" : "Anno Domini");
    haha = haha.replace(/G/g, d.year() < 0 ? "BC" : "AD");
    if (d.year() < 0) d.setFullYear(-d.year());
    haha = haha.replace(/yyyy/g, d.year().toString().padStart(4, "0"));
    haha = haha.replace(/y/g, d.year().toString().replace(/^0+/, ""));
    haha = haha.replace(/a/g, d.hours() < 12 ? "AM" : "PM");
    haha = haha.replace(
        /(?<!M)MM(?!M)/g,
        (d.month() + 1).toString().length < 10
            ? "0" + (d.month() + 1)
            : d.month() + 1
    );
    haha = haha.replace(/(?<!(M|P|A))M(?!M)/g, d.month() + 1);
    haha = haha.replace(/MMMM/g, lM[d.month()]);
    haha = haha.replace(/MMM/g, sM[d.month()].slice(0, 3));
    haha = haha.replace(/EEEE/g, lD[d.getDay()]);
    haha = haha.replace(/E/g, sD[d.getDay()].slice(0, 3));

    return f;
}
