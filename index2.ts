// Exercise 2

// • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
// • Extend the existing interface `City` (without modifying it inline) by adding a
//   `coords` property of type `Coords`.
// • Fix whatever is wrong with `tampa`

//[do not edit] (pretend this is coming from external `foo.d.ts` lib)
interface City {
  name: string;
} // [/do not edit]

interface ICoords {
  latitude: number;
  longitude: number;
}
interface mCity extends City {
  coords: ICoords;
}
const montreal: mCity = {
  coords: {
    latitude: 42.332,
    longitude: -73.324
  },
  name: "Montréal"
};

function getCityInfo(city: mCity) {
  const coords = `(${city.coords.latitude.toFixed(
    3
  )}, ${city.coords.longitude.toFixed(3)})`;
  return `${city.name.toUpperCase()} is located at ${coords}.`;
}

console.log(getCityInfo(montreal));
