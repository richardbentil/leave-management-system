import {useState} from "react"
import LeaveAprrovalButton from "./LeaveApprovalButton";
import LeaveDeclineButton from "./LeaveDeclineButton";

interface LeaveDetailsProps  {
  data: {
    employeeName: string,
    leaveStartDate: string,
    leaveEndDate: string,
    reason: string,
    approvalStatus: string
  }
}

const LeaveDetails = (props: LeaveDetailsProps) => {
  const { employeeName, leaveStartDate, leaveEndDate, reason, approvalStatus } = props.data;
  const [error, setError] = useState<string>("")
  const [message, setMessage] = useState("")

  return (
    <>
      {error && <p className="alert alert-danger">{error}</p>}
      {message && <p className="alert alert-success">{message}</p>}
      <div className="border-bottom mb-3">
        <h2>Leave Request</h2>
      </div>
      <h4>{employeeName}</h4>
      <p>{leaveStartDate} to {leaveEndDate}</p>
      <p>Status: {approvalStatus}</p>
      <p>Reason: {reason}</p> 
      <div className="my-4">
        <LeaveAprrovalButton setError={setError} setMessage={setMessage} />
        <LeaveDeclineButton setError={setError} setMessage={setMessage}  />
      </div>
    </>
  );
};

export default LeaveDetails;
