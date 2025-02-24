import PropTypes from "prop-types";

const Tr = (props) => {
    Tr.propTypes = {
        children: PropTypes.any,
    };
    return (
        <tr className="bg-white border-b-1 border-slate-200 dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
            {props.children}
        </tr>
    );
};

export default Tr;
