import { ChangeEvent, useEffect, useId, useState } from "react";
import { SwitchContainer } from "./Switch.styled";

export type SwitchProps = {
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Switch(props: SwitchProps) {
  const { isChecked = false, onChange } = props;
  const id = useId();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <SwitchContainer>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label className="slider round" htmlFor={id}></label>
    </SwitchContainer>
  );
}
