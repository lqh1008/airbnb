import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
// import HelloWorld from "@/components/hello-world";

import routes from "@/router/index";
import AppHeader from "@/components/app-footer";
import AppFooter from "@/components/app-header";

// TODO: 为什么要使用memo
const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  );
});

export default App;
