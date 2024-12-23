import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import useGooglePlaces from "@/hooks/useGooglePlaces";

export const SearchField = () => {
  const { ready, value, data, setValue, handleSelect } = useGooglePlaces();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Combobox aria-label="Search for a city" onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        <ComboboxPopover>
          <ComboboxList
            style={{
              color: "black",
            }}
          >
            {data.map((suggestion) => {
              const {
                place_id,
                structured_formatting: { main_text },
              } = suggestion;

              return <ComboboxOption key={place_id} value={main_text} />;
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";


// export const SearchField = () => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       types: ["(cities)"],
//     },
//     debounce: 300,
//   });

//   const handleInput = (e) => {
//     // Update the keyword of the input element
//     setValue(e.target.value);
//   };

//   const handleSelect = (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     // Get latitude and longitude via utility functions
//     getGeocode({ address }).then((results) => {
//       const { lat, lng } = getLatLng(results[0]);
//       console.log("📍 Coordinates: ", { lat, lng });
//     });
//   };

//   return (
//     <div>
//       <Combobox aria-label="Search for a city" onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Where are you going?"
//         />
//         <ComboboxPopover>
//           <ComboboxList style={{
//             color: "black",
//           }}>
//             {
//               data.map((suggestion) => {

//                 const {
//                   place_id,
//                   structured_formatting: { main_text },
//                 } = suggestion;

//                 return (
//                   <ComboboxOption key={place_id} value={main_text} />
//                 )
//               })
//             }
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// };