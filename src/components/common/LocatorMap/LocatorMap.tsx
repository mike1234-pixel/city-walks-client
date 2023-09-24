import { useGoogleMaps } from "react-hook-google-maps";
import urlify from "../../../utils/urlify";
import Walk from "../../../types/Walks/Walk";
import { mapConfig } from "./mapConfig";
import "./LocatorMap.css";

interface LocatorMapProps {
  walks: Array<Walk>;
}

const LocatorMap = (props: LocatorMapProps) => {
  const { walks } = props;

  const { ref, map, google } = useGoogleMaps(
    // enable billing and restrict this api key to the production app
    "AIzaSyAIK0BvMxzAMX_JiAltdlYznF-G2NfEh7o",
    mapConfig
  );

  if (map) {
    // loop walks array and create a marker for each one
    walks.map((walk: Walk) => {
      const lat = parseFloat(walk.lat);
      const lng = parseFloat(walk.lng);

      // The marker
      const walkMarker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
      });

      // attach infoWindows to markers
      const infowindowContent =
        `<a href="/walks/${urlify(
          walk.walk
        )}">
          <div class="map-marker-link">
            <h3>${walk.walk}</h3>
            <h6>${walk.city}</h6>
            <img src="${walk.coverImg
        }" style="height: 75px; width: 150px; margin-top: 10px; border-radius: 2px;"/>
          </div>
        </a>`;

      // declare infowindow and insert content
      const infoWindow = new google.maps.InfoWindow({
        content: infowindowContent,
      });

      // add click event to markers to open an infowindow
      walkMarker.addListener("click", () => {
        infoWindow.open(map, walkMarker);
      });

    });
  }

  return <div ref={ref} className='locator-map' />;
};

export default LocatorMap;
