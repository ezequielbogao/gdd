import PropTypes from "prop-types";

const Th = (props) => {
    Th.propTypes = {
        text: PropTypes.string,
    };

    function textToCapi(text) {
        if (text.length === 0) return text;
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <th className="bg-slate-50 dark:bg-slate-700 p-3 border-1 border-slate-200 border-t-0">
            <span className="text-md font-normal leading-none text-slate-500 dark:text-slate-400">
                {textToCapi(props.text)}
            </span>
        </th>
    );
};

export default Th;
