import axios from "axios";
import { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [InputText, setInputtext] = useState();

  function getData() {
    axios
      .get("https://63bba1a5cf99234bfa5fced5.mockapi.io/curd/api/crud-react")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, [data]);

  const inputHandler = (e) => {
    setInputtext(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  return (
    <>
      <input
        className="col-md-auto mb-4"
        placeholder="search... "
        onChange={inputHandler}
      />
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data
          .filter((e1) => {
            if (e1 === "") {
              return e1;
            } else {
              return (
                e1.name.toLowerCase().includes(InputText) ||
                e1.email.toLowerCase().includes(InputText)
              );
            }
          })
          .map((eachdata, key) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row" id={eachdata.id}>
                      {eachdata.id}
                    </th>
                    <th>{eachdata.name}</th>
                    <th>{eachdata.email}</th>
                  </tr>
                </tbody>
              </>
            );
          })}
        }
      </table>
    </>
  );
};

export default Read;
