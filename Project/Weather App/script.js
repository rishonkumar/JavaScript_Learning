const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a7edc0087bmsh9db95ad3b894c42p196ebdjsn62bd42e26800",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
