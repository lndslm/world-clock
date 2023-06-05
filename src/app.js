function updateDateAndTime() {
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("MMMM Do, YYYY");
  montrealTimeElement.innerHTML = montrealTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Paris");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do, YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let adelaideElement = document.querySelector("#adelaide");
  let adelaideDateElement = adelaideElement.querySelector(".date");
  let adelaideTimeElement = adelaideElement.querySelector(".time");
  let adelaideTime = moment().tz("Australia/Adelaide");

  adelaideDateElement.innerHTML = adelaideTime.format("MMMM Do, YYYY");
  adelaideTimeElement.innerHTML = adelaideTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateDateAndTime();
setInterval(updateDateAndTime, 1000);
