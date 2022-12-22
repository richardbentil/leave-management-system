import React, { useEffect, useState } from "react";
import LeaveDetails from 'components/Leave-details';
import axios from "axios";
import Link from "next/link";
import {MdDescription} from "react-icons/md"

const Details = () => {
  const item = {
    name: 'Item 1',
    description: 'This is a description of item 1',
    status: 'pending'
  };
  
  const [leaveDetails, setLeavedetails] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  async function fetchData() {
    setLoading(true)
      try {
      const result = await axios(
        'https://my-api.com/leave-requests',
        );
        
      const data = result.data

      if (data.status === "Ok") {
      setLeavedetails(result.data);
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

  let content

  if (error) {
    content = (
      <div className="text-center my-4">
        <p>{error}</p>
        <button className="btn btn-primary" onClick={fetchData}>Reload</button>
        </div>
    )
  }

  if (loading) {
    content = (
      <div className="text-center my-4">
        <p>Loading...</p>
      </div>
    )
  }

  if (leaveDetails?.employeeName) {
    content = (
      <LeaveDetails data={leaveDetails} />
    )
  }


  return (
    <>
      <div className="container">
        <div className="row">
            <div className="border-bottom d-flex justify-content-between align-items-center my-3 px-0 py-2">
              <div className="d-flex justify-content-start align-items-center">
                <MdDescription size={20} /> <h5 className="ms-3 mb-0">Leave details</h5>
              </div>
              <Link href="/leave-requests" className="text-decoration-none">Go back</Link>
            </div>
            {content}
        </div>
      </div>
    </>
  );
};

export default Details
