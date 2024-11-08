import classNames from "classnames";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps {
  register: UseFormRegisterReturn;
  label: string;
  name: string;
  inputProps?: any;
  styles?: string;
  type: string;
  errors?: FieldErrors;
}

const TextInput = ({
  register,
  label,
  name,
  inputProps,
  styles,
  type,
  errors
}: TextInputProps) => {
  const rootClassName = classNames("", styles);
  return (
    <div className={rootClassName}>
      <label id={`${name}-label`}>{label}</label>
      <input type={type} id={`${name}-input`} {...register} {...inputProps} />
      {errors && <p>{errors?.[name]?.message as string}</p>}
    </div>
  );
};

export default TextInput;
