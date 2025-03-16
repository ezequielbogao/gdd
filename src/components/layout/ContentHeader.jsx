import PropTypes from "prop-types";

const ContentHeader = (props) => {
    ContentHeader.propTypes = {
        label: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
    };
    return (
        <div className="p-3 px-5 text-left border-b-2 border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-700">
            <div className="flex flex-col text-left">
                <span className="text-md text-slate-400 font-light">
                    {props.label}
                </span>
                <span className="text-2xl text-slate-700 dark:text-slate-300 font-medium">
                    {props.title}
                </span>
                <span className="text-md text-slate-400 font-light">
                    {props.subtitle && props.subtitle}
                </span>
            </div>
        </div>
    );
};

export default ContentHeader;
