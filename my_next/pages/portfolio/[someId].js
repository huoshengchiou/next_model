import { useRouter, withRouter } from "next/router"; //特定hook或HOC
const PortfolioById = () => {
  const router = useRouter();
  console.log(router.pathname); ///portfolio/[someId]
  console.log(router.query); //{someId: "some"}
  return <div>the PortfolioById</div>;
};

export default PortfolioById;
