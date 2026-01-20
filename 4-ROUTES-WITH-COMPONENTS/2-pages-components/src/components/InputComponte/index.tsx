type InputsProps = {
  label: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
};

export function Inputcomponent({ label, value, type, onChange }: InputsProps) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
