const fetch = (api_url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", api_url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Test Error", api_url));
      }
    };
    xhttp.send();
  });
};

const API = "https://covid-api.mmediagroup.fr/v1/";

const continentList = async (url_api) => {
  try {
    // Continent Lists
    let northAmerica = [];
    let nACases = 0;
    let nAVac = 0;

    let southAmerica = [];
    let sACases = 0;
    let sAVac = 0;

    let europe = [];
    let euCases = 0;
    let euVac = 0;

    let africa = [];
    let afCases = 0;
    let afVac = 0;

    let asia = [];
    let asCases = 0;
    let asVac = 0;

    let oceania = [];
    let ocCases = 0;
    let ocVac = 0;

    // Global Selectors
    const $globalCases = document.querySelector(".global-card-casenum");
    const $globalVacc = document.querySelector(".global-card-vacnum");

    // Continent Selectors
    const $northAmericaCases = document.querySelector(".northamerica-cases");
    const $northAmericaVacc = document.querySelector(".northamerica-vacc");

    const $southAmericaCases = document.querySelector(".southamerica-cases");
    const $southAmericaVacc = document.querySelector(".southamerica-vacc");

    const $europeCases = document.querySelector(".europe-cases");
    const $europeVacc = document.querySelector(".europe-vacc");

    const $africaCases = document.querySelector(".africa-cases");
    const $africaVacc = document.querySelector(".africa-vacc");

    const $asiaCases = document.querySelector(".asia-cases");
    const $asiaVacc = document.querySelector(".asia-vacc");

    const $oceaniaCases = document.querySelector(".oceania-cases");
    const $oceaniaVacc = document.querySelector(".oceania-vacc");

    // North America
    await fetch(`${url_api}cases?continent=North America`)
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

    nACases = northAmerica.reduce((a, b) => a + b.confirmed, 0);
    nAVac = northAmerica.reduce((a, b) => a + b.vaccinated, 0);
    $northAmericaCases.innerText = nACases.toLocaleString("en-US");
    $northAmericaVacc.innerText = nAVac.toLocaleString("en-US");

    // South America
    await fetch(`${url_api}cases?continent=South America`)
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          southAmerica.push(dataList);
        }
        return southAmerica;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=South America`)
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

    sACases = southAmerica.reduce((a, b) => a + b.confirmed, 0);
    sAVac = southAmerica.reduce((a, b) => a + b.vaccinated, 0);
    $southAmericaCases.innerText = sACases.toLocaleString("en-US");
    $southAmericaVacc.innerText = sAVac.toLocaleString("en-US");

    // Europe
    await fetch(`${url_api}cases?continent=Europe`)
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          europe.push(dataList);
        }
        return europe;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Europe`)
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
    euCases = europe.reduce((a, b) => a + b.confirmed, 0);
    euVac = europe.reduce((a, b) => a + b.vaccinated, 0);
    $europeCases.innerText = euCases.toLocaleString("en-US");
    $europeVacc.innerText = euVac.toLocaleString("en-US");

    // Africa
    await fetch(`${url_api}cases?continent=Africa`)
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          africa.push(dataList);
        }
        return africa;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Africa`)
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

    afCases = africa.reduce((a, b) => a + b.confirmed, 0);
    afVac = africa.reduce((a, b) => a + b.vaccinated, 0);
    $africaCases.innerText = afCases.toLocaleString("en-US");
    $africaVacc.innerText = afVac.toLocaleString("en-US");

    // Asia
    await fetch(`${url_api}cases?continent=Asia`)
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          asia.push(dataList);
        }
        return asia;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Asia`)
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
    asCases = asia.reduce((a, b) => a + b.confirmed, 0);
    asVac = asia.reduce((a, b) => a + b.vaccinated, 0);
    $asiaCases.innerText = asCases.toLocaleString("en-US");
    $asiaVacc.innerText = asVac.toLocaleString("en-US");

    // Oceania
    await fetch(`${url_api}cases?continent=Oceania`)
      .then(function (data) {
        for (const country in data) {
          let dataList = {
            country: country,
            confirmed: data[country]["All"]["confirmed"],
            vaccinated: 0,
          };
          oceania.push(dataList);
        }
        return oceania;
      })
      .catch((err) => console.error(err));

    await fetch(`${url_api}vaccines?continent=Oceania`)
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
    ocCases = oceania.reduce((a, b) => a + b.confirmed, 0);
    ocVac = oceania.reduce((a, b) => a + b.vaccinated, 0);
    $oceaniaCases.innerText = ocCases.toLocaleString("en-US");
    $oceaniaVacc.innerText = ocVac.toLocaleString("en-US");

    $globalCases.innerText = (
      nACases +
      sACases +
      euCases +
      afCases +
      asCases +
      ocCases
    ).toLocaleString("en-US");
    $globalVacc.innerText = (
      nAVac +
      sAVac +
      euVac +
      afVac +
      asVac +
      ocVac
    ).toLocaleString("en-US");
  } catch (error) {
    console.error(error);
  }
};

continentList(API);
