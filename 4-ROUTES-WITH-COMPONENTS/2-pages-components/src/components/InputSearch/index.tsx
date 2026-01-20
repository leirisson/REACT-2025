type InputSearchProps = {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
};

export function InputSearch({
  placeholder,
  value,
  onChange,
}: InputSearchProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
