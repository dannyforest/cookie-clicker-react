/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserScore = /* GraphQL */ `mutation CreateUserScore(
  $input: CreateUserScoreInput!
  $condition: ModelUserScoreConditionInput
) {
  createUserScore(input: $input, condition: $condition) {
    id
    name
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserScoreMutationVariables,
  APITypes.CreateUserScoreMutation
>;
export const updateUserScore = /* GraphQL */ `mutation UpdateUserScore(
  $input: UpdateUserScoreInput!
  $condition: ModelUserScoreConditionInput
) {
  updateUserScore(input: $input, condition: $condition) {
    id
    name
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserScoreMutationVariables,
  APITypes.UpdateUserScoreMutation
>;
export const deleteUserScore = /* GraphQL */ `mutation DeleteUserScore(
  $input: DeleteUserScoreInput!
  $condition: ModelUserScoreConditionInput
) {
  deleteUserScore(input: $input, condition: $condition) {
    id
    name
    score
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserScoreMutationVariables,
  APITypes.DeleteUserScoreMutation
>;
