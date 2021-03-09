//特殊component //head和外面不同
import Document, { Html, Head, Main, NextScript } from "next/document";
//restart sever when change
class MyDocument extends Document {
  render() {
    return (
      <Html>
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
