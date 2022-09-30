import React, { memo } from "react";

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="login">登录</span>
        <span className="rigister">注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>

      <div className="profile">
        <span className="menu">
          <IconProfileMenu />
        </span>
        <span className="avatar">
          <IconProfileAvatar />
        </span>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
