import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react"; 
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"; 

export function Footer() {
  return (
    <FlowbiteFooter container className="bg-zinc-300 text-black">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              src="/img/logoPagina.svg"
              alt="Logo"
              className="h-24"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="Nosotros" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Nuestra Misión</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Nuestro equipo</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Síguenos" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Facebook</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Instagram</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Política de privacidad</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Términos &amp; Condiciones</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>

        <FlowbiteFooter.Divider className="border-gray-400 mt-12 mb-6" />
        <div className="flex space-x-6 mt-0 justify-center">
          <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
          <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
          <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-center mt-4">
          <FlowbiteFooter.Copyright href="#" by="All Rights Reserved. FundaciónMargarita" year={2024} />
        </div>
      </div>
    </FlowbiteFooter>
  );
}
