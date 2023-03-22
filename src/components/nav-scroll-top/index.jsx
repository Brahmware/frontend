import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

const NavScrollTop = (props) => {

    const location = useLocation();

    useEffect(() => {
        !location?.hash && window.scrollTo(0, 0);
    });
    return props.children;
};

export default withRouter(NavScrollTop);
