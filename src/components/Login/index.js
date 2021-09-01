import logo from '../../logo.svg';
import '../../App.css';
import {useHistory} from "react-router-dom";
import {user as api} from "../../api/user";
//import { useHistory } from "react-router-dom";
import './index.css';

function Login() {
    //const history = useHistory();
    const login = async () => {
        const res = await api.login({username: 'yue', password: '147147'});
        console.log(res, '------------res');
        if (res.data.success) {
            //setTimeout(() => history.push("/login"), 300);
        }
    }
    const register = async () => {
        const res = await api.register({username: 'yue12@gmail.com', password: 'y1244e'});
        if (res.data.success) {
            //setTimeout(() => history.push("/register"), 300);
        }
    }
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        帳號
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        密碼
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password"/>
                </div>
                <div className="flex items-center justify-between">
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        註冊
                    </a>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        登入
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
