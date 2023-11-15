// import React from 'react'

export default function Users() {
  return (
    <>
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 text-light">Users Table</h1>
        </div>

        <div className="card-body">
            <div className="table-responsive">
              <table
                className="table text-center text-light"
                id="dataTable"
                width="100%"
                >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Nama Game</th>
                    <th>Tanggal Upload</th>
                    <th>Action</th>
                  </tr>
                </tfoot> */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dedy Cahyadi</td>
                    <td>Active</td>
                    <td>
                        <button type="button" className="btn mr-1 btn-outline-warning">Edit</button>
                        <button type="button" className="btn ml-1 btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Anton Putra</td>
                    <td>Active</td>
                    <td>
                        <button type="button" className="btn mr-1 btn-outline-warning">Edit</button>
                        <button type="button" className="btn ml-1 btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  );
}
