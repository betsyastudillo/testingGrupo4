export function formReg(){
    return(
        <div className="registro">
        <form className="reg"action="#"></form>
        <h2>Registro</h2>

        <div className="input-control">
            <label htmlFor="nombres">Nombres</label>
            <input type="text" name="name" id="name"/>
        </div>

        <div className="input-control">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos"/>
        </div>

        <div className="input-contol">
            <label htmlFor="email">Correo electróncio</label>
            <input type="email" name="email" id="email"/>
        </div>

        <div className="input-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password"/>
        </div>
        
        <div className="input-control">
            <label htmlFor="document">Documento de identidad</label>
            <select name="document" id="document">
                <option value="cc">Cédula de Ciudadanía</option>
                <option value="ce">Cédula de Extranjería</option>
                <option value="passport">Pasaporte</option>
            </select>
        </div>

        <div className="input-control">
            <label htmlFor="noCedula">Número de cédula</label>
            <input type="number" name="number" id="number"/>
        </div>

        <div className="input-control">
            <label htmlFor="phone">Número de Celular</label>
            <input type="number" name="number" id="number"/>
        </div>

        <div className="input-control">
            <label htmlFor="brithdate">Fecha de Nacimiento</label>
            <input type="date" name="txtDate" id="date"/>
        </div>

        <div className="input-control">
            <label htmlFor="terminos">Acepto los Términos y Condiciones del Portal. Para más información</label>
            <input type="checkbox" name="terminos" id="terminos"/>
        </div>

        <div>
            <button type="submit">Registrarse</button>
        </div>
    </div>
    )

}