<template>
  <div class="home">
    <EventCard />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          Id: 5928101,
          category: "animal welfare",
          title: "Cat Adaoption Day",
          desciption: " Find your new feline friend at this event.",
          location: "Meow Town",
          date: "January 28,2022",
          time: "12:00",
          petsAllowed: "true",
          organizer: "kat Laydee",
        },
      ],
    };
  },
};
</script>
