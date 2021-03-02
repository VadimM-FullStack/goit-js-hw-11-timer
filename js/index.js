import CountdownTimer from "./countdown-timer.js";

const timerOne = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("December 31, 2021"),
});

timerOne.initTimer();
