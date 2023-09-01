import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { center } from "./const"

export const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '' })

  return isLoaded
    ?
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="w-full h-full"
    >
      <Marker position={center} />
    </GoogleMap>
    :
    <></>
} 