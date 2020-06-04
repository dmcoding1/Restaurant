import L from "leaflet/dist/leaflet.js";
import "leaflet/dist/leaflet.css";

import key from "../key";

export default () => {
  const myMap = L.map("map").setView([43.638562, -84.234599], 15);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${key}`,
      {
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken: key
      }
    ).addTo(myMap);

    const marker = L.marker([43.638562, -84.234599], {alt: "Location marker"}).addTo(myMap);

    marker.bindPopup("<b>Fresh Italian</b><br>Dinners, desserts and drinks").openPopup();
}