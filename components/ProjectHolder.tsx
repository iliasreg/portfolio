"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Project from "./Project";


const ProjectHolder = () => {

  return (
    <Carousel 
    className="w-[300px] md:w-[1000px]"
    plugins = {[
      Autoplay({delay: 3000}),
    ]}
    opts = {{
      align: "center",
      loop: true,
    }}>
      <CarouselContent>
        <CarouselItem>
          <Project imgSrc="blaniw" title="Blaniw" reference="https://blaniw.vercel.app"/>
        </CarouselItem>
        <CarouselItem>
          <Project imgSrc="winPortfolio" title="windows 95 portfolio" reference=""/>
        </CarouselItem>
        <CarouselItem>
          <Project imgSrc="mongow" title="Mongow" reference=""/>
        </CarouselItem>
        <CarouselItem>
          <Project imgSrc="other" title="Other Projects" reference="https://github.com/iliasreg/"/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default ProjectHolder;
