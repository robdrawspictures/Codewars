/* The brief is to return a given amount of seconds in a palatable format,
i.e. 62 seconds should return '1 minute and 2 seconds', 3669 seconds should
return '1 hour, 1 minute and 9 seconds' etc. */

function formatDurationNew(seconds) {
	if (seconds < 0) {
		return null;
	} else if (seconds === 0) {
		return "now";
	} else {
        let yrs = getYears(seconds);
        let days = getDays(seconds - (yrs * 31536000))
		let hrs = getHrs(seconds - (yrs * 31536000 + days * 86400));
		let mins = getMins(seconds - (yrs * 31536000 + days * 86400 + hrs * 3600));
		let secs = getSecs(seconds);

        return formatString([yrs, days, hrs, mins, secs]);
    }

}

function getYears(seconds){
    return seconds < 31536000 ? 0 : Math.floor(seconds / 31536000);
}

function getDays(seconds){
    return seconds < 86400 ? 0 : Math.floor(seconds/86400)
}

function getHrs(seconds){
    return seconds < 3600 ? 0 : Math.floor(seconds/3600);
}

function getMins(seconds){
    return seconds < 60 ? 0 : Math.floor(seconds / 60);
}

function getSecs(seconds){
    return seconds % 60;
}

function formatString(time = [years, days, hours, minutes, seconds]){
    let strArr = [];
    for(let i = 0; i < time.length; i++){
        if(time[i] > 0 && i === 0){strArr.push(`${time[i].toString()} ${time[i] > 1 ? 'years' : 'year'}`)}
        else if(time[i] > 0 && i === 1){strArr.push(`${time[i].toString()} ${time[i] > 1 ? "days" : "day"}`);}
        else if(time[i] > 0 && i === 2){strArr.push(`${time[i].toString()} ${time[i] > 1 ? "hours" : "hour"}`);}
        else if(time[i] > 0 && i === 3){strArr.push(`${time[i].toString()} ${time[i] > 1 ? "minutes" : "minute"}`);}
        else if(time[i] > 0 && i === 4){strArr.push(`${time[i].toString()} ${time[i] > 1 ? "seconds" : "second"}`);};
    }

    for(let i = 0; i < strArr.length; i++){
    if(strArr.length === 1){
        return strArr[0]
    }
    else if(strArr[i] === strArr[strArr.length - 2]){
        strArr[i] = strArr[i];
    } else {
            i < strArr.length - 1 ? strArr[i] = strArr[i] + ',' : strArr[i] = 'and ' + strArr[i]
        }
    }   

    return strArr.join(' ');
}


// Tests
// console.log (3599 % 60);
// console.log (3478 / 60);
// console.log (3478 % 60);
// console.log (58 * 60);
// console.log("2644");
// console.log(Math.floor(2644 / 60));
// console.log(2644 % 60);
// console.log("1644");
// console.log(Math.floor(1644 / 60));
// console.log(1644 % 60);
// console.log("1776");
// console.log(Math.floor(1776 / 60));
// console.log(1776 % 60);
// console.log("15722");
// console.log(Math.floor(15722 / 3600));
// console.log(Math.floor(((15722 - (Math.floor(15722 / 3600) * 3600))) / 60));
// console.log(15722 % 60);
// console.log("6969");
// console.log(Math.floor(6969 / 3600));
// console.log(Math.floor(((6969 - (Math.floor(6969 / 3600) * 3600))) / 60));
// console.log(6969 % 60);

// console.log(formatDurationNew(3599)) // Should return '59 minutes and 59 seconds' PASS
// console.log(formatDurationNew(3478)) // Should return '57 minutes and 58 seconds' PASS
// console.log(formatDurationNew(2644)) // Should return '44 minutes and 4 seconds' PASS
// console.log(formatDurationNew(1644)) // Should return '27 minutes and 24 seconds' PASS
// console.log(formatDurationNew(1776)) // Should return '29 minutes and 36 seconds' PASS
// console.log(formatDurationNew(1776)) // Should return '29 minutes and 36 seconds' PASS
// console.log(formatDurationNew(183)) // Should return '3 minutes and 3 seconds' PASS
// console.log(formatDurationNew(59)) // Should return '59 seconds' PASS
console.log(formatDurationNew(60)) // Should return '1 minute' PASS
// console.log(formatDurationNew(15721)) // Should return '4 hours, 22 minutes and 1 second' PASS
// console.log(formatDurationNew(15720)) // Should return '4 hours and 22 minutes' PASS
// console.log(formatDurationNew(6969)) // Should return '1 hours, 56 minutes and 9 seconds' PASS
console.log(formatDurationNew(1)) // Should return '1 second' FAIL returns '1 seconds'
console.log(formatDurationNew(61)) // Should return '1 minute and 1 second' PASS what the fudge
console.log(formatDurationNew(31626061)) // Should return '1 year, 1 day, 1 hour, 1 minute and 1 second' PASS
console.log(formatDurationNew(1626061)) // Should return '18 days, 19 hours, 41 minutes and 1 second' PASS



/* Napkin math:

15722 / 3600 = 4 (rounded down)
4 * 3600 = 14400
15722 - 14400 = 1322
1322 / 60 = 22 (rounded down)
22 * 60 = 1320
1322 - 1320 = 2 

6969 / 3600 = 1 (rounded down)
6969 - 3600 = 3369
3369 / 60 = 56 (rounded down)
56 * 60 = 3360
3369 - 3360 = 9

*/

/* Even the best solutions are still pretty chunky (albeit not 60 cocking lines) so
I don't feel quite as bad. Mine was still a very messy solution, though. */

function formatDurationBetter(seconds) {
	if (!seconds) return "now";
	var strout = "";
	var s = seconds % 60;
	seconds = (seconds - s) / 60;
	var m = seconds % 60;
	seconds = (seconds - m) / 60;
	var h = seconds % 24;
	seconds = (seconds - h) / 24;
	var d = seconds % 365;
	seconds = (seconds - d) / 365;
	var y = seconds;

	var english = [];
	if (y) english.push(y + " year" + (y > 1 ? "s" : ""));
	if (d) english.push(d + " day" + (d > 1 ? "s" : ""));
	if (h) english.push(h + " hour" + (h > 1 ? "s" : ""));
	if (m) english.push(m + " minute" + (m > 1 ? "s" : ""));
	if (s) english.push(s + " second" + (s > 1 ? "s" : ""));

	return english.join(", ").replace(/,([^,]*)$/, " and$1");
}

function formatDurationBest(seconds) {
	var time = {
			year: 31536000,
			day: 86400,
			hour: 3600,
			minute: 60,
			second: 1,
		},
		res = [];

	if (seconds === 0) return "now";

	for (var key in time) {
		if (seconds >= time[key]) {
			var val = Math.floor(seconds / time[key]);
			res.push((val += val > 1 ? " " + key + "s" : " " + key));
			seconds = seconds % time[key];
		}
	}

	return res.length > 1
		? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
		: res[0];
}