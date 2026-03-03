const Login = () =>{

    //api que chama o login
    
    return (
        <>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="">E-mail</label>
                <input type="text" id="email"/>
                <br />
                <label htmlFor="">Senha</label>
                <input type="text" id="senha"/>
                <br />
                <button>Entrar</button>
            </form>
        </>
    )
}

export default Login