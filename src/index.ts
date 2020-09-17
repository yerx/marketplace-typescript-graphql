import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const resolvers = {
//   Query: {
//     hello: (_: any, { name }: any) => `Bye ${name || "World"}`,
//   },
// };

// const server = new GraphQLServer({ typeDefs, resolvers });
// server.start(() => console.log("Server is running on localhost:4000"));
