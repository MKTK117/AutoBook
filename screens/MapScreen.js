import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);

  return (
    <View>
      <MapView
        
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
      >
        {route.params.searchResults.map((item) =>
          item.properties.map((prop) => (
            <Marker
              title={prop.name}
              coordinate={{
                latitude: Number(prop.latitude),
                longitude: Number(prop.longitude),
              }}
            ></Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
