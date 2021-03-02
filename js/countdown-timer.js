class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.daysRef = document.querySelector('[data-value="days"]');
    this.hoursRef = document.querySelector('[data-value="hours"]');
    this.minsRef = document.querySelector('[data-value="mins"]');
    this.secsRef = document.querySelector('[data-value="secs"]');
  }

  getTimerComponents() {
    const padDay = (value) => String(value).padStart(3, "0");
    const padTime = (value) => String(value).padStart(2, "0");
    const delta = this.targetDate - Date.now();
    const days = padDay(Math.floor(delta / (1000 * 60 * 60 * 24)));
    const hours = padTime(
      Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = padTime(Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = padTime(Math.floor((delta % (1000 * 60)) / 1000));
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }

  initTimer() {
    this.getTimerComponents();
    setInterval(this.getTimerComponents.bind(this), 1000);
  }
}

export default CountdownTimer;
