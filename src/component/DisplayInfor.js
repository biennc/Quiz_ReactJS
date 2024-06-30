import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUsers: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  };
  render() {
    //destructuring array/object
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}>
            {this.state.isShowListUsers === true
              ? "Hide list users"
              : "Show list users"}
          </span>
          <div />
          {this.state.isShowListUsers && (
            <div>
              {listUsers.map((user, index) => {
                return (
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "green" : "red"}>
                    <div>My name is {user.name}</div>
                    <div>My age is {user.age}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DisplayInfor;
