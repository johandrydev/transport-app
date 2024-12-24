import { useState } from "react";
import useMapContext from "@/hooks/useMapContext";
import { SearchField } from "./SearchField";
import "@/index.css";
import { createPortal } from "react-dom";

// open in a portal
const DialogError = ({ open, onClose, error }) => {
  return createPortal(
    <div id="modal-portal">
      <div className="modal-overlay">
        <dialog className="modal-content" open={open}>
          <header>Error</header>
          <p>{error}</p>
          <button onClick={onClose}>Close</button>
        </dialog>
      </div>
    </div>,
    document.getElementById("dialog-root")
  );
};

const SearhForm = () => {
  const { dispatch } = useMapContext();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [error, setError] = useState();

  const fromHandleChange = (value) => {
    setFrom(value);
  };

  const toHandleChange = (value) => {
    setTo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to || from.length < 3 || to.length < 3) {
      setError("Please enter a valid address");
      return;
    }

    dispatch({ type: "SET_ORIGIN", payload: from });
    dispatch({ type: "SET_DESTINATION", payload: to });
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <SearchField text={'Where are you from '} handleChange={fromHandleChange} />
        <SearchField text={'Where are you going '} handleChange={toHandleChange} />
        <button type="submit">Search</button>
      </form>
      {error && <DialogError open={!!error} onClose={() => setError(null)} error={error} />}
    </div>
  );
};

export default SearhForm;