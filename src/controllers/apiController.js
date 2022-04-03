const xmltoJsonData = require("../util/xmltoJSONHelper");
const xmlUrl = "https://www.tcmb.gov.tr/kurlar/today.xml";

const currencies = async (req, res, next) => {
  try {
    const jsonData = await xmltoJsonData(xmlUrl);
    console.log(jsonData);
    res.status(200).json({ message: "Welcome to Tools API" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  currencies,
};
