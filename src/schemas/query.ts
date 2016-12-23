export const rootQuerySchema = `
  # List of possible queries
  type Query {
    # Get the test Car
    getTestCar: Car
    add(a: Int!, b: Int!): Int
  }
`;
