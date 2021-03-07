import Link from "next/link";
const MainPage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
