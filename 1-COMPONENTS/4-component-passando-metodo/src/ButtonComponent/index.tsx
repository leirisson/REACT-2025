type Props = {
  name: string;
  onClick?: () => void;
};

export function ButtonComponent({ name, onClick }: Props) {
  return (
    <>
      <button onClick={onClick}> {name} </button>
    </>
  );
}
