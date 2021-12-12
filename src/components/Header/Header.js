import { Head } from "./Header.styles";

const Header = ({ numbers }) => {
  return (
    <Head>
      <h1 className="title">Todo list</h1>
      {numbers}
    </Head>
  );
};

export default Header;
