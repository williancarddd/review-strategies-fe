"use client";

import { BarChartLabel } from "./bar-chart";
import { PieChartLabel } from "./pie-chart";
import { RadarChartLabel } from "./radar-chart";
import { RadialChartLabel } from "./radial-chart";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Dashboard() {
  return (
    <div className="w-full h-full">
      {/* Telas pequenas, aparecer tudo */}
      <div className="lg:hidden p-4 space-y-6">
        <BarChartLabel />
        <PieChartLabel />
        <RadarChartLabel />
        <RadialChartLabel />
      </div>

      {/* Telas grandes */}
      <div className="hidden lg:flex justify-center items-center ">
        <Carousel className="w-full max-w-4xl">
          <CarouselContent className="w-full">
            <CarouselItem >
              <div >
                <RadarChartLabel />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div >
                <RadialChartLabel />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div >
                <BarChartLabel />
              </div>
            </CarouselItem>
            <CarouselItem >
              <div>
                <PieChartLabel />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
