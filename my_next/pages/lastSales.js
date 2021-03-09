import { useEffect, useState } from "react";
import useSWR from "swr";
const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
  //   const [loading, setLoading] = useState(false);
  //URL在此hook又稱identifier
  const { data, error } = useSWR(
    "https://next-test-1bfcb-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (!data) return;
    const transSales = [];
    for (const key in data) {
      transSales.push({
        id: key,
        userName: data[key].userName,
        volume: data[key].volume,
      });
    }
    setSales(transSales);
  }, [data]);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("https://next-test-1bfcb-default-rtdb.firebaseio.com/sales.json")
  //       .then((res) => res.json())
  //       .then((payload) => {
  //         const transSales = [];
  //         for (const key in payload) {
  //           transSales.push({
  //             id: key,
  //             userName: payload[key].userName,
  //             volume: payload[key].volume,
  //           });
  //         }
  //         setSales(transSales);
  //         setLoading(false);
  //       });
  //   }, []);

  if (error) return <p>Fail fetch</p>;

  if (!data) {
    return <p>Loading ...</p>;
  }

  //   if (loading) {
  //     return <p>Loading ...</p>;
  //   }
  if (!sales) return <p>no data</p>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.userName}-{sale.volume}
        </li>
      ))}
    </ul>
  );
};
//NextJS 可以在這個fn內使用fetch
export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://next-test-1bfcb-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await res.json();

  const transSales = [];
  for (const key in data) {
    transSales.push({
      id: key,
      userName: data[key].userName,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transSales } };
};

export default LastSales;
