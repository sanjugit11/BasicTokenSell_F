import { lazy } from "react";

const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
const Faq = lazy(() => import("./Faq/Faq"));
const Team = lazy(() => import("./Team/Team"));

export { LandingPage, Faq, Team };
