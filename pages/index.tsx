
import {MdCalendarToday, MdHolidayVillage} from "react-icons/md"
import Link from "next/link";
import LeaveRequestForm from "components/LeaveRequestForm";

const LeaveApplicationForm = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="border-bottom d-flex justify-content-between align-items-center my-3 px-0 py-2">
            <div className="d-flex justify-content-start align-items-center">
              <MdCalendarToday size={20} /> <h5 className="ms-3 mb-0">Request Time Off</h5>
            </div>
            <Link href="/leave-requests" className="text-decoration-none">All request</Link>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <span>As of today</span>
                <MdCalendarToday size={16} />
              </div>
              <div className="card-body d-flex justify-content-start pb-0">
                <div>
                  <MdHolidayVillage size={30} />
                </div>
                <div className="ms-3">
                  <p className="fw-bold mb-0">Vacation</p>
                  <p className="text-muted small">20 days left</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-6 col-xxl-5 mt-3">
           <LeaveRequestForm />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default LeaveApplicationForm;
