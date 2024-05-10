/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserScore = /* GraphQL */ `subscription OnCreateUserScore($filter: ModelSubscriptionUserScoreFilterInput) {
  onCreateUserScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserScoreSubscriptionVariables,
  APITypes.OnCreateUserScoreSubscription
>;
export const onUpdateUserScore = /* GraphQL */ `subscription OnUpdateUserScore($filter: ModelSubscriptionUserScoreFilterInput) {
  onUpdateUserScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserScoreSubscriptionVariables,
  APITypes.OnUpdateUserScoreSubscription
>;
export const onDeleteUserScore = /* GraphQL */ `subscription OnDeleteUserScore($filter: ModelSubscriptionUserScoreFilterInput) {
  onDeleteUserScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserScoreSubscriptionVariables,
  APITypes.OnDeleteUserScoreSubscription
>;
