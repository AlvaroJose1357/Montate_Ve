import react from "react";
import { Accordion } from "./Accordion";
import Primera from "../img/Primera.png";
import Bartali from "../img/Bartali.png";
import Thomas from "../img/Thomas.png";

export default function Hero() {
  return (
    <section className="grid grid-flow-cols-1 md:grid-cols-8 w-full max-h-full">
      <div className="bg-[#143959] md:col-span-5 flex items-start justify-left p-8 max-w-full max-h-full ">
        <div className=" max-w-full max-h-full ">
          <h1 className="text-white text-8xl font-bold">¡Bienvenidos!</h1>
          <p className=" text-gray-500 text-xl leading-[rem] p-9">
            En nuestro taller especializado en el cuidado y mantenimiento de
            bicicletas, nos apasiona ayudarte a mantener tu bici en excelente
            estado y asegurarte de que sigas disfrutando de tus paseos y
            aventuras sobre ruedas, es por esto que te ofrecemos un amplio
            portafolio de productos, en los cuales podrás navegar y elegir uno a
            tu gusto. Nuestro equipo de mecánicos altamente capacitados y
            entusiastas está listo para brindarte un servicio de reparación de
            bicicletas de la más alta calidad. Ya sea que necesites una
            reparación básica, una revisión completa o una solución para un
            problema específico, estamos aquí para resolverlo. Nos enorgullece
            ofrecer un servicio rápido y confiable, utilizando herramientas y
            técnicas avanzadas para garantizar que tu bicicleta reciba el mejor
            tratamiento posible.
          </p>
          <h2 className="text-white text-4xl font-bold p-12">Datos Curiosos</h2>

          <div className="flex max-w-4xl mx-auto gap-8 group">
            <div className="bg-slate-400 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src={Primera} alt="Primera" className="h-30 mx-auto" />
              <h3 className="uppercase text-white text-xl font-bold">
                Primer Prototipo
              </h3>
              <p className=" text-gray-500 text-sm leading-7 my-3">
                El primer prototipo de bicicleta fue diseñado por el alemán Karl
                von Drais en 1817. Se le llamó Laufmaschine, que significa
                literalmente "máquina de correr".
              </p>
            </div>
            <div className=" bg-slate-400 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src={Bartali} alt="Bartali" className="h-30 mx-auto" />
              <h3 className="uppercase text-white text-xl font-bold">
                Ciclismo Salvó Vidas
              </h3>
              <p className=" text-gray-500 text-sm leading-7 my-3">
                {" "}
                Gino Bartali, perteneció a una red clandestina en la que se
                encargó de salvar a centenares de judíos de la barbarie Nazi. El
                italiano se encargaba de fabricar documentos de identidad falsos
                para así ayudarlos a escapar.
              </p>
            </div>
            <div className=" bg-slate-400 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src={Thomas} alt="Thomas" className="h-30 mx-auto" />
              <h3 className="uppercase text-white text-xl font-bold">
                Thomas Stevens
              </h3>
              <p className=" text-gray-500 text-sm leading-7 my-3">
                {" "}
                El 7 de enero de 1877 el estadounidense Thomas Stevens realizó
                el primer viaje en bicicleta alrededor del mundo. Tardó tres
                años en completarlo.
              </p>
            </div>
          </div>
          <h2 className="text-orange-500 text-4xl font-bold p-12">
            Preguntas Frecuentes
          </h2>
          <Accordion
            data={[
              {
                title: "¿Cuánto tiempo tardará en repararse mi bicicleta?",
                content: (
                  <p className="bg-[#faf0e6] text-gray-500">
                    El tiempo de reparación puede variar según la complejidad
                    del problema y la carga de trabajo actual en el taller. En
                    general, intentamos completar las reparaciones lo más rápido
                    posible. Te daremos un estimado del tiempo de reparación
                    cuando traigas tu bicicleta al taller.
                  </p>
                ),
              },
              {
                title:
                  "¿Reparan todo tipo de bicicletas, incluyendo bicicletas eléctricas?",
                content: (
                  <p className="text-gray-500">
                    Sí, nuestro equipo de mecánicos está capacitado para reparar
                    y dar mantenimiento a todo tipo de bicicletas, incluyendo
                    bicicletas eléctricas. Contamos con los conocimientos
                    técnicos necesarios para manejar los componentes eléctricos
                    y electrónicos de manera adecuada.
                  </p>
                ),
              },
              {
                title:
                  "¿Cuál es su política de garantía en las reparaciones realizadas?",
                content: (
                  <p className="text-gray-500">
                    Respaldamos nuestro trabajo y nos esforzamos por ofrecer
                    reparaciones de alta calidad. Si experimentas algún problema
                    relacionado con la reparación realizada, contáctanos y nos
                    ocuparemos de ello. Nuestra política de garantía puede
                    variar según el tipo de reparación.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="bg-[#BEBDBF] md:col-span-3"></div>
    </section>
  );
}