import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Dashboard() {
  const [data, setdata] = useState([]);

  const deleteRow = async (id) => {
    try {
      await axios.delete(
        `https://660d1b103a0766e85dbf94e0.mockapi.io/api/axios/${id}`
      );
      // Filter out the deleted row from the state
      setdata(data.filter((data) => data.id !== id));
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  let getdata = async () => {
    try {
      const blogs = await axios.get(
        "https://660d1b103a0766e85dbf94e0.mockapi.io/api/axios"
      );
      setdata(blogs.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex justify-content-end mb-2 mt-2">
        <Link to="/details" className="btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50 "></i> Create Blog
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary d-flex justify-content-center"><b>USER DATA</b></h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th></th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Mobile</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={data.avatar} alt="Avatar" height="60px" />
                      </td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.city}</td>
                      <td>{data.phonenumber}</td>
                      <td>
                        <Link to={`/edit/${data.id}`}>
                          <FontAwesomeIcon
                            className="fa-2x ms-3"
                            icon={faPenToSquare}
                            style={{ color: "red" }}
                          />
                        </Link>
                        <FontAwesomeIcon
                          className="fa-2x ms-4 "
                          icon={faTrashCan}
                          style={{ color: "red" }}
                          onClick={() => deleteRow(data.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
