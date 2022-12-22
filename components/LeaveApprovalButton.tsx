import axios from 'axios';
import {useState} from 'react'

function LeaveAprrovalButton({ id, setError, setMessage }: any) {
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleApprove = async() => {
    // send request to API to update item status to "approved"
    setLoading(true)

    try {
      // submit form data to backend or API
      const response = await axios.put(
        'https://my-api.com/leave-requests/' + id, {
          data: {leaveStatus: "Approved"}
        }
      );
      
      const data = response.data
      if (data.status === "Ok") {
        setMessage("Leave request approved")
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
        <button onClick={handleApprove} className="btn btn-primary">{loading ? "Submitting..." : "DecliApprovene"}</button>
  )
}

export default LeaveAprrovalButton