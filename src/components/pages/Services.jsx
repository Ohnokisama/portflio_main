import React, { useEffect } from 'react'
import ServiceCard from '../extras/ServiceCard'

const Services = () => {
  useEffect(() => {
    document.title = "Services | Onuoha Jephthah"
  }, []);

  const services = [
    {
      icon: "ri-code-s-slash-line",
      title: "Web Development",
      description:
        "I build responsive, high-performance websites and web applications using React, Next.js, and Tailwind CSS, with a focus on scalability, accessibility, and clean code.",
    },
    {
      icon: "ri-edit-2-line",
      title: "Product Design",
      description:
        "I design intuitive user experiences and modern interfaces that solve real problems, ensuring every product is both functional and visually engaging.",
    },
    {
      icon: "ri-palette-line",
      title: "Brand Identity Design",
      description:
        "I create cohesive brand identities, including logos, color systems, and visual guidelines that help businesses establish a memorable and professional presence.",
    },
    {
      icon: "ri-collage-line",
      title: "Graphic Design",
      description:
        "I design marketing materials, social media graphics, presentations, and promotional assets that communicate your message clearly and strengthen your brand.",
    },
  ];

  return (
    <div className="pt-28 px-6 h-auto flex flex-col items-center gap-8 pb-20 md:pb-0 md:h-[100vh] md:px-[8.5rem] md:flex-row md:gap-12">
      <div className="w-full md:w-[30%]">
        <h1 className="text-3xl md:text-4xl font-bold">My Services</h1>
        <p className="my-5">
          I help businesses and startups transform ideas into modern digital
          experiences. From designing intuitive interfaces to building fast,
          responsive web applications, I focus on creating products that are
          visually appealing, user-friendly, and built for growth.
        </p>
      </div>
      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
          >
            {service.description}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
}

export default Services