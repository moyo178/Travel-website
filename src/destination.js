import lagosImage from './image/lagos.jpeg';
import abujaImage from './image/abuja.jpeg';
import calabarImage from './image/calabar.jpeg';

export const featuredDestinations = [
    {
      id: 1,
      name: "Lagos, Nigeria",
      description: "Lagos, the bustling megacity, is Nigeria's largest city and economic hub. Explore its vibrant nightlife, stunning beaches like Tarkwa Bay, and cultural sites like the National Museum Lagos. Enjoy shopping at Lekki Market and savor the diverse culinary scene.",
      image: lagosImage,
      rating: 4.8,
      attractions: ["Lekki Conservation Centre", "Nike Art Gallery", "Tarkwa Bay Beach"],
      link: "https://en.wikipedia.org/wiki/Lagos"
    },
    {
      id: 2,
      name: "Abuja, Nigeria",
      description: "Abuja, the capital city of Nigeria, is known for its modern architecture and lush greenery. Visit the iconic Aso Rock, the stunning Abuja National Mosque, and Millennium Park. Explore the rich culture and history at the Nigerian National Museum.",
      image: abujaImage,
      rating: 4.7,
      attractions: ["Aso Rock", "Abuja National Mosque", "Millennium Park"],
      link: "https://en.wikipedia.org/wiki/Abuja"
    },
    {
      id: 3,
      name: "Calabar, Nigeria",
      description: "Calabar is known for its rich history and vibrant cultural festivals. Visit the Calabar Museum, the beautiful Tinapa Resort, and enjoy the annual Calabar Carnival. Explore the lush landscapes of the Cross River National Park and the Drill Ranch.",
      image: calabarImage,
      rating: 4.6,
      attractions: ["Calabar Museum", "Tinapa Resort", "Calabar Carnival"],
      link: "https://en.wikipedia.org/wiki/Calabar"
    }
  ];