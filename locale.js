const textEn = {
  title: "HBEC Countdown",
  headerTitle: "Countdown",
  langSwitcher: "Türkçe",
  welcomeMessage: "Welcome to HBEC. Good luck!",
  overdueMessage: "Your time is up! Showing overdue duration.",
  durationPickerHours: "Hours",
  durationPickerMinutes: "Minutes",
  durationPickerSeconds: "Seconds",
  durationPickerStart: "Start",
  durationPickerPause: "Pause",
  durationPickerContinue: "Continue",
};

const textTr = {
  title: "HBEC Geri Sayım",
  headerTitle: "Geri Sayım",
  langSwitcher: "English",
  welcomeMessage: "HBEC'e hoşgeldiniz. İyi şanslar!",
  overdueMessage: "Süreniz doldu! Geçirdiğiniz süre gösteriliyor.",
  durationPickerHours: "Saat",
  durationPickerMinutes: "Dakika",
  durationPickerSeconds: "Saniye",
  durationPickerStart: "Başla",
  durationPickerPause: "Durdur",
  durationPickerContinue: "Devam Et",
};

function setInnerText(elem) {
  const key = elem.getAttribute("data-key");
  elem.innerText = text[key];
}

const locale = new URLSearchParams(window.location.search).get("lang") || "tr";
const text = locale === "en" ? textEn : textTr;

document.documentElement.lang = locale;

const langSwitcher = document.getElementById("langSwitcher");
langSwitcher.href = "?lang=" + (locale === "en" ? "tr" : "en");

for (const elem of document.querySelectorAll("[data-key]")) {
  const observer = new MutationObserver((mutations) => {
    if (
      mutations.find((mutation) => mutation.attributeName === "data-key") ===
      undefined
    ) {
      return;
    }

    setInnerText(elem);
  });

  observer.observe(elem, { attributes: true });

  setInnerText(elem);
}
