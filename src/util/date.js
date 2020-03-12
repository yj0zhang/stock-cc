import { format } from "date-fns";

function formatDate(date, mat = "yyyy/MM/dd") {
  if (!date) {
    return date
  }
  return format(new Date(date), mat)
}
export default {
  formatDate
}
