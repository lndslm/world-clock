function updateDateAndTime() {
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("MMMM Do, YYYY");
  montrealTimeElement.innerHTML = montrealTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Paris");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do, YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let adelaideElement = document.querySelector("#adelaide");
  let adelaideDateElement = adelaideElement.querySelector(".date");
  let adelaideTimeElement = adelaideElement.querySelector(".time");
  let adelaideTime = moment().tz("Australia/Adelaide");

  adelaideDateElement.innerHTML = adelaideTime.format("MMMM Do, YYYY");
  adelaideTimeElement.innerHTML = adelaideTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function showCityDetails(event) {
  if (event.target.value.length > 0) {
    let cityElement = document.querySelector("#city-select");
    cityElement.classList.add("city");

    let cityTimeZone = event.target.value;
    if (cityTimeZone === `current`) {
      cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("hh:mm:ss [<small>]A[</small>]");

    cityElement.innerHTML = `
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityDate}</div>
      </div>
      <div class="time">${cityTime}</div>
    </div>`;
    setTimeout(() => {
      showCityDetails(event);
    }, 1000);
  }
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", showCityDetails);

updateDateAndTime();
setInterval(updateDateAndTime, 1000);
