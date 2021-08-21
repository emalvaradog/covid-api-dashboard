const fetch = require("node-fetch");
const API = "https://covid-api.mmediagroup.fr/v1/";

const continentList = async (url_api) => {
  try {
    let northAmerica = [];
    let southAmerica = [];
    let europe = [];
    let africa = [];
    let asia = [];
    let oceania = [];
    let total = 0;

    // North America
    await fetch(`${url_api}cases?continent=North America`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          northAmerica.push(dataList);
        }
        return northAmerica;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=North America`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }

        northAmerica.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });

        return northAmerica;
      })
      .catch((err) => console.error(err));

    // South America
    await fetch(`${url_api}cases?continent=South America`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
          };
          southAmerica.push(dataList);
        }
        return southAmerica;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=South America`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }
        southAmerica.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });
        return southAmerica;
      })
      .catch((err) => console.error(err));

    // Europe
    await fetch(`${url_api}cases?continent=Europe`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
          };
          europe.push(dataList);
        }
        return europe;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Europe`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }
        europe.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });
        return europe;
      })
      .catch((err) => console.error(err));

    // Africa
    await fetch(`${url_api}cases?continent=Africa`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
          };
          africa.push(dataList);
        }
        return africa;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Africa`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }
        africa.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });
        return africa;
      })
      .catch((err) => console.error(err));

    // Asia
    await fetch(`${url_api}cases?continent=Asia`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
          };
          asia.push(dataList);
        }
        return asia;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Asia`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }
        asia.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });
        return asia;
      })
      .catch((err) => console.error(err));

    // Oceania
    await fetch(`${url_api}cases?continent=Oceania`)
      .then((res) => res.json())
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
          };
          oceania.push(dataList);
        }
        return oceania;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Oceania`)
      .then((res) => res.json())
      .then(function (vData) {
        let vList = [];
        for (let country in vData) {
          let vSet = {
            country: country,
            vaccinated: vData[country]["All"]["administered"],
          };
          vList.push(vSet);
        }
        oceania.map((element) => {
          for (const i in vList) {
            if (element.country == vList[i].country) {
              element.vaccinated = vList[i].vaccinated;
            }
          }
        });
        return oceania;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
};

continentList(API);
