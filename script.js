// All contries flags

const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  console.log(JSON.parse(xhr.response));
  for (const iterator of data) {
    console.log(iterator.flags.png);
  }
};

xhr.open("GET", URL);
xhr.send();

// All countries name,region,sub region, population

// const URL = "https://restcountries.com/v3.1/all";

// const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   let data = JSON.parse(xhr.response);
//   console.log(JSON.parse(xhr.response));
//   for (const iterator of data) {
//     console.log(
//       iterator.fifa,
//       iterator.region,
//       iterator.subregion,
//       iterator.population
//     );
//   }
// };

// xhr.open("GET", URL);
// xhr.send();
