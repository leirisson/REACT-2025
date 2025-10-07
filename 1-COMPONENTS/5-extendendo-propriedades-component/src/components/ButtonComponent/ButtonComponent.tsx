type Props = React.ComponentProps<"button"> & {
  name: string;
};

export function ButtonComponent({ name, onClick }: Props) {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
}
