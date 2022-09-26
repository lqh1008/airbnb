import React, { memo } from "react";

import { HeaderWrapper } from "./style";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";

const appHeader = memo(() => {
  return (
    <HeaderWrapper>
      {/* .left+.center+.right 敲出来的 */}
      {/* <div className="left">left</div>
      <div className="center">center</div>
      <div className="right">right</div> */}
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

export default appHeader;
