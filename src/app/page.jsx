import EventCard from "@/component/EventCard";
import ExploreBtn from "@/component/ExploreBtn";
import Navbar from "@/component/Navbar";
import { events } from "@/lib/eventData";
import React from "react";

const Page = () => {
  return (
    <section>
      <Navbar />
      <h1 className="text-center">
        The Hub for Every Dev <br /> You can't Miss.
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetup, and Conferences, All in one place.
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
