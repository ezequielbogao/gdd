import PropTypes from "prop-types";

const Inter = (props) => {
    Inter.propTypes = {
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart-rate-monitor text-slate-600 dark:text-slate-100">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
            <path d="M7 20h10" />
            <path d="M9 16v4" />
            <path d="M15 16v4" />
            <path d="M7 10h2l2 3l2 -6l1 3h3" />
        </svg>
    );
};

export default Inter;
