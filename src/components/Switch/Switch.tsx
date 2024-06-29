import { ChangeEvent, useId } from "react";
import { SwitchContainer } from "./Switch.styled";

export type SwitchProps = {
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Switch(props: SwitchProps) {
  const { isChecked = false, onChange } = props;
  const id = useId();
  return (
    <SwitchContainer>
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <label className="slider round" htmlFor={id}></label>
    </SwitchContainer>
  );
}
