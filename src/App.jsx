import AOS from "aos";
import { lazy } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//CSS File Here
/* import "./assets/css/style.min.css"; */
import "aos/dist/aos.css";
import "./assets/css/plugins/animate.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/scss/style.scss";

// UI Components Here
import RequireAuth from "./features/auth/RequireAuth";
import PersistLogin from "./features/auth/PersistLogin";
import { rolesList } from "./utils/rolesList";

const HomePage = lazy(() => import("./pages/index"));
const AboutPage = lazy(() => import("./pages/about"));
const PricingPage = lazy(() => import("./pages/pricing"));
const ContactPage = lazy(() => import("./pages/contact"));
const WorksPage = lazy(() => import("./pages/works.jsx"));
const ProjectDetails = lazy(() => import("./templates/project-details"));
const OurServices = lazy(() => import("./pages/services"));
const careerPage = lazy(() => import("./pages/career"));
const privacyPolicy = lazy(() => import("./pages/privacyPolicy"));
const Brahmnauts = lazy(() => import("./pages/brahmnauts"));
const MissionControl = lazy(() => import("./pages/MissionControl/index"));
const Unauthorized = lazy(() => import("./pages/Unauthorized"));

const App = () => {

    useEffect(() => {

        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();

    }, []);

    return (
        <Switch>
            <Route
                path={`${process.env.PUBLIC_URL + "/"}`}
                exact
                component={HomePage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/about"}`}
                component={AboutPage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/services"}`}
                component={OurServices}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/pricing"}`}
                component={PricingPage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/works"}`}
                component={WorksPage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/project-detalis/:id"}`}
                component={ProjectDetails}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/brahmnauts"}`}
                component={Brahmnauts}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/career"}`}
                component={careerPage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/contact"}`}
                component={ContactPage}
            />
            <Route
                path={`${process.env.PUBLIC_URL + "/privacy-policy"}`}
                component={privacyPolicy}
            />
            <PersistLogin path={`${process.env.PUBLIC_URL + "/mission-control"}`}>
                <RequireAuth
                    path={'/'}
                    allowedRoles={[
                        rolesList.Handler,
                        rolesList.Admin
                    ]}
                >
                    <MissionControl />
                </RequireAuth>
            </PersistLogin>
            <Route
                path={`${process.env.PUBLIC_URL + "/unauthorized"}`}
                component={Unauthorized}
            />
        </Switch>
    )
};

export default App;

/* 
const BlogDetails = lazy(() => import("./templates/blog-details"));
const BlogCategory = lazy(() => import("./templates/blog-category"));
const BlogDate = lazy(() => import("./templates/blog-date"));
const BlogAuthor = lazy(() => import("./templates/blog-author"));
const BlogTag = lazy(() => import("./templates/blog-tag"));
const BlogPage = lazy(() => import("./pages/blog")); 
 
<Route
    path={`${process.env.PUBLIC_URL + "/blog"}`}
    component={BlogPage}
/>
<Route
    path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
    component={BlogDetails}
/>
<Route
    path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
    component={BlogCategory}
/>
<Route
    path={`${process.env.PUBLIC_URL + "/date/:date"}`}
    component={BlogDate}
/>
<Route
    path={`${process.env.PUBLIC_URL + "/author/:author"}`}
    component={BlogAuthor}
/> 
<Route
    path={`${process.env.PUBLIC_URL + "/loading"}`}
    component={LoadingPage}
/> 
*/

