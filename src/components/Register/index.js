import logo from '../../logo.svg';
import '../../App.css';
import {user as api} from "../../api/user";
//import { useHistory } from "react-router-dom";

function Register() {
    //const history = useHistory();
    const login = async () => {
        const res = await api.login({username: 'yue', password: '147147'});
        console.log(res, '------------res');
        if (res.data.success) {
            //setTimeout(() => history.push("/"), 300);
        }
    }
    const register = async () => {
        const res = await api.register({username: 'yue12@gmail.com', password: 'y1244e'});
        if (res.data.success) {
            //setTimeout(() => history.push("/register"), 300);
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code>破狗起飛123456</code>
                </p>
            </header>
        </div>
    );
}

export default Register;
