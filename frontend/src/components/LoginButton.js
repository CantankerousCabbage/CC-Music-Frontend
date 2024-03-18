

const LoginButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Login");
    }

    return (
        <div className="" onClick={onClick}>

        </div>
    )
}

export default LoginButton;