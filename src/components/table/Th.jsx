import PropTypes from "prop-types";

const Th = (props) => {
    Th.propTypes = {
        text: PropTypes.string,
    };
    return (
        <th className="bg-slate-50 dark:bg-slate-700 p-4">
            <span className="text-md font-light leading-none text-slate-600 dark:text-slate-400">
                {props.text}
            </span>
        </th>
    );
};

export default Th;
