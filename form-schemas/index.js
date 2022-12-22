import * as yup from "yup";

export const leaveFormSchema = yup.object().shape({
    type: yup.string().oneOf(["sick leave", "child birth", "Annual", "holiday"], { message: "Select one of the following" }).required("Required"),
    leaveStartDate: yup.date().required("Enter start date"),
    leaveEndDate: yup.date().required("Enter end date"),
    reasonForLeave: yup.string().required("Enter note"),
})

