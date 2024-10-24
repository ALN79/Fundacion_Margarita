import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function OneGoalPage() {
  return (
    <>
      <Header />
      <div className="bg-custom-bg- bg-bottom min-h-screen">
        <div className="p-4">
          <div className="bg-yellow-400 flex justify-center shadow-lg rounded-md">
            <h1 className="text-3xl md:text-4xl text-white p-4">
              Mi causa Titulo
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:items-center md:space-x-8 md:px-8 lg:px-16 py-8">
          <section className="flex items-center justify-center md:w-1/2">
            <label>
              <img
                className="w-96 h-96 object-cover rounded-md shadow-lg mb-4"
                src="https://via.placeholder.com/400x200"
                alt="Imagen de la causa"
              />
              <div className="bg-yellow-400 rounded-md shadow-lg inline-block hover:bg-yellow-500 transform  hover:text-white hover:scale-95 transition-all">
                <button className="px-4 py-2 text-white">
                  ¡Quiero ayudar!
                </button>{" "}
              </div>
            </label>
          </section>

          <div className="flex flex-col justify-center md:w-1/2 h-96 w-96 bg-yellow-400 p-4 rounded-md bg-opacity-75">
            <section className="flex justify-center w-full h-full">
              <div className="flex flex-col px-4 md:px-0 space-y-6 h-full justify-center text-white">
                <p className="text-xl">
                  Descripción: Aquí va la descripción de mi causa con toda la
                  información necesaria para que pueda ser descrita y que la
                  gente la pueda conocer aquí Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae laboriosam sapiente
                  impedit magnam tempora deserunt velit ullam vel obcaecati,
                  magni expedita soluta cum natus laudantium earum saepe laborum
                  provident tempore! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Enim maiores vero eius aspernatur, accusamus
                  vel provident commodi quibusdam laudantium nobis deserunt
                  voluptates doloremque distinctio repellendus voluptatem
                  tempora aliquid unde magnam. lore
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
