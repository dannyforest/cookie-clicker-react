/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserScoreInput = {
  id?: string | null,
  name: string,
  score: number,
  _version?: number | null,
};

export type ModelUserScoreConditionInput = {
  name?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelUserScoreConditionInput | null > | null,
  or?: Array< ModelUserScoreConditionInput | null > | null,
  not?: ModelUserScoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserScore = {
  __typename: "UserScore",
  id: string,
  name: string,
  score: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserScoreInput = {
  id: string,
  name?: string | null,
  score?: number | null,
  _version?: number | null,
};

export type DeleteUserScoreInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserScoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserScoreFilterInput | null > | null,
  or?: Array< ModelUserScoreFilterInput | null > | null,
  not?: ModelUserScoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserScoreConnection = {
  __typename: "ModelUserScoreConnection",
  items:  Array<UserScore | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserScoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserScoreMutationVariables = {
  input: CreateUserScoreInput,
  condition?: ModelUserScoreConditionInput | null,
};

export type CreateUserScoreMutation = {
  createUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserScoreMutationVariables = {
  input: UpdateUserScoreInput,
  condition?: ModelUserScoreConditionInput | null,
};

export type UpdateUserScoreMutation = {
  updateUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserScoreMutationVariables = {
  input: DeleteUserScoreInput,
  condition?: ModelUserScoreConditionInput | null,
};

export type DeleteUserScoreMutation = {
  deleteUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserScoreQueryVariables = {
  id: string,
};

export type GetUserScoreQuery = {
  getUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserScoresQueryVariables = {
  filter?: ModelUserScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserScoresQuery = {
  listUserScores?:  {
    __typename: "ModelUserScoreConnection",
    items:  Array< {
      __typename: "UserScore",
      id: string,
      name: string,
      score: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserScoresQueryVariables = {
  filter?: ModelUserScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserScoresQuery = {
  syncUserScores?:  {
    __typename: "ModelUserScoreConnection",
    items:  Array< {
      __typename: "UserScore",
      id: string,
      name: string,
      score: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserScoreSubscriptionVariables = {
  filter?: ModelSubscriptionUserScoreFilterInput | null,
};

export type OnCreateUserScoreSubscription = {
  onCreateUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserScoreSubscriptionVariables = {
  filter?: ModelSubscriptionUserScoreFilterInput | null,
};

export type OnUpdateUserScoreSubscription = {
  onUpdateUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserScoreSubscriptionVariables = {
  filter?: ModelSubscriptionUserScoreFilterInput | null,
};

export type OnDeleteUserScoreSubscription = {
  onDeleteUserScore?:  {
    __typename: "UserScore",
    id: string,
    name: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
