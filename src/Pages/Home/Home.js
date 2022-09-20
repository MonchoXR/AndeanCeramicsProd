import Kero from '../../Assets/Catologo/3D/Kero.glb';
import { Catalogo } from '../../components/Catalogo/Catalogo';
import SeccionTitle from '../../components/SeccionTitle/SeccionTitle';
import KeroPoster from '../../Assets/Catologo/kero600x600.png'

export const Home =()=>{
  
  const mystyle = {
 
                width: "50%",
                height: "50vh"
  };
   
  return (
    <>
      <main className="index_bannerPrincipal">
        <h1 className="index_tituloTipografia">

          Unique Ceramics from Andean Countries
        </h1>

        <div className="index__mainBloque">
          <div className="index_bannerBloque1">
            <p className="index_bannerText"> Exclusive Andean ceramics.</p>
            <p className="index_bannerText">See a 3D model in your space with our Augmented Reality</p>
          </div>

          <div className="index_bannerBloque2">
            <model-viewer 
               style={mystyle}
              
            
              src={Kero}
              poster={KeroPoster}
              ar
              ar-scale="fixed"
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              environment-image="neutral"
              shadow-intensity="0"
              exposure="0.3"
              auto-rotate
              ar-status="not-presenting"            
              className="ModelV"
             
            >
              
              <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
              </div>
              <button slot="ar-button" id="ar-button">
                View in your space
              </button>
           
            </model-viewer>
            

          </div>
        </div>
      </main>
      <SeccionTitle/>
      <Catalogo/>
    </>
  );
}