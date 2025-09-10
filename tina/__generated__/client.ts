import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'c33654c3a4f1e5f406dd8708ba77b50cf1f8ad1c', queries,  });
export default client;
  