// Import schema definition
import { rootSchema } from "./rootSchema";

// Import query and mutation
import { rootQuerySchema } from "./query";

// Import types
import { carSchema } from "./car";
import { userSchema } from "./user";

export const aggregatedSchemas = [
  rootSchema,
  rootQuerySchema,
  carSchema,
  userSchema
];
