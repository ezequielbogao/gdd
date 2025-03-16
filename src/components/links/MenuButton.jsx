import { Tooltip } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuButton = (props) => {
    MenuButton.propTypes = {
        icon: PropTypes.object,
        label: PropTypes.string,
        title: PropTypes.string,
        to: PropTypes.string,
        count: PropTypes.number,
        path: PropTypes.string,
    };
    return (
        <Tooltip
            content={`${props.title}   ${
                props.count ? "(" + props.count + ")" : ""
            }`}
            placement="right"
            className={`block md:hidden bg-white  text-slate-600 dark:text-white dark:bg-slate-600 text-md`}>
            <Link
                to={props.to}
                className={`mb-3 flex py-2 px-3 md:p-2 justify-center ${
                    props.path === props.to
                        ? "bg-slate-100 dark:bg-slate-600"
                        : ""
                } md:justify-between md:items-center gap-3 transition-colors duration-300 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-500 sm:rounded-none md:rounded-xl`}>
                <div className="flex gap-2 align-middle items-center">
                    {props.icon}
                    <div className="content flex-col text-left hidden md:block">
                        <span className="text-sm text-slate-400 font-light">
                            {props.label}
                        </span>
                        <div className="flex justify-between">
                            <span
                                className={`text-xs ${
                                    props.path === props.to
                                        ? "text-slate-500 font-bold dark:text-slate-100"
                                        : " text-slate-600 dark:text-slate-100 font-medium"
                                } `}>
                                {props.title}
                            </span>
                        </div>
                    </div>
                </div>
                {/* {props.count ? (
                    <span className="text-sm text-slate-600 dark:text-slate-100 hidden md:block">
                        {props.count}
                    </span>
                ) : (
                    <></>
                )} */}
            </Link>
        </Tooltip>
    );
};

export default MenuButton;
