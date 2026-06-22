import React, { useState } from "react";

export default function Form() {

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      age: form.age.value,
      phone: form.phone.value,
      qualification: form.qualification.value,
      gender: form.gender.value,
    };

    if (editIndex !== null) {
      const newUsers = [...users];
      newUsers[editIndex] = data;
      setUsers(newUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, data]);
    }

    form.reset();
  }

  function handleDelete(index) {
    const newUsers = users.filter((item, i) => i !== index);
    setUsers(newUsers);
  }

  function handleEdit(index) {

    document.forms[0].name.value = users[index].name;
    document.forms[0].email.value = users[index].email;
    document.forms[0].age.value = users[index].age;
    document.forms[0].phone.value = users[index].phone;
    document.forms[0].qualification.value =
      users[index].qualification;
    document.forms[0].gender.value = users[index].gender;

    setEditIndex(index);
  }

  return (
    <div>

      <h1>DATA TABLE </h1>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" />
        <br /><br />

        <input type="email" name="email" placeholder="Email" />
        <br /><br />

        <input type="number" name="age" placeholder="Age" />
        <br /><br />

        <input type="text" name="phone" placeholder="Phone" />
        <br /><br />

        <select name="qualification">
          <option>B.A</option>
          <option>BBA</option>
          <option>M.COM</option>
        </select>

        <br /><br />

        <select name="gender">
          <option>Male</option>
          <option>Female</option>
        </select>

        <br /><br />

        <button>
          {editIndex !== null ? "Update" : "Submit"}
        </button>

      </form>

      <hr />

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((item, index) => (
            <tr key={index}>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>{item.qualification}</td>
              <td>{item.gender}</td>

              <td>

                <button
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}