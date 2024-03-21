const textEn = {
  title: "HBEC Countdown",
  headerTitle: "Countdown",
  langSwitcher: "Türkçe",
};

const textTr = {
  title: "HBEC Geri Sayım",
  headerTitle: "Geri Sayım",
  langSwitcher: "English",
};

function applyLocale() {
  let locale = new URLSearchParams(window.location.search).get("lang") || "tr";
  let text = locale === "en" ? textEn : textTr;

  document.documentElement.lang = locale;

  let langSwitcher = document.getElementById("langSwitcher");
  langSwitcher.href = "?lang=" + (locale === "en" ? "tr" : "en");

  document.querySelectorAll("[data-key]").forEach((elem) => {
    let key = elem.getAttribute("data-key");

    elem.innerText = text[key];
  });
}

document.addEventListener("DOMContentLoaded", applyLocale);
