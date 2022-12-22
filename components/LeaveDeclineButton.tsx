import axios from 'axios';
import { useState } from 'react';

function LeaveDeclineButton({ id, setError, setMessage }: any) {
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleDecline = async() => {
    // send request to API to update item status to "approved"
      setLoading(true)
      
    const session = sessionStorage.getItem("user")
    const user = session && JSON.parse(session)

    try {
      // submit form data to backend or API
      const response = await axios.put(
        'https://my-api.com/leave-requests/' + id, {
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + user?.token },
          data: {leaveStatus: "Declined"}
        }
      );
      
      const data = response.data
      setLoading(false)
      if (data.status === "Ok") {
        setMessage("Leave request declined")
      } else {
        setError(data?.error_message)
      }
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }

    setLoading(false)
  };
  return (
    <button onClick={handleDecline} className="btn btn-primary">{loading ? "Submitting..." : "Decline"}</button>
  )
}

export default LeaveDeclineButton