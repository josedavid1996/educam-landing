import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateInscriptionsInput = {
  asistencia: Scalars['String'];
  cargo: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  institucion: Scalars['String'];
  nombre: Scalars['String'];
  pais: Scalars['String'];
};

export type CreateInscriptionsResponse = {
  __typename?: 'CreateInscriptionsResponse';
  data?: Maybe<InscriptionModel>;
  errors?: Maybe<Array<FieldError>>;
};

export type CreatePostInput = {
  authorId: Scalars['Int'];
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  data?: Maybe<PostModel>;
  errors?: Maybe<Array<FieldError>>;
};

export type CreateUsersInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  rol: Role;
};

export type CreateUsersResponse = {
  __typename?: 'CreateUsersResponse';
  data?: Maybe<UserModel>;
  errors?: Maybe<Array<FieldError>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GetAllPostData = {
  __typename?: 'GetAllPostData';
  author: UserModel;
  authorId: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetAllPostResponse = {
  __typename?: 'GetAllPostResponse';
  data: Array<GetAllPostData>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type GetAllUsersData = {
  __typename?: 'GetAllUsersData';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  posts: Array<PostModel>;
  rol: Role;
  updatedAt: Scalars['DateTime'];
};

export type GetAllUsersResponse = {
  __typename?: 'GetAllUsersResponse';
  data: Array<GetAllUsersData>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type InscriptionModel = {
  __typename?: 'InscriptionModel';
  asistencia: Scalars['String'];
  cargo: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  institucion: Scalars['String'];
  nombre: Scalars['String'];
  pais: Scalars['String'];
};

export type LoginUserData = {
  __typename?: 'LoginUserData';
  token: Scalars['String'];
  user: UserModel;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  data?: Maybe<LoginUserData>;
  errors?: Maybe<Array<FieldError>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInscription: CreateInscriptionsResponse;
  createPost?: Maybe<CreatePostResponse>;
  createUser: CreateUsersResponse;
  deletePost: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  loginUser: LoginUserResponse;
  refreshTokenUser: RefreshTokenUserResponse;
  updatePost?: Maybe<UpdatePostResponse>;
  updateUser: UpdateUsersResponse;
};


export type MutationCreateInscriptionArgs = {
  input: CreateInscriptionsInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUsersInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUsersInput;
};

export type PostModel = {
  __typename?: 'PostModel';
  authorId: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getAllCountInscriptions: Scalars['Int'];
  getAllPost: GetAllPostResponse;
  getAllUsers: GetAllUsersResponse;
  getPostById?: Maybe<PostModel>;
  getUserById?: Maybe<UserModel>;
};


export type QueryGetAllPostArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};

export type RefreshTokenUserData = {
  __typename?: 'RefreshTokenUserData';
  token: Scalars['String'];
  user: UserModel;
};

export type RefreshTokenUserResponse = {
  __typename?: 'RefreshTokenUserResponse';
  data?: Maybe<RefreshTokenUserData>;
  errors?: Maybe<Array<FieldError>>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UpdatePostInput = {
  authorId: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type UpdatePostResponse = {
  __typename?: 'UpdatePostResponse';
  data?: Maybe<PostModel>;
  errors?: Maybe<Array<FieldError>>;
};

export type UpdateUsersInput = {
  email: Scalars['String'];
  id: Scalars['Int'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: Role;
};

export type UpdateUsersResponse = {
  __typename?: 'UpdateUsersResponse';
  data?: Maybe<UserModel>;
  errors?: Maybe<Array<FieldError>>;
};

export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: Role;
  updatedAt: Scalars['DateTime'];
};

export type CreateInscriptionMutationVariables = Exact<{
  input: CreateInscriptionsInput;
}>;


export type CreateInscriptionMutation = { __typename?: 'Mutation', createInscription: { __typename?: 'CreateInscriptionsResponse', data?: { __typename?: 'InscriptionModel', id: string, createdAt: any, nombre: string, institucion: string, cargo: string, pais: string, asistencia: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetAllCountInscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountInscriptionsQuery = { __typename?: 'Query', getAllCountInscriptions: number };


export const CreateInscriptionDocument = gql`
    mutation CreateInscription($input: CreateInscriptionsInput!) {
  createInscription(input: $input) {
    data {
      id
      createdAt
      nombre
      institucion
      cargo
      pais
      asistencia
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateInscriptionMutationFn = Apollo.MutationFunction<CreateInscriptionMutation, CreateInscriptionMutationVariables>;

/**
 * __useCreateInscriptionMutation__
 *
 * To run a mutation, you first call `useCreateInscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInscriptionMutation, { data, loading, error }] = useCreateInscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInscriptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateInscriptionMutation, CreateInscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInscriptionMutation, CreateInscriptionMutationVariables>(CreateInscriptionDocument, options);
      }
export type CreateInscriptionMutationHookResult = ReturnType<typeof useCreateInscriptionMutation>;
export type CreateInscriptionMutationResult = Apollo.MutationResult<CreateInscriptionMutation>;
export type CreateInscriptionMutationOptions = Apollo.BaseMutationOptions<CreateInscriptionMutation, CreateInscriptionMutationVariables>;
export const GetAllCountInscriptionsDocument = gql`
    query GetAllCountInscriptions {
  getAllCountInscriptions
}
    `;

/**
 * __useGetAllCountInscriptionsQuery__
 *
 * To run a query within a React component, call `useGetAllCountInscriptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountInscriptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountInscriptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountInscriptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountInscriptionsQuery, GetAllCountInscriptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountInscriptionsQuery, GetAllCountInscriptionsQueryVariables>(GetAllCountInscriptionsDocument, options);
      }
export function useGetAllCountInscriptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountInscriptionsQuery, GetAllCountInscriptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountInscriptionsQuery, GetAllCountInscriptionsQueryVariables>(GetAllCountInscriptionsDocument, options);
        }
export type GetAllCountInscriptionsQueryHookResult = ReturnType<typeof useGetAllCountInscriptionsQuery>;
export type GetAllCountInscriptionsLazyQueryHookResult = ReturnType<typeof useGetAllCountInscriptionsLazyQuery>;
export type GetAllCountInscriptionsQueryResult = Apollo.QueryResult<GetAllCountInscriptionsQuery, GetAllCountInscriptionsQueryVariables>;