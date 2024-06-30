// import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Bien", age: "11" },
      { id: 2, name: "Bieen", age: "20" },
      { id: 3, name: "Bi3n", age: "22" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
