const allCountries = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3/all");

  xhr.responseType = "json";

  xhr.onload = () => {
    const allcountrieshere = xhr.response;

    // Task-2 display all the country flags in console

    for (i = 0; i < allcountrieshere.length; i++) {
      var flags = allcountrieshere[i].flags;
      console.log(flags);
    }

    // Task-3 print all countries name, region, sub region and flag
    Object.entries(allcountrieshere).forEach((entry) => {
      const [key, value] = entry;
      console.log(value.flag);
    });

    for (let index of allcountrieshere) {
      console.log(index["name"]);
    }

    for (let key in allcountrieshere) {
      console.log("Region : " + allcountrieshere[key].region);
      console.log("Sub Region : " + allcountrieshere[key].subregion);
      console.log(allcountrieshere[key].languages);
    }
  };

  xhr.send();
};
allCountries();
