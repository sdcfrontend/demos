let lang = document.documentElement.lang;
lang.match("en") && (lang = "en-gb");

const rel = new Intl.RelativeTimeFormat(lang, {
    style: 'narrow'
});

function timeStamp(date) {
    return date.toLocaleTimeString([lang], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function timeAgo(date, rel) {
    let ago = '';

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const elapsed = new Date() - date;

    if (elapsed < msPerMinute) {
        ago = rel.format(Math.round(elapsed / 1000) * -1, 'seconds')
    } else if (elapsed < msPerHour) {
        ago = rel.format(Math.round(elapsed / msPerMinute) * -1, 'minutes')
    } else if (elapsed < msPerDay) {
        ago = rel.format(Math.round(elapsed / msPerHour) * -1, 'hours')
    } else {
        ago = date.toLocaleDateString(lang, {
            month: 'short',
            day: 'numeric'
        });
    }

    return ago;
}

const d = new Date('4 August 2021 10:46');
document.body.innerHTML = `<div class="date">${timeAgo(d, rel)} <br> ${timeStamp(d)}</div>`;
setInterval(() => {
    `<div class="date">${timeAgo(d)} <br> ${timeStamp(d, rel)}</div>`;
}, 60000);