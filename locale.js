const textEn = {
  title: "HBEC Countdown",
  headerTitle: "Countdown",
  langSwitcher: "Türkçe",
  durationPickerHours: "Hours",
  durationPickerMinutes: "Minutes",
  durationPickerSeconds: "Seconds",
  durationPickerStart: "Start",
};

const textTr = {
  title: "HBEC Geri Sayım",
  headerTitle: "Geri Sayım",
  langSwitcher: "English",
  durationPickerHours: "Saat",
  durationPickerMinutes: "Dakika",
  durationPickerSeconds: "Saniye",
  durationPickerStart: "Başla",
};

const locale = new URLSearchParams(window.location.search).get("lang") || "tr";
const text = locale === "en" ? textEn : textTr;

document.documentElement.lang = locale;

const langSwitcher = document.getElementById("langSwitcher");
langSwitcher.href = "?lang=" + (locale === "en" ? "tr" : "en");

for (const elem of document.querySelectorAll("[data-key]")) {
  const key = elem.getAttribute("data-key");

  elem.innerText = text[key];
}
