import { AiFillDelete ,AiTwotoneEdit } from 'react-icons/ai';
import { GrOverview } from 'react-icons/gr';



import { useHistory } from "react-router-dom";

function UserRow({ userdata, userList, setUserList }) {
  const history = useHistory();
  return (
    <tr>
      <td className="pl-4">{userdata.id}</td>
      <td>
        <h5 className="font-medium mb-0">{userdata.name}</h5>
      </td>
      <td>
        <span className="text-muted">{userdata.email}</span>
      </td>
      <td className="crud-ops">
        <button
          type="button"
          className="btn btn-outline-danger btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            let updatedList = userList.filter(function (obj) {
              return obj.id !== userdata.id;
            });
            console.log(updatedList);
            setUserList(updatedList);
            history.push("/");
          }}
        >
          <AiFillDelete style={{ marginBottom: "2px" }}/>
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            history.push("/edit/" + userdata.id);
          }}
        >
          <AiTwotoneEdit style={{ marginBottom: "2px" }}/>
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            history.push("/profile/" + userdata.id);
          }}
        >
          <GrOverview style={{ marginBottom: "2px" }}/>
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
