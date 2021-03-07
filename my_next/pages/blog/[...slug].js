import { useRouter, withRouter } from "next/router"; //特定hook或HOC

const BlogPost = () => {
  const router = useRouter();
  console.log(router.pathname); ///portfolio/[someId]
  console.log(router.query); //{someId: "some"}
  return <div>BlogPost</div>;
};

export default BlogPost;
