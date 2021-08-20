const fetch = require("node-fetch");
const API = "https://covid-api.mmediagroup.fr/v1/";
let northAmerica = [];
let southAmerica = [];
let europe = [];
let africa = [];
let asia = [];
let oceania = [];

const continentList = async (url_api) => {
  try {
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

        for (a in northAmerica) {
        }
        console.log(vList);
        console.log(" - ");
        console.log(northAmerica);

        // northAmerica.forEach((element) => {

        // })

        // for (const i in vList) {
        //   console.log(i);
        //   if (northAmerica[i].country == vList[i].country) {
        //     // console.log(northAmerica[i].country);
        //     // console.log(vList[i].country);
        //     // northAmerica[i].vaccinated = vList[i].vaccinated;
        //   } else {
        //     continue;
        //   }
        // }

        // console.log(northAmerica);
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
        for (const i in vList) {
          if (southAmerica[i].country == vList[i].country) {
            southAmerica[i].vaccinated = vList[i].vaccinated;
          } else {
            southAmerica.splice(i, 1);
          }
        }
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
        europe[europe.length - 1].vaccinated =
          vList[vList.length - 1].vaccinated;

        for (const i in vList) {
          if (europe[i].country == vList[i].country) {
            europe[i].vaccinated = vList[i].vaccinated;
          } else {
            europe.splice(i, 1);
          }
        }

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

        for (const i in vList) {
          if (africa[i].country == vList[i].country) {
            africa[i].vaccinated = vList[i].vaccinated;
          } else {
            africa.splice(i, 1);
          }
        }

        // for (const i in vList) {
        //   if (africa.find((element) => element.country == vList[i].country)) {
        //   }
        // }

        // console.log(africa);
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
  } catch (error) {
    console.error(error);
  }
};

continentList(API);
