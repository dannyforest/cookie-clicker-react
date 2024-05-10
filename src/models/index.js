// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserScore } = initSchema(schema);

export {
  UserScore
};