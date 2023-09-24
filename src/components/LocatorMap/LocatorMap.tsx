import React, { ReactNode } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import urlify from "../../functions/urlify";
import Walk from "../../types/Walks/Walk";
import "./LocatorMap.css";

interface Props {
  walks: Array<Walk>;
}

const LocatorMap: React.FC<Props> = (props: Props) => {
  const { walks } = props;

  const { ref, map, google } = useGoogleMaps(
    // enable billing and restrict this api key to the production app
    "AIzaSyAIK0BvMxzAMX_JiAltdlYznF-G2NfEh7o",
    {
      center: { lat: 53.60818414548348, lng: -1.3976421011088946 },
      zoom: 4,
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
            {
              saturation: "-100",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#000000",
            },
            {
              lightness: 40,
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#2b3638",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#2b3638",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#24282b",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#24282b",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    }
  );

  if (map) {
    // loop walks array and create a marker for each one
    walks.map((walk: Walk) => {
      const lat: number = parseFloat(walk.lat);
      const lng: number = parseFloat(walk.lng);
      // The marker

      const walkMarker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
      });

      // attach infoWindows to markers
      const infowindowContent: ReactNode = `<a href="/walks/${urlify(
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
