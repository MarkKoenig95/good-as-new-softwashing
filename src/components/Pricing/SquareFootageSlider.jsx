import { useCallback, useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

export default function SquareFootageSlider(props) {
  const { value, setValue } = props;
  const [title, setTitle] = useState("2000-2500 Square Feet");
  const step = 100;
  const min = 500;
  const max = 3502;

  const _handleValueChange = useCallback(
    ({ target }) => {
      setValue(target.value);
      let nValue = parseInt(target.value, 10);

      let tempTitle = "";
      if (nValue < 1000) {
        tempTitle = "Less than 1000";
        setValue(500);
      } else if (nValue < 1500) {
        tempTitle = "1000-1500";
        setValue(1000);
      } else if (nValue < 2000) {
        tempTitle = "1500-2000";
        setValue(1500);
      } else if (nValue < 2500) {
        tempTitle = "2000-2500";
        setValue(2000);
      } else if (nValue < 3000) {
        tempTitle = "2500-3000";
        setValue(2500);
      } else if (nValue < 3500) {
        tempTitle = "3000-3500";
        setValue(3000);
      } else if (nValue >= 3500) {
        tempTitle = "More than 3500";
        setValue(4000);
      }

      setTitle(tempTitle + " Square Feet");
    },
    [setValue]
  );

  useEffect(() => {
    _handleValueChange({ target: { value: value } });
  }, [_handleValueChange, value]);

  return (
    <>
      <h4 className="mt-5">{title}</h4>
      <RangeSlider
        value={value}
        onChange={_handleValueChange}
        step={step}
        max={max}
        min={min}
        orientation="horizontal"
        tooltip="off"
      />
    </>
  );
}
