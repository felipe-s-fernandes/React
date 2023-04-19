import { useState } from "react";
import Button from "@mui/material/Button";

interface FormProps {
    onSubmit: (username: string, password: string) => void;
}

function Form({onSubmit} : FormProps) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    return (
        <div className="login-form">  
            <div className="input-box">
                <label htmlFor="username">Usuário:</label>
                <input type="text" name="username" value={username} onChange={usernameChange} />
            </div>
            <div className="input-box">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" value={password} onChange={passwordChange}/>
            </div>
            <Button variant="contained" onClick={() => onSubmit(username, password)} >Enviar</Button>
        </div>
    )
}

export default Form;