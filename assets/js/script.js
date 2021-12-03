let clocks = document.querySelectorAll('.clock');

const convertHourstoMilliSeconds = (hours) => { return hours*3600000;}
const convertMinutestoMilliSeconds = (minutes) => { return minutes*60000;}

const getWorldDate = (timezone) => {
    let date           = new Date();
    let timeZoneDate   = date.getTime();
    let timeZoneOffset = convertMinutestoMilliSeconds(date.getTimezoneOffset());
    let hourUTC        = timeZoneDate + timeZoneOffset;
    let worldQuadrant  = hourUTC + convertHourstoMilliSeconds(timezone);
    let actualDate     = new Date(worldQuadrant);
    return actualDate;
}

const currentTime = () => {
    for ( i = 0; i < clocks.length; i++ ) {
        let clockItem  = clocks[i];
        let date       = clockItem.querySelector('.date');
        let time       = clockItem.querySelector('.time');
        let timezone   = clockItem.dataset.timezone;
        date.innerHTML = `${getWorldDate(timezone).getDate()}/${getWorldDate(timezone).getMonth()+1}/${getWorldDate(timezone).getFullYear()}`;
        time.innerHTML = `${getWorldDate(timezone).getHours()}:${getWorldDate(timezone).getMinutes()}:${getWorldDate(timezone).getSeconds()}`;
    }
    var t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();