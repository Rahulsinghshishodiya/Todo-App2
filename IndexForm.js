import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

function IndexForm({ user, setUsers, setUserObj }) {
  console.log(setUsers);
  //console.log("USER", user);
  // const { creatform } = props;
  // console.log("creatformcreatform", creatform);
  //const newForm = [{ ...creatform }];
  const handleDelete = (index) => {
    //console.log(index);
    const newUser = [...user];
    newUser.splice(index, 1);
    setUsers(newUser);
  };
  const handleEdit = (value, index) => {
    console.log(value, index);
    //const copyUser = [...user];
    const currentIndex = user.indexOf(value);
    const newuser = [...user];
    //console.log(currentIndex);
    if (currentIndex === index) {
      setUserObj({
        firstname: value.firstname,
        lastname: value.lastname,
        age: value.age,
        city: value.city,
        gender: value.gender,
        position: value.position,
      });
      newuser.splice(index, 1);
      setUsers(newuser);
    }

    // setUsers((prev) => {
    //   prev.map((previtem) => {
    //     if (prev.indexOf(previtem) === index) {
    //       console.log(value);
    //       setUserObj({
    //         firstname: value.firstname,
    //         lastname: value.lastname,
    //         age: value.age,
    //         city: value.city,
    //         gender: value.gender,
    //         position: value.position,
    //       });
    //       //setUsers(value);
    //       return value;
    //     } else {
    //       return previtem;
    //     }
    //   });
    // });
  };
  return (
    <div className="table-wraper">
      <h1> Form List</h1>

      <div className="table-list">
        <table>
          <tr>
            <th style={{ padding: "12px" }}>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Position</th>
          </tr>

          {user.map((item, ind) => {
            return (
              <>
                <tr>
                  <td>{item?.firstname}</td>
                  <td>{item?.lastname}</td>
                  <td> {item?.age}</td>
                  <td> {item?.city}</td>
                  <td> {item?.gender}</td>
                  <td> {item?.position}</td>
                  <div className="icon-delete">
                    <div onClick={() => handleDelete(ind)}>
                      <MdDelete />
                    </div>
                    <div onClick={() => handleEdit(item, ind)}>
                      <MdOutlineModeEditOutline />
                    </div>
                  </div>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default IndexForm;
