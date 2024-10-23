const books = [
  {
    title: "The Awakening",
    author: "Bedu",
  },
  {
    title: "Aku Sebuah Pena",
    author: "Azroy",
  },
  {
    title: "Pemain Bola",
    author: "Ipan",
  },
];

const regardless = [
  {
    name: "Ipan",
    age: 30,
    job: "Software Engineer",
    isWorking: true,
  },
];

const testResolver = {
  Query: {
    books: () => books,
    regardless: () => regardless,
  },
};

export default testResolver;
