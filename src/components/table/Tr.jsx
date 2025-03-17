import PropTypes from "prop-types";

const Tr = (props) => {
    const { index, children, ...restProps } = props;

    return (
        <tr
            key={index}
            id={index}
            className="bg-white border-b-1 border-slate-200 dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            {...restProps}>
            {children}
        </tr>
    );
};

export default Tr;
