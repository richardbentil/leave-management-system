import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { MdHomeFilled} from "react-icons/md"

function LeaveRequestList() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  async function fetchData() {
    const session = sessionStorage.getItem("user")
    const user = session && JSON.parse(session)
    setLoading(true)
      try {
      const result = await axios(
        'https://my-api.com/leave-requests',
        {
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + user?.token },
      });
        
        const data = result.data
        
        setLoading(false)

      if (data.status === "Ok") {
      setLeaveRequests(result.data);
      } else {
        setError(data?.error_message)
      }
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  let content;

  if (error) {
    content = (
      <div className="text-center">
        <p>{error}</p>
        <button className="btn btn-primary" onClick={fetchData}>Reload</button>
      </div>
    )
  }

  if (loading) {
    content = (
      <div className='my-4 text-center'>
        <p>Loading...</p>
      </div>
    )
  }

  if (leaveRequests?.length > 0) {
    content = (
      <>
        {leaveRequests?.length === 0 ?
          content = (
            <div className="text-center">
              <p>There are no leave request</p>
            </div>
          )
          : (
          <table className="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee name</th>
                <th>Leave dates</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leaveRequest: any, index: number) => (
                <tr  key={index}>
                  <td scope="row">{leaveRequest.employeeId}</td>
                  <td>{leaveRequest.employeeName}</td>
                  <td>{leaveRequest.startDate} - {leaveRequest.endDate}</td>
                  <td><Link href={`leave-details/${leaveRequest?.id}`}>View details</Link></td>
                </tr>
              ))}
            </tbody>
            </table>
            )
        }
      </>
    )
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="border-bottom d-flex justify-content-between align-items-center my-3 px-0 py-2">
            <div className="d-flex justify-content-start align-items-center">
              <MdHomeFilled size={20} /> <h5 className="ms-3 mb-0">Leave Requests</h5>
            </div>
            <Link href="/" className="btn btn-primary">Request leave</Link>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}

export default LeaveRequestList;
