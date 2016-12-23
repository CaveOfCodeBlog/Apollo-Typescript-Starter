import { Express } from "express";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { Resolvers } from "./resolvers";
import { aggregatedSchemas } from "./schemas";

export class ApolloServer {
  constructor(app: Express, port: number) {

    const resolvers = new Resolvers();

    const executableSchema = makeExecutableSchema({
      typeDefs: aggregatedSchemas,
      resolvers: resolvers.get(),
      resolverValidationOptions: { requireResolversForNonScalar: false },
    });

    app.use("/graphql", graphqlExpress((req) => {
      return {
        schema: executableSchema,
      };
    }));

    app.use("/graphiql", graphiqlExpress({
      endpointURL: "/graphql",
    }));

    app.listen(port, () => {
      console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`);
      console.log(`GraphiQL Server is now running on http://localhost:${port}/graphiql`);
    });
  }
}
