type Props = {
  name: string;
};

export function ButtonComponent({ name }: Props) {
  return (
    <>
      <button>{name}</button>
    </>
  );
}
