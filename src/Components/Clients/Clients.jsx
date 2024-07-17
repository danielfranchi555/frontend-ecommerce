import React from "react";
import CarouselCards from "../Carousel/CarouselCards";

const Clients = () => {
  const clients = [
    {
      name: "Liam Brown",
      testimonial:
        "“The 24/7 access and secure facilities have been incredibly convenient for my teams flexible schedules. We love the coworking space!”",
      image:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Software Engineer, TechStartup Innovations",
      color: `F1F1F1`,
    },
    {
      name: "Michael Thompson",
      testimonial:
        " “The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.”",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Project Manager, SoftwareSolutions LLC",
      color: `F1F1F1`,
    },
    {
      name: "Michael Rodriguez",
      testimonial:
        "“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: " Creative Director, DesignCraft Studio",
      color: `F1F1F1`,
    },
    {
      name: "Alex Nguyen",
      testimonial:
        " “The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.”",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      rol: "Marketing Consultant, Maverick Marketing",
      color: `F1F1F1`,
    },
    {
      name: "Alex Nguyen",
      testimonial:
        " “The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.”",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rol: "Marketing Consultant, Maverick Marketing",
      color: `F1F1F1`,
    },
  ];
  return (
    <div className="bg-gray-200 flex flex-col gap-10 w-full">
      <div className="max-w-[80%] flex flex-col gap-8  mx-auto py-10">
        <h3 className="text-black font-light text-2xl">
          What client says about us
        </h3>
        <CarouselCards clients={clients} />
      </div>
    </div>
  );
};

export default Clients;
