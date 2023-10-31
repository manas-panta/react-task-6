import React from "react";

export default function Skills() {
  return (
    <div>
      <h2 className="skills">My Skills</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?w=740&t=st=1697982375~exp=1697982975~hmac=fc1b44c4884673c902f8bb9dbeeec7c50512985dcde62ff778fbd1e15c62fdf3"
                className="card-img-top"
                alt="frontend"
              />
              <div className="card-body">
                <h5 className="card-title">FrontEnd</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=900&t=st=1697982425~exp=1697983025~hmac=14f6a003f62559a1f02167ae8bc72a9295021793a7d6a1ed49feeda7d90602d2"
                className="card-img-top"
                alt="database"
              />
              <div className="card-body">
                <h5 className="card-title">Database</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=740&t=st=1697982615~exp=1697983215~hmac=a2031c5f996b2321f6afecf48806fc5ff8798a4bff78140f55ae11251847d17c"
                className="card-img-top"
                alt="backend"
              />
              <div className="card-body">
                <h5 className="card-title">BackEnd</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-vector/web-hosting-service-information-chains-content-management-networking-connection-synchronization-internet-server-data-storage_335657-2371.jpg?w=740&t=st=1697982826~exp=1697983426~hmac=2d2dc2fb07ae11e6b25ffacf56e5a7aec3ca59499766ce9e659028d05472973d"
                className="card-img-top"
                alt="dsa"
              />
              <div className="card-body">
                <h5 className="card-title">DSA</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}