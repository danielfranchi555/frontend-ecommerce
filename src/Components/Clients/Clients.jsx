import React from "react";
import CarouselCards from "../Carousel/CarouselCards";

const Clients = () => {
  const clients = [
    {
      name: "Liam Brown",
      testimonial:
        "“La tienda siempre tiene una excelente variedad de productos y la atención al cliente es insuperable. Me encanta comprar aquí, siempre encuentro lo que necesito.”",
      image:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Ingeniero de Software, TechStartup Innovations",
      color: `F1F1F1`,
    },
    {
      name: "Michael Thompson",
      testimonial:
        "“El personal de la tienda es muy amable y siempre dispuesto a ayudar. La calidad de los productos es excelente y los precios son muy competitivos.”",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Gerente de Proyecto, SoftwareSolutions LLC",
      color: `F1F1F1`,
    },
    {
      name: "Michael Rodriguez",
      testimonial:
        "“Las ofertas y descuentos que ofrece la tienda son increíbles. Siempre puedo encontrar productos de alta calidad a precios asequibles. ¡Recomiendo esta tienda a todos!”",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Director Creativo, DesignCraft Studio",
      color: `F1F1F1`,
    },
    {
      name: "Alex Nguyen",
      testimonial:
        "“La tienda online es muy fácil de navegar y hacer pedidos es muy sencillo. Además, la entrega siempre es rápida y eficiente. Estoy muy satisfecho con el servicio.”",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      rol: "Consultor de Marketing, Maverick Marketing",
      color: `F1F1F1`,
    },
    {
      name: "Laura Martinez",
      testimonial:
        "“La tienda ofrece una gran variedad de productos ecológicos y sostenibles. Me encanta poder apoyar a una tienda que se preocupa por el medio ambiente.”",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <div className="bg-gray-100 flex flex-col gap-10 w-full py-10">
      <div className="max-w-[95%] flex flex-col gap-8  mx-auto ">
        <h3 className="text-black font-light text-2xl">
          What client says about us
        </h3>
        <CarouselCards clients={clients} />
      </div>
    </div>
  );
};

export default Clients;
