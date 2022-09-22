import React, { memo } from "react";
import {useRoutes} from 'react-router-dom'
// import HelloWorld from "@/components/hello-world";

import routes from '@/router/index'
// TODO: 为什么要使用memo
const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <div className="page">
          {useRoutes(routes)}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
});

export default App;
