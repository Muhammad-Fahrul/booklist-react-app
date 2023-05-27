import { useState } from "react";
import Form from "./components/Form.jsx";
import TableList from "./components/TableList.jsx";
export default function () {
  const [formData, setFormData] = useState({
    judul: "",
    author: "",
    isbn: "",
  });

  const [dataFormAdd, setDataFormAdd] = useState([]);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addDataForm(event) {
    event.preventDefault();
    setDataFormAdd((prev) => {
      return [...prev, formData];
    });
    setFormData({
      judul: "",
      author: "",
      isbn: "",
    });
  }

  console.log(formData);
  console.log(dataFormAdd);
  return (
    <div className="container">
      <h1>
        My <span>Book</span> List
      </h1>
      <Form
        handleChange={handleChange}
        addDataForm={addDataForm}
        formData={formData}
      />
      <TableList formData={dataFormAdd} />
    </div>
  );
}
