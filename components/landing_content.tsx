"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dragon",
    avatar: "D",
    title: "Revolutioner Army",
    description: "This is the best app I have ever used",
  },
  {
    name: "Dragon",
    avatar: "R",
    title: "Revolutioner Army",
    description: "This is the best app I have ever used",
  },
  {
    name: "Dragon",
    avatar: "A",
    title: "Revolutioner Army",
    description: "This is the best app I have ever used",
  },
  {
    name: "Dragon",
    avatar: "G",
    title: "Revolutioner Army",
    description: "This is the best app I have ever used",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.avatar} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
