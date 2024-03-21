const textEn = {
  title: "HBEC Countdown"
};

const textTr = {
  title: "HBEC Geri Sayım"
};

function applyLocale() {
  document.querySelectorAll("[data-key]").forEach(elem => {
    let key = elem.getAttribute("data-key");
    let locale = new URLSearchParams(window.location.search).get("lang");

    let text;
    if (locale === "en") {
      text = textEn;
    } else {
      text = textTr;
    }

    if (text[key]) {
      elem.innerText = text[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyLocale);
