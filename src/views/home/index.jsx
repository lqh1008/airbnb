import React, { memo, useEffect, useState } from "react";

import hyRequest from "@/services";

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});
  // 网络请求代码
  // 如果开启严格模式，会执行两次生命周期来判断有没有副作用
  useEffect(() => {
    hyRequest
      .get({ url: "/home/highscore" })
      .then((result) => {
        console.log("🚀 ~ result", result);
        setHighScore(result);
      })
      .catch((err) => {
        console.log("🚀 ~ err", err);
      });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
