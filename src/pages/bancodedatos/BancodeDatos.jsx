import "./bancodeDatos.scss";

export default function BancodeDatos() {
  const rol = "admin";
  return (
    <div className="dataBank">
      <h1 className="dataBankTitle">Descargar Banco de datos</h1>
      <div className="contentDataBank">
        {rol === "admin" ? (
          <>
            <select
              className="contentDataBankRegional"
              name="regional"
              id="regional"
            >
              <option value="antiquia">Regional Antiquia</option>
              <option value="antiquia">Regional Distrito Capital</option>
              <option value="antiquia">Regional Cundinamarca</option>
              <option value="antiquia">Regional Cauca</option>
            </select>
            <h2>
              Selecciones los centros de formación que desea obtener los datos
            </h2>
            <form action="">
              <div className="contentDataBankInfoCheck">
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de servicios y gestión empresarial
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de los Recursos Naturales Renov...
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de Diseño y Manufactura del Cuero
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">Centro de Comercio</p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de Formación en Diseño, Confecci...
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de la Innovación. La Agroindustri...
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">Centro de Servicios de Salud</p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro de Tecnología de la Manufactura...
                  </p>
                </div>
                <div className="contentDataBankCheck">
                  <input className="checkbox" type="checkbox" />
                  <p className="checkboxLetter">
                    Centro Tecnológico del Mobiliario
                  </p>
                </div>
              </div>
              <div className="contentDataBankCheckAll">
                <input className="checkbox" type="checkbox" />
                <p className="checkboxLetter">Todos los centros</p>
              </div>

              <div className="contentDataBankRubro">
                <h3>Seleccione el Codigo del Rubro(opcional)</h3>
                <select
                  className="contentDataBankRubroSelect"
                  name="rubro"
                  id="rubro"
                >
                  <option value="antiquia">66 - Investigación aplicada</option>
                  <option value="antiquia">66 - Investigación aplicada</option>
                  <option value="antiquia">66 - Investigación aplicada</option>
                  <option value="antiquia">66 - Investigación aplicada</option>
                </select>
              </div>
              <button className="contentDataBankButton">Descargar</button>
            </form>
          </>
        ) : (
          <>
            <div className="contentDataBankRubro">
              <h3>Seleccione el Codigo del Rubro(opcional)</h3>
              <select
                className="contentDataBankRubroSelect"
                name="rubro"
                id="rubro"
              >
                <option value="antiquia">66 - Investigación aplicada</option>
                <option value="antiquia">66 - Investigación aplicada</option>
                <option value="antiquia">66 - Investigación aplicada</option>
                <option value="antiquia">66 - Investigación aplicada</option>
              </select>
            </div>
            <button className="contentDataBankButton">Descargar</button>
          </>
        )}
      </div>
    </div>
  );
}
