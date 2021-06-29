//特殊component //head和外面不同
import Document, { Html, Head, Main, NextScript } from "next/document";
//restart sever when change
class MyDocument extends Document {
  //可以透過一些方法拿到參數，來調整DOM的attribute，如lang or SEO case
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
