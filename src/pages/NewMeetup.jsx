import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-a7e05-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((result) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <Card>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Card>
    </section>
  );
}

export default NewMeetup;
