const content = document.getElementById("content");
const durationPickerStart = document.getElementById("durationPickerStart");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const durationPickerUnits = [hours, minutes, seconds];

let duration;
let countdownInterval;

function paddedDurationUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

function updateCounter() {
  duration -= 1;

  if (duration === -1) {
    content.classList.add("overdue");
    document
      .getElementById("welcomeMessage")
      .setAttribute("data-key", "overdueMessage");
  }

  let shownDuration = Math.abs(duration);
  hours.value = paddedDurationUnit(Math.floor(shownDuration / 3600));
  minutes.value = paddedDurationUnit(Math.floor((shownDuration % 3600) / 60));
  seconds.value = paddedDurationUnit(shownDuration % 60);
}

for (const unitElem of durationPickerUnits) {
  unitElem.addEventListener("input", () => {
    const value = parseInt(unitElem.value, 10);
    unitElem.value = String(value <= 0 ? 1 : value > 59 ? 59 : value);

    durationPickerStart.disabled = [hours, minutes, seconds].every((elem) => {
      return elem.value === "";
    });
  });
}

durationPickerStart.addEventListener("click", () => {
  const dataKey = durationPickerStart.getAttribute("data-key");
  const pauseKey = "durationPickerPause";
  const continueKey = "durationPickerContinue";

  if (dataKey === pauseKey) {
    clearInterval(countdownInterval);

    if (duration < 0) {
      content.classList.remove("overdue");
      durationPickerStart.disabled = true;

      return;
    }

    durationPickerStart.setAttribute("data-key", continueKey);
    return;
  }

  if (duration === undefined) {
    duration =
      parseInt(hours.value * 3600 + minutes.value * 60 + seconds.value) + 1; // add 1 to wait 1 second to decrement after start
  }

  for (let elem of durationPickerUnits) {
    elem.disabled = true;
  }

  countdownInterval = setInterval(() => {
    updateCounter();
  }, 1000);

  updateCounter();

  durationPickerStart.setAttribute("data-key", pauseKey);
});
