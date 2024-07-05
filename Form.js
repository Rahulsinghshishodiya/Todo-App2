import React, { useState } from "react";
import "./Form.css";
import IndexForm from "./IndexForm";
function Form() {
  // const [creatform, setCreatForm] = useState([{}]);
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [ages, setAges] = useState("");
  // const [adrs, setAdrs] = useState("");
  // const [gender, setGender] = useState("");
  // const [position, setPosition] = useState("");

  const [user, setUsers] = useState([]);
  const [userObj, setUserObj] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    city: "",
    gender: "",
    position: "",
  });

  // const handleSubmit = () => {

  //   setCreatForm([
  //     ...creatform,
  //     {
  //       FstName: firstname,
  //       Lstname: lastname,
  //       Age: ages,
  //       Address: adrs,
  //       Gender: gender,
  //       Position: position,
  //     },
  //   ]);

  //   setFirstName("");
  //   setLastName("");
  //   setAges("");
  //   setAdrs("");
  //   setGender("");
  //   setPosition("");
  // }
  //console.log("nnnnnnnnn", creatform);

  const handleSubmit = () => {
    const data = [...user];
    data.push(userObj);
    setUsers(data);
    setUserObj({
      firstname: "",
      lastname: "",
      age: 0,
      city: "",
      gender: "",
      position: "",
    });
  };

  return (
    <>
      <div className="form-wraper">
        <h1>Student Registeration Form</h1>
        <div>
          <form>
            <div className="full-name">
              <h5>Name</h5>
              <input
                type="text"
                name="firstname"
                placeholder="Enter Your First Name"
                required
                id="fname"
                onChange={(e) => {
                  setUserObj({
                    ...userObj,
                    firstname: e.target.value,
                  });
                }}
                value={userObj?.firstname}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Enter Your Last Name"
                required
                id="lname"
                value={userObj?.lastname}
                onChange={(e) => {
                  setUserObj({
                    ...userObj,
                    lastname: e.target.value,
                  });
                }}
              />
            </div>
            <div className="age">
              <h5>Age</h5>
              <input
                type="number"
                value={userObj?.age}
                onChange={(e) => {
                  setUserObj({
                    ...userObj,
                    age: e.target.value,
                  });
                }}
              />
            </div>
            <div className="address">
              <h5>Address</h5>
              <input
                type="text"
                placeholder="Enter Your Address"
                name="city"
                value={userObj?.city}
                onChange={(e) => {
                  setUserObj({
                    ...userObj,
                    city: e.target.value,
                  });
                }}
              />
            </div>
            <div
              onChange={(e) => {
                setUserObj({
                  ...userObj,
                  gender: e.target.value,
                });
              }}
            >
              <h5>Gender</h5>
              <label>
                <input
                  type="radio"
                  class="radio"
                  value="Male"
                  name="gender"
                  checked={userObj?.gender === "Male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  class="radio"
                  value="Female"
                  name="gender"
                  checked={userObj?.gender === "Female"}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  class="radio"
                  value="Other"
                  name="gender"
                  checked={userObj?.gender === "Other"}
                />
                Other
              </label>
            </div>
            <div className="subject-item">
              <h5>Position</h5>
              <select
                name="pos"
                value={userObj?.position}
                onChange={(e) => {
                  setUserObj({
                    ...userObj,
                    position: e.target.value,
                  });
                }}
              >
                <option value="Other">Option</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Backend">Backend</option>
                <option value="React js">React js</option>
              </select>
            </div>
            <div className="buttonitem">
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <IndexForm user={user} setUsers={setUsers} setUserObj={setUserObj} />
    </>
  );
}

export default Form;
