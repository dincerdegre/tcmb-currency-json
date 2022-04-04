const properCodes = [
    "USD",
    "AUD",
    "DKK",
    "EUR",
    "GBP",
    "CHF",
    "SEK",
    "CAD",
    "KWD",
    "NOK",
    "SAR",
    "JPY",
    "BGN",
    "RON",
    "RUB",
    "IRR",
    "CNY",
    "PKR",
    "QAR",
    "KRW",
    "AZN",
    "AED",
  ];

const getName = (symbol) => {
  switch (symbol) {
    case "USD":
      return "Amerikan Doları";
    case "EUR":
      return "Euro";
    case "GBP":
      return "İngiliz Sterlini";
    case "CHF":
      return "İsviçre Frangı";
    case "CAD":
      return "Kanada Doları";
    case "RUB":
      return "Rus Rublesi";
    case "AED":
      return "B.A.E. Dirhemi";
    case "AUD":
      return "Avustralya Doları";
    case "DKK":
      return "Danimarka Kronu";
    case "SEK":
      return "İsveç Kronu";
    case "NOK":
      return "Norveç Kronu";
    case "JPY":
      return "100 Japon Yeni";
    case "KWD":
      return "Kuveyt Dinarı";
    case "IRR":
      return "İran Riyali";
    case "RON":
      return "Romanya Leyi";
    case "CNY":
      return "Çin Yuanı";
    case "AZN":
      return "Azerbaycan Manatı";
    case "KRW":
      return "Güney Kore Wonu";
    case "PKR":
      return "Pakistan Rupisi";
    case "QAR":
      return "Katar Riyali";
    case "SAR":
      return "Suudi Arabistan Riyali";
    case "BGN":
      return "Bulgar Levası";
    default:
      return "Nan";
  }
};
const isProperValue = (value, properArgs) => {
  if (typeof value != "undefined") {
    let properBoolean = false;
    properArgs.forEach((element) => {
      if (element == value) {
        properBoolean = true;
      }
    });
    return properBoolean;
  }
};

module.exports = {
  getName,
  isProperValue,
  properCodes
};
