const fetch = require("node-fetch");
const xml = require("xml2js").parseString;

const xmltoJsonData = async (xmlUrl) => {
  let result = [];
  // Enter a XML URL
  const response = await fetch(xmlUrl);
  try {
    if (response.ok) {
      const text = await response.text();
      xml(text, (error, output) => {
        if (typeof output === "undefined") {
          throw new Error("400 Data Not Found");
        } else {

          result.push(JSON.stringify(output));
        }
      });
      return result;
    } else {
      throw new Error(`Fetch `+ response.status + ` `+response.statusText);
    }
    
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = xmltoJsonData;
