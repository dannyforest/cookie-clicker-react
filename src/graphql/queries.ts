/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserScore = /* GraphQL */ `query GetUserScore($id: ID!) {
  getUserScore(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserScoreQueryVariables,
  APITypes.GetUserScoreQuery
>;
export const listUserScores = /* GraphQL */ `query ListUserScores(
  $filter: ModelUserScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserScoresQueryVariables,
  APITypes.ListUserScoresQuery
>;
export const syncUserScores = /* GraphQL */ `query SyncUserScores(
  $filter: ModelUserScoreFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserScoresQueryVariables,
  APITypes.SyncUserScoresQuery
>;
