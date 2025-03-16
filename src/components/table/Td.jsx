import PropTypes from "prop-types";

const Td = (props) => {
    Td.propTypes = {
        content: PropTypes.any,
        children: PropTypes.object,
        selected: PropTypes.bool,
    };
    return props.children ? (
        <td className="p-3">{props.children}</td>
    ) : (
        <td className={`p-3 ${props.selected && 'bg-slate-300'}`}>
            <span className="font-medium text-sm text-slate-500 dark:text-slate-200">
                {props.content}
            </span>
        </td>
    );
};

export default Td;
