import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   render() {
//     //destructuring array/object
//     const { listUsers } = this.props;
//     return (
//       <div className="display-inform-container">
//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name}</div>
//                   <div>My age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}>
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  //destructuring array/object
  const { listUsers } = props;

  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  // this.state = {
  //   isShowHideListUsers: true,
  // };
  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  return (
    <div className="display-inform-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUsers && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
