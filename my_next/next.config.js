//like frontend export default
//NextJS 可以依照執行的npm script 來判斷當下build的環境為Dev或者是production
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants"); //PH可以界定不同環境

// module.exports = {
//   env: {
//     mongoDB_userName: "Sheng",
//     mongoDB_passWord: "pk110291",
//     mongoDB_clusterName: "cluster0",
//     mongoDB_dataBase: "events",
//   },
// };
// fn形式下，可以接收到phase參數
module.exports = (phase) => {
  //如果在dev會給不同的obj
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongoDB_userName: "Sheng",
        mongoDB_passWord: "pk110291",
        mongoDB_clusterName: "cluster0",
        mongoDB_dataBase: "dev-events",
      },
    };
  }

  return {
    env: {
      mongoDB_userName: "Sheng",
      mongoDB_passWord: "pk110291",
      mongoDB_clusterName: "cluster0",
      mongoDB_dataBase: "events",
    },
  };
};
