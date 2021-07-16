import { subject1 } from "../../subjectOutside";

const Portfolio = () => {
  // 往下有分頁match時不會走過這支
  return <div>Portfolio page</div>;
};

export default Portfolio;

export const getServerSideProps = async () => {
  subject1.subscribe((data) => console.log({ data }));

  return { props: {} };
};
