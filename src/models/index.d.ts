import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly score: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly score: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserScore = LazyLoading extends LazyLoadingDisabled ? EagerUserScore : LazyUserScore

export declare const UserScore: (new (init: ModelInit<UserScore>) => UserScore) & {
  copyOf(source: UserScore, mutator: (draft: MutableModel<UserScore>) => MutableModel<UserScore> | void): UserScore;
}