import { Navigate, useNavigate } from "react-router-dom"



export const LoginPage = () => {

  const navigate = useNavigate();

  const onNavigateHome = () => {
    navigate('/home', {
      replace: true
    })
  };

  return (
    <>

      <div className="container mt-2">

        <form>
          <h1>Iniciar sesión</h1>
          <div className="form-group">
            <label>Dirección de Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingresa Email"></input>
            <small className="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" autoComplete="off"></input>
          </div>

          {/* This a checkBox */}

          {/* <div className="form-check"> */}
          {/* <input type="checkbox" className="form-check-input"></input> */}
          {/* <label className="form-check-label">Mostrar contraseña</label>  */}
          {/* </div> */}
          <div>

          <button type="submit" className="btn btn-primary m-2" onClick={onNavigateHome}>Enviar</button>
          <a href="/singin">No tienes una cuenta?</a>
          </div>
        </form>
      </div>

    </>
  )
};
