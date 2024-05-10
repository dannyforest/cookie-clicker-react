// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, UserScore } = initSchema(schema);

export {
  Todo,
  UserScore
};