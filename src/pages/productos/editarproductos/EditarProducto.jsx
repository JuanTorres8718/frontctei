import "./editarProducto.scss";

export default function EditarProducto() {
  return (
    <div className="editProduct">
      <h1 className="editProductTitle">Editar Producto</h1>
      <div className="contentEditProduct">
        <form action="">
          <div className="contentEditProductGroup">
            <p className="pLetter">Codigo del Producto</p>
            <input
              type="text"
              name="nombre_completo"
              className="contentEditProductInput"
              placeholder="Ingresar el nombre completo"
            />
          </div>
          <div className="contentEditProductGroup">
            <p className="pLetter">Nombre del producto</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentEditProductInput"
              placeholder="Ingresar el correo electrónico SENA"
            />
          </div>
          <div className="contentEditProductGroup">
            <p className="pLetter">Descripción del producto</p>
            <textarea name="descripcion" id="" cols="30" rows="10">Escribe aquí la descripción del producto...</textarea>
          </div>
          <div className="contentEditProductGroup">
            <p className="pLetter">Tipologia del producto</p>
            <select
              className="contentEditProductSelect"
              name="centro_formacion"
              id="centro_formacion"
            >
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
              Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
              Seleccione la tipologia del producto
              </option>
              <option value="antiquia">Seleccione la tipologia del producto</option>
              <option value="antiquia">
              Seleccione la tipologia del producto
              </option>
              <option value="antiquia">Seleccione la tipologia del producto</option>
            </select>
          </div>
          <div className="contentDataBankCheckAll">
                <p className="pLetter">¿El producto esta asociado algún proyecto?</p>
            <input className="checkbox" name="asociado" type="checkbox" />
            <input className="checkbox" name="asociado" type="checkbox" />
            
              </div>
            <div className="contentEditProductGroup">
            <p className="pLetter">Proyecto asociado</p>
            <select
              className="contentEditProductSelect"
              name="centro_formacion"
              id="centro_formacion"
            >
              <option value="antiquia">
                Seleccione el proyecto a asociar
              </option>
              <option value="antiquia">
              Seleccione el proyecto a asociar
              </option>
              <option value="antiquia">
              Seleccione el proyecto a asociar
              </option>
              <option value="antiquia">Seleccione el proyecto a asociar</option>
              <option value="antiquia">
              Seleccione el proyecto a asociar
              </option>
              <option value="antiquia">Seleccione el proyecto a asociar</option>
            </select>
          </div>

          <button className="contentEditProductButton">Editar</button>
        </form>
      </div>
    </div>
  );
}
