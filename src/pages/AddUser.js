import { useHistory } from "react-router-dom";
import { useState } from "react";

function AddUser({ userList, setUserList }) {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPic, setUserPic] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      name: userName,
      email: userEmail,
      pic: userPic,
      id: String(userList.length + 1),
    };
    setUserList([...userList, newUser]);
    history.push("/");
  };


  return (
    <>
      <h2>Add User</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="userPic"
            placeholder="User Image"
            name="userPic"
            value={userPic}
            onChange={(e) => setUserPic(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => onSubmit(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
