import s from "./Filter.module.css";

import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/action";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);

  const input = (e) => {
    const value = e.currentTarget.value;
    dispatch(action.filter(value));
  };

  const dispatch = useDispatch();
  return (
    <label htmlFor="filter">
      <h3 className={s.title}>Find contact by name</h3>
      <input
        name="filter"
        className={s.input}
        type="text"
        value={value}
        onChange={input}
      />
    </label>
  );
};

export default Filter;

// filter.prototype = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
