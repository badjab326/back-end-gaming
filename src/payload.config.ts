import { buildConfig } from 'payload/config';
import path from 'path';
import Games from './collections/Games';
import Characters from './collections/Characters';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Games,
    Characters,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
