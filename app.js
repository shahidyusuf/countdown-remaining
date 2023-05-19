const endDate = "26 May 2023 12:00 PM";
document.getElementById("end-dates").innerText = endDate;
const inputs = document.getElementsByTagName('input');

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    // console.log(diff);
    inputs[0].value = (Math.floor(diff / 3600 / 24));//calculate to Days..
    // console.log(Math.floor(diff/3600/24));
    inputs[1].value = (Math.floor(diff / 3600) % 24);//Calculate to Hours..
    // console.log(Math.floor(diff/60)%60);
    inputs[2].value = (Math.floor(diff / 60) % 60);//Calculate to Minutes..
    // console.log(Math.floor(diff)%60);
    inputs[3].value = (Math.floor(diff) % 60);//Calculate to Seconds..
}
clock();//call

//Aero function..
setInterval(
    () => {
        clock()
    },
    1000//Mili Seconds..
)