import PropTypes from "prop-types";

const Charts = (props) => {
    Charts.propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ? props.width : "25"}
            height={props.height ? props.height : "25"}
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-table-alias text-slate-600 dark:text-slate-100">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12v-7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-7" />
            <path d="M3 10h18" />
            <path d="M10 3v10" />
            <path d="M2 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4z" />
        </svg>
    );
};

export default Charts;
