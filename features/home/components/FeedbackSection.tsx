"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SECTION_TITLE } from "@/lib/constants";

const feedbackCustomers = [
  {
    id: 1,
    title: "Excellent Shopping Experience!",
    description: "I’ve ordered multiple times from Samirah and every single time has been flawless. The site is easy to use, delivery is fast, and the quality is always top-notch. Highly recommended!",
    urlImage: "https://picsum.photos/id/64/4326/2884",
    name: "Sarah M"
  },
  {
    id: 2,
    title: "Outstanding Customer Service",
    description: "When I had an issue with my order, the Samirah team responded quickly and resolved it without any hassle. It’s rare to find such responsive support in online shopping!",
    urlImage: "https://picsum.photos/id/259/3264/2448",
    name: "Daniel K"
  },
  {
    id: 3,
    title: "Top Quality Products and Fast Delivery",
    description: "The products were exactly as described, beautifully packaged, and arrived earlier than expected. I’ll definitely be shopping again!",
    urlImage: "https://picsum.photos/id/65/4912/3264",
    name: "Amina R"
  },
  {
    id: 4,
    title: "My Go-To Online Store!",
    description: "I’ve been shopping at Samirah for over a year now. Their products are consistently high quality and stylish. I always find something I love!",
    urlImage: "https://picsum.photos/id/349/3264/2176",
    name: "Sumantri S"
  },
  {
    id: 5,
    title: "Reliable and Trustworthy",
    description: "Samirah delivers what they promise. The checkout process is smooth, the items arrive on time, and you get exactly what you ordered. Great service!",
    urlImage: "https://picsum.photos/id/334/2304/1536",
    name: "Yusuf T"
  }
]

export default function FeedbackSection() {

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{SECTION_TITLE.HOMEPAGE_FEEDBACK_SECTION}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[92%] my-0 mx-auto"
      >
        <CarouselContent>
          {feedbackCustomers.map((feedbackCustomer) => (
            <CarouselItem key={feedbackCustomer.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="flex flex-col gap-3 aspect-3/2 items-start justify-center p-6">
                  <h3 className="text-2xl font-semibold italic text-indigo-800">"{feedbackCustomer.title}"</h3>
                  <div>{feedbackCustomer.description}</div>
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={feedbackCustomer.urlImage} alt="Avatar Image Feedback" />
                      <AvatarFallback>Avatar Image Feedback</AvatarFallback>
                    </Avatar>
                    <span>{ feedbackCustomer.name }</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}