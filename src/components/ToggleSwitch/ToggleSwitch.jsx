import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTempatureUnitContext from "../../contexts/CurrentTempatureUnitContext";

const ToggleSwitch = () => {
  const { curremtTempatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTempatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(curremtTempatureUnit === "C");
  useEffect(
    () => setIsChecked(curremtTempatureUnit === "C"),
    [curremtTempatureUnit]
  );
};

return (
  <div className="toggle-switch">
    <label htmlFor="" className="toggle-switch__label">
      <input
        className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
        type="checkbox"
        name="toggle-switch-checkbox"
        value={curremtTempatureUnit}
        onChange={handleToggleSwitchChange}
        checked={isChecked}
      />
      <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible"></span>
    </label>
  </div>
);

export default ToggleSwitch;
