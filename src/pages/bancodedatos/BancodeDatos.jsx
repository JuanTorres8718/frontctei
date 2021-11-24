import { useContext, useEffect } from "react";
// import { AuthContext } from "../../context/authContext/AuthContext";
import "./bancodeDatos.scss";
import { ProyectoContext } from "../../context/proyectoContext/proyectoContext";
import { getProjects } from "../../context/proyectoContext/apiCalls";
import DownloadProject from "../../components/downloadData/DownloadProject";
import { TalentContext } from "../../context/talentoContext/TalentContext";
import { getTalents } from "../../context/talentoContext/apiCalls";
import DownloadTalents from "../../components/downloadData/DownloadTalents";
import { MaquinaryContext } from "../../context/maquinariaContext/MaquinaryContext";
import { getMaquinarys } from "../../context/maquinariaContext/apiCalls";
import DownloadMaquinary from "../../components/downloadData/DownloadMaquinary";
import { ProductoContext } from "../../context/productoContext/ProductoContext";
import { getProducts } from "../../context/productoContext/apiCalls";
import DownloadProducts from "../../components/downloadData/DownloadProducts";

export default function BancodeDatos() {
  // const { user } = useContext(AuthContext);
  const { projects, dispatch } = useContext(ProyectoContext);
  const { products, dispatch: dispatchProduct } = useContext(ProductoContext);
  const { talents, dispatch: dispatchTalent } = useContext(TalentContext);
  const { maquinarys, dispatch: dispatchMaquinary } =
    useContext(MaquinaryContext);

  useEffect(() => {
    getProjects(dispatch);
    getTalents(dispatchTalent);
    getMaquinarys(dispatchMaquinary);
    getProducts(dispatchProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dataBank">
      <h1 className="dataBankTitle">Descargar Banco de datos</h1>
      {/* {user.codigo_rol === 1 ? (
        <div className="contentDataBank">
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
                <option value="antiquia">66 - Investigación</option>
                <option value="antiquia">66 - Investigación</option>
                <option value="antiquia">66 - Investigación</option>
                <option value="antiquia">66 - Investigación</option>
              </select>
            </div>
            <button className="contentDataBankButton">Descargar</button>
          </form>
        </div>
      ) : ( */}

      <div className="contentDataBankUser">
        <h2>Selecciona que datos desea descargar</h2>
        <div className="contentDataBankInfoCheck">
          <div className="contentDataBankCheck">
            <DownloadProject projects={projects} />
          </div>
          <div className="contentDataBankCheck">
            <DownloadProducts products={products} />
          </div>
          <div className="contentDataBankCheck">
            <DownloadTalents talents={talents} />
          </div>
          <div className="contentDataBankCheck">
            <DownloadMaquinary maquinary={maquinarys} />
          </div>
        </div>
      </div>
      {/* )} */}
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}
