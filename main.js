for (const elem of document.querySelectorAll(".duration-picker-unit input")) {
  elem.addEventListener("input", () => {
    const value = parseInt(elem.value, 10);
    elem.value = String(value < 0 ? 0 : value > 59 ? 59 : value);
  });
}
