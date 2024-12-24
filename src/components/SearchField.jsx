import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete from "use-places-autocomplete";

export const SearchField = ({ text, handleChange }) => {
  const {
    ready,
    value,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  });

  const handleSelect = async (address) => {
    setValue(address, false);
    handleChange(address);
    clearSuggestions();
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <div>
      <Combobox aria-label="Search for a city" onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder={text}
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