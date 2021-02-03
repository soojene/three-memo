const dayDate = document.querySelector(".dateJs"),
    currentTime = document.querySelector(".timeJs");

let currentDay = "";

function getDays (dayNumber){
    switch(dayNumber){
        case 0:
            currentDay = "일요일";
            break;
        case 1:
            currentDay = "월요일";
            break;
        case 2:
            currentDay = "화요일";
            break;
        case 3:
            currentDay = "수요일";
            break;
        case 4:
            currentDay = "목요일";
            break;
        case 5:
            currentDay = "금요일";
            break;
        case 6:
            currentDay = "토요일";
            break;
        default:
            currentDay = "😀";
            break;
    } 
}

function getTimes (){
    const clock = new Date();
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const years = clock.getUTCFullYear();
    const months = clock.getUTCMonth() + 1;
    const dates = clock.getUTCDate();
    const days = clock.getUTCDay();
    getDays(days);
    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    dayDate.innerText = `${years}년 ${months}월 ${dates}일 ${currentDay}`;
}

setInterval(getTimes,1000);
