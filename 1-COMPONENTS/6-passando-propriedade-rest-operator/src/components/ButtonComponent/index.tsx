type Props = React.ComponentProps<"button"> & {
  name: string;
};

export function ButtonComponent({ name, ...rest }: Props) {
  return (
    <>
      <button {...rest}>{name}</button>
    </>
  );
}
