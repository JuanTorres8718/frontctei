import "./nuevoProducto.scss";

export default function NuevoProducto() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Registrar Nuevo Producto</h1>
      <div className="contentNewProduct">
        <form action="">
          <div className="contentNewProductGroup">
            <p className="pLetter">Codigo del Producto</p>
            <input
              type="text"
              name="nombre_completo"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre completo"
            />
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Nombre del producto</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentNewProductInput"
              placeholder="Ingresar el correo electrónico SENA"
            />
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Descripción del producto</p>
            <textarea name="descripcion" id="" cols="30" rows="10">Escribe aquí la descripción del producto...</textarea>
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Tipologia del producto</p>
            <select
              className="contentNewProductSelect"
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
            <div className="contentNewProductGroup">
            <p className="pLetter">Proyecto asociado</p>
            <select
              className="contentNewProductSelect"
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

          <button className="contentNewProductButton">Registrar</button>
        </form>
      </div>
    </div>
  );
}
