import { useEffect, useState } from "react";
import { useAppContext } from "../helpers/context";

const UserProfile = (props) => {
  return (
    <>
      <h1>{props.username}</h1>hi
    </>
  );
};

export default UserProfile;
//running for every incoming request //對於高頻率更新的資料使用
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return { props: { username: "sheng" } };
};
