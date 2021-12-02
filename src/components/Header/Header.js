import { Head, P } from "./Header.styles";

const Header = () => {
  return (
    <Head>
      <h1 className="title">Todo list</h1>
      <P>Количество записей 10</P>
    </Head>
  );
};

export default Header;
