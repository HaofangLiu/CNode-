import moment from "moment";
function FromNow(props) {
  let { date } = props;
  return moment(date).fromNow();
}
export default FromNow;
