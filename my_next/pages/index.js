import fs from "fs/promises"; //node file system //如果在client side執行會fail，因為bowser不支援
import path from "path";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState, useContext } from "react";
import NotificationContext from "../store/notificationContext";
import LetterRegistration from "../components/input/LetterRegistration";
//second run
const MainPage = (props) => {
  const { products } = props;
  const refEmail = useRef();
  const refFeedBack = useRef();
  const [feedBackItems, setFeedBackItems] = useState([]);
  const { showNotification } = useContext(NotificationContext);

  const submit = (e) => {
    showNotification({
      title: "sending",
      message: "feedback",
      status: "pending",
    });

    e.preventDefault(); //forbit reload page
    //  refEmail.current.value
    //  refFeedBack.current.value
    fetch("/api/feedBack", {
      method: "POST",
      body: JSON.stringify({
        email: refEmail.current.value,
        text: refFeedBack.current.value,
      }),
      //後端回協助轉譯json string
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        //http code 400 500並不會導致promise中的error
        //這裡另外做處理
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || "something wrong in http");
        });
      })
      .then((data) => {
        showNotification({
          title: "success",
          message: "feedback",
          status: "success",
        });
      })
      .catch((err) => {
        showNotification({
          title: "Error",
          message: err.message || "something Wrong",
          status: "error",
        });
      });
  };

  const loadData = () => {
    fetch("/api/feedBack")
      .then((res) => res.json())
      .then((data) => setFeedBackItems(data.feedBack));
  };
  return (
    <div>
      <Head>
        <title>NextJS test</title>
        {/* <Image
          src="https://images.pexels.com/photos/6748075/pexels-photo-6748075.jpeg"
          alt=""
          width={340}
          height={160}
        /> */}
        {/* <img
          src="https://images.pexels.com/photos/6748075/pexels-photo-6748075.jpeg"
          alt=""
        /> */}
        {/* SEO */}
        <meta name="my self meta" content="test meta here" />
      </Head>
      <h1>Home page</h1>
      <LetterRegistration />
      <ul>
        {products.map((product, idx) => (
          <li key={product.id}>
            <Link href={`http://localhost:3000/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={refEmail} />
        </div>
        <div>
          <label htmlFor="feedback">your feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="5"
            ref={refFeedBack}
          ></textarea>
        </div>
        <button>send</button>
      </form>
      <hr />
      <button onClick={loadData}>Load FeedBack</button>
      <ul>
        {feedBackItems.map((item) => (
          <li key={item.id}>{item.feedBackText}</li>
        ))}
      </ul>
    </div>
  );
};
//first run
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummyBack.json");
  //current work directory
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default MainPage;
