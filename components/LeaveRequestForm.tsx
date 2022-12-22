import React, { useState } from 'react';
import TextArea from '../components/form/TextArea';
import TextInput from '../components/form/TextInput';
import { leaveFormSchema } from '../form-schemas';

import { MdOutlineSend } from "react-icons/md";

import axios from "axios";
import { Form, Formik } from "formik";
import Link from 'next/link';
import SelectInput from './form/SelectInput';

const type = ["sick leave", "child birth", "Annual", "holiday"]

function LeaveRequestForm() {
      //states for the form values not needed
  //I'm using formik with yup for form validations for security purposes
  // E.g const [leaveStartDate, setLeaveStartDate] = useState('');
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [message, setMessage] = useState("")
    
    
  const handleSubmit = async (values: any, actions: { resetForm: () => void; }) => {
    setLoading(true)

    const session = sessionStorage.getItem("user")
    const user = session && JSON.parse(session)

    try {
      // submit form data to backend or API
        const response = await axios.post(
        'https://my-api.com/leave-requests', {
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + user?.token },
            data: values
        }
        );
      const data = response.data
      setLoading(false)
        if (data.status === "Ok") {
            setMessage("Leave request sent")
            actions.resetForm()
        } else {
            setError(data?.error_message)
        }
    } catch (error: any) {
      setLoading(false)
      setError(error.message)
    }
  };


  return (
      <>
         {error && <p className="alert alert-danger p-2">{error}</p>}
            {message && <p className="alert alert-success p-2">{message}</p>}
            <Formik
              initialValues={{leaveStartDate: "", leaveEndDate: "", reasonForLeave: "", type: ""}}
              validationSchema={leaveFormSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mb-4">
                    <div className="row">
                      <div className="col form-group mb-3 has-validation">
                        <label htmlFor="leaveStartDate" className="mb-2">
                          From *
                        </label>
                        <TextInput type="date" id="leaveStartDate" name="leaveStartDate" placeholder="" />
                      </div>
                      <div className="col form-group mb-3 has-validation">
                        <label htmlFor="leaveEndDate" className="mb-2">
                          To *
                        </label>
                        <TextInput type="date" id="leaveEndDate" name="leaveEndDate" placeholder="" />
                      </div>
                    </div>
                    <div className="col-8 form-group mb-3 has-validation">
                      <label htmlFor="endDate" className="mb-2">
                          Type *
                      </label>
                      <SelectInput name="type" id="type">
                          <option value="">Time of type</option>
                          {type.map((data: string, index: number) => (
                          <option key={index} value={data}>{data}</option>
                          ))}
                      </SelectInput>
                    </div>
                    <div className="form-group mb-3 has-validation">
                        <label htmlFor="reasonForLeave" className="mb-2">
                        Note *
                        </label>
                        <TextArea id="reasonForLeave" name="reasonForLeave" placeholder="" />
                    </div>
                    <div className="my-5">
                        <button
                            className="btn btn-primary text-center shadow"
                            type="submit"
                            disabled={isSubmitting || loading}
                        >
                        <MdOutlineSend /> {loading ? "Submitting..." : "Send request"}
                        </button>
                        <Link href="/leave-requests" className="text-decoration-none ms-4">Cancel</Link>
                    </div>
                </Form>
              )}
            </Formik>
      </>
  )
}

export default LeaveRequestForm