import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../components/ui/Card";

function NewMeetup() {
  return (
    <section>
      <Card>
        <NewMeetupForm />
      </Card>
    </section>
  );
}

export default NewMeetup;
