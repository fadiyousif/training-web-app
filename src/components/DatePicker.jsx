import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker"
import TextField from "@mui/material/TextField"
import moment from "moment/moment"

export const DatePicker = ({ date, setDate }) => {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}
    >
      <DatePickerMUI
        value={date}
        onChange={(newValue) => {
          setDate(moment(newValue._d).format("L"))
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  )
}
