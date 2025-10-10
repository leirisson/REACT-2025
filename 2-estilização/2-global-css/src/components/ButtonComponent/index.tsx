type Props = React.ComponentProps<"button"> & {
  name: string;
};

export function ButtonComponent({ name }: Props) {
  return <>
  <button style={{
      padding:"1rem",
      borderRadius:"4px",
      margin:"4rem",
    }}>
      {name}
    </button>
  </>;
}
