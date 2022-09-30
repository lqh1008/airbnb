import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btns {
    display: flex;
    align-items: center;

    & > * {
      padding: 12px;
    }
  }

  .profile {
    padding: 5px 5px 5px 12px;
    display: flex;
    align-items: center;

    .avatar {
      margin-left: 15px;
      ${(props) => props.theme.mixin.boxShadow}
    }
  }
`;
