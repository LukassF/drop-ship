export default function About({ message }: aboutProps) {
  console.log(message);
  return <h1>{message}</h1>;
}

export async function getServerSideProps() {
  return { props: { message: "Hi hello and welcome" } };
}

type aboutProps = {
  message: string;
};
