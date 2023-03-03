import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = () => {
  let classes = useStyles();
  let isMobile = useMediaQuery("(min-widthL600px");
  let coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        BootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
