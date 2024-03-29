const xmltoJsonData = require("../util/xmltoJSONHelper");
const {
  getName,
  isProperValue,
  properCodes,
} = require("../util/currencyHelper");
const xmlUrl = "https://www.tcmb.gov.tr/kurlar/today.xml";

const currencies = async (req, res, next) => {
  try {
    const jsonData = await xmltoJsonData(xmlUrl);
    const jsonArray = JSON.parse(jsonData);
    const result = [];
    for (let index = 0; index < jsonArray.Tarih_Date.Currency.length; index++) {
      currencySymbol = jsonArray.Tarih_Date.Currency[index].$.Kod;
      if (currencySymbol === "XDR") {
        continue;
      }
      currencyName = getName(currencySymbol);
      result.push({ code: currencySymbol, name: currencyName });
    }
    // For Loop ile isimleri verilecek
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const prices = async (req, res, next) => {
  try {
    const jsonData = await xmltoJsonData(xmlUrl);
    const jsonArray = JSON.parse(jsonData);
    const result = {
      data: "TCMB Latest Currency Prices",
      Date: `${jsonArray.Tarih_Date.$.Tarih}`,
      base: "TRY",
      rates: [],
    };
    for (let index = 0; index < jsonArray.Tarih_Date.Currency.length; index++) {
      if (jsonArray.Tarih_Date.Currency[index].$.Kod === "XDR") {
        continue;
      }
      result.rates.push({
        code: jsonArray.Tarih_Date.Currency[index].$.Kod,
        buyPrice: jsonArray.Tarih_Date.Currency[index].ForexBuying[0],
        sellPrice: jsonArray.Tarih_Date.Currency[index].ForexSelling[0],
      });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const price = async (req, res, next) => {
  const result = {};
  const error = {};
  const { code } = req.params;
  const codeUpper = code.toUpperCase();

  if (!isProperValue(codeUpper, properCodes)) {
    error.message = "Please Enter a Valid Currency Code";
    next(error);
  } else {
    try {
      const jsonData = await xmltoJsonData(xmlUrl);
      console.log("here");
      const jsonArray = JSON.parse(jsonData);
      for (
        let index = 0;
        index < jsonArray.Tarih_Date.Currency.length;
        index++
      ) {
        if (jsonArray.Tarih_Date.Currency[index].$.Kod === codeUpper) {
          result.base = "TRY";
          result.to = codeUpper;
          result.buyPrice =
            jsonArray.Tarih_Date.Currency[index].ForexBuying[0];
          result.sellPrice =
            jsonArray.Tarih_Date.Currency[index].ForexSelling[0];
        }
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
};
module.exports = {
  currencies,
  prices,
  price,
};
