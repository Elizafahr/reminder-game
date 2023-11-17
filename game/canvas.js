var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

class Reminder {
    constructor() {
        this.events = [];
        this.audio = new Audio('reminder.mp3');
    }

    addEvent(event, time) {
        this.events.push({
            event,
            time
        });
    }

    start() {
        this.events.forEach((event) => {
            const now = new Date();
            const reminderTime = new Date(event.time);

            if (now >= reminderTime) {
                this.remind(event.event);
            } else {
                setTimeout(() => {
                    this.remind(event.event);
                }, reminderTime - now);
            }
        });
    }

    remind(event) {
        alert(event);
        this.playSound();
    }

    playSound() {
        this.audio.play();
    }
}

const reminder = new Reminder();
let btnSetData = document.getElementById('btnSetData');

btnSetData.onclick = function () {
    let dealText = (document.getElementById('deal').value);
    let dealDate = (document.getElementById('dateToRemember').value);
    output(dealText, dealDate)
    alert('nj')
}
function output(a,b){
    reminder.addEvent(a,b);
}

reminder.start();