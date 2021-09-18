import Cookies from "js-cookie";
import { Redirect } from "react-router";


const simpleAuth = () => Cookies.get('jwt') ? "" : <Redirect to="/login"/>

export default simpleAuth