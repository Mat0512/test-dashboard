import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { Box } from "@mui/material";
import LoadingNotif from "../../components/LoadingNotif";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 14.5995,
    lng: 120.9842,
};

const Map = ({ data }) => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCQULinj8QffTOZbUWHBb8bAAWut97xbF4",
    });

    const markers = data.length
        ? data
              .filter((item) => item?.lat && item?.lng)
              .map((item, i) => {
                  return (
                      <div key={i}>
                          <MarkerF
                              position={{
                                  lat: parseFloat(item.lat),
                                  lng: parseFloat(item.lng),
                              }}
                          />
                      </div>
                  );
              })
        : null;

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                height="40rem"
                gap={2}
            >
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        {markers}
                    </GoogleMap>
                ) : (
                    <LoadingNotif />
                )}
            </Box>
        </>
    );
};

export default Map;
