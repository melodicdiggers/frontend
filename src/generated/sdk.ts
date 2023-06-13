/* eslint-disable */
// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: string;
  JSON: any;
  Upload: any;
};

export type About = {
  aboutBlock?: Maybe<ComponentAboutBlockAboutBlock>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutEntity = {
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  aboutBlock?: InputMaybe<ComponentAboutBlockAboutBlockInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutPage = {
  contactBlock?: Maybe<ComponentContactBlockContactBlock>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutPageEntity = {
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutPageEntityResponse = {
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  contactBlock?: InputMaybe<ComponentContactBlockContactBlockInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Article = {
  category?: Maybe<Enum_Article_Category>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  followButtons?: Maybe<Scalars['JSON']>;
  media?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleEntity = {
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  followButtons?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  category?: InputMaybe<Enum_Article_Category>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  followButtons?: InputMaybe<Scalars['JSON']>;
  media?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentAboutBlockAboutBlock = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentAboutBlockAboutBlockInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentContactBlockContactBlock = {
  contactOptions?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentContactBlockContactBlockInput = {
  contactOptions?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHeaderBlockHeaderBlock = {
  id: Scalars['ID'];
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentHeaderBlockHeaderBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderBlockHeaderBlockFiltersInput>>>;
  not?: InputMaybe<ComponentHeaderBlockHeaderBlockFiltersInput>;
  options?: InputMaybe<JsonFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderBlockHeaderBlockFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderBlockHeaderBlockInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingpageBlockLandingPageBlock = {
  id: Scalars['ID'];
  key?: Maybe<Enum_Componentlandingpageblocklandingpageblock_Key>;
  photograph?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentLandingpageBlockLandingPageBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingpageBlockLandingPageBlockFiltersInput>>>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingpageBlockLandingPageBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingpageBlockLandingPageBlockFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLandingpageBlockLandingPageBlockInput = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Enum_Componentlandingpageblocklandingpageblock_Key>;
  photograph?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentSocialBlockSocialBlock = {
  id: Scalars['ID'];
  socialMediaOptions?: Maybe<Scalars['JSON']>;
};

export type ComponentSocialBlockSocialBlockInput = {
  id?: InputMaybe<Scalars['ID']>;
  socialMediaOptions?: InputMaybe<Scalars['JSON']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type DynamicBlock = {
  createdAt?: Maybe<Scalars['DateTime']>;
  landingPageBlock?: Maybe<Array<Maybe<ComponentLandingpageBlockLandingPageBlock>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DynamicBlockLandingPageBlockArgs = {
  filters?: InputMaybe<ComponentLandingpageBlockLandingPageBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DynamicBlockEntity = {
  attributes?: Maybe<DynamicBlock>;
  id?: Maybe<Scalars['ID']>;
};

export type DynamicBlockEntityResponse = {
  data?: Maybe<DynamicBlockEntity>;
};

export type DynamicBlockInput = {
  landingPageBlock?: InputMaybe<Array<InputMaybe<ComponentLandingpageBlockLandingPageBlockInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Article_Category {
  CoffeeBreak = 'coffee_break',
  Equanimity = 'equanimity',
  LabelTalks = 'label_talks',
  News = 'news'
}

export enum Enum_Componentlandingpageblocklandingpageblock_Key {
  LandingBottom = 'landing_bottom',
  LandingTop = 'landing_top'
}

export enum Enum_Music_Category {
  AMinuteWith = 'a_minute_with',
  DjMix = 'dj_mix',
  FreeDl = 'free_dl',
  NewMusic = 'new_music'
}

export type Event = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['Date']>;
  location?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  ticketPrices?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventEntity = {
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
};

export type EventEntityResponse = {
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  eventDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  ticketPrices?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  description?: InputMaybe<Scalars['String']>;
  eventDate?: InputMaybe<Scalars['Date']>;
  location?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  ticketPrices?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  aboutBlock?: Maybe<ComponentAboutBlockAboutBlock>;
  contactBlock?: Maybe<ComponentContactBlockContactBlock>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  socialBlock?: Maybe<ComponentSocialBlockSocialBlock>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterEntity = {
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  aboutBlock?: InputMaybe<ComponentAboutBlockAboutBlockInput>;
  contactBlock?: InputMaybe<ComponentContactBlockContactBlockInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socialBlock?: InputMaybe<ComponentSocialBlockSocialBlockInput>;
};

export type GenericMorph = About | AboutPage | Article | ComponentAboutBlockAboutBlock | ComponentContactBlockContactBlock | ComponentHeaderBlockHeaderBlock | ComponentLandingpageBlockLandingPageBlock | ComponentSocialBlockSocialBlock | DynamicBlock | Event | Footer | Header | I18NLocale | Music | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  createdAt?: Maybe<Scalars['DateTime']>;
  headerBlock?: Maybe<Array<Maybe<ComponentHeaderBlockHeaderBlock>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HeaderHeaderBlockArgs = {
  filters?: InputMaybe<ComponentHeaderBlockHeaderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeaderEntity = {
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']>;
};

export type HeaderEntityResponse = {
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  headerBlock?: InputMaybe<Array<InputMaybe<ComponentHeaderBlockHeaderBlockInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Music = {
  category?: Maybe<Enum_Music_Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  mediaBlock?: Maybe<Scalars['JSON']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MusicEntity = {
  attributes?: Maybe<Music>;
  id?: Maybe<Scalars['ID']>;
};

export type MusicEntityResponse = {
  data?: Maybe<MusicEntity>;
};

export type MusicEntityResponseCollection = {
  data: Array<MusicEntity>;
  meta: ResponseCollectionMeta;
};

export type MusicFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MusicFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mediaBlock?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<MusicFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MusicFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MusicInput = {
  category?: InputMaybe<Enum_Music_Category>;
  description?: InputMaybe<Scalars['String']>;
  mediaBlock?: InputMaybe<Scalars['JSON']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createMusic?: Maybe<MusicEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteDynamicBlock?: Maybe<DynamicBlockEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteMusic?: Maybe<MusicEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateDynamicBlock?: Maybe<DynamicBlockEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateMusic?: Maybe<MusicEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationCreateMusicArgs = {
  data: MusicInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMusicArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateDynamicBlockArgs = {
  data: DynamicBlockInput;
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateMusicArgs = {
  data: MusicInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  about?: Maybe<AboutEntityResponse>;
  aboutPage?: Maybe<AboutPageEntityResponse>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  dynamicBlock?: Maybe<DynamicBlockEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  events?: Maybe<EventEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  music?: Maybe<MusicEntityResponse>;
  musics?: Maybe<MusicEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAboutPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDynamicBlockArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMusicArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMusicsArgs = {
  filters?: InputMaybe<MusicFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { about?: { data?: { attributes?: { aboutBlock?: { title?: string | null, subTitle?: string | null, description?: string | null } | null } | null } | null } | null };

export type ArticlesQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type ArticlesQuery = { articles?: { data: Array<{ attributes?: { title?: string | null, date?: any | null, category?: Enum_Article_Category | null, content?: string | null, slug?: string | null, media?: { data?: { attributes?: { url: string } | null } | null } | null } | null }> } | null };

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { aboutPage?: { data?: { attributes?: { contactBlock?: { title?: string | null, contactOptions?: any | null } | null } | null } | null } | null };

export type DynamicBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type DynamicBlockQuery = { dynamicBlock?: { data?: { attributes?: { landingPageBlock?: Array<{ title?: string | null, url?: string | null, key?: Enum_Componentlandingpageblocklandingpageblock_Key | null, photograph?: { data?: { attributes?: { url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> | null } | null } | null } | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { events?: { data: Array<{ attributes?: { title?: string | null, location?: string | null, eventDate?: any | null, ticketPrices?: any | null, media?: { data: Array<{ attributes?: { url: string } | null }> } | null } | null }> } | null };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { footer?: { data?: { attributes?: { aboutBlock?: { title?: string | null } | null, contactBlock?: { title?: string | null } | null, socialBlock?: { socialMediaOptions?: any | null } | null } | null } | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { header?: { data?: { attributes?: { title?: string | null, headerBlock?: Array<{ title?: string | null, options?: any | null } | null> | null } | null } | null } | null };

export type LandingPhotoQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPhotoQuery = { uploadFile?: { data?: { attributes?: { url: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, size: number, ext?: string | null } | null } | null } | null };

export type MusicQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type MusicQuery = { musics?: { data: Array<{ attributes?: { title?: string | null, description?: string | null, category?: Enum_Music_Category | null, mediaBlock?: any | null } | null }> } | null };


export const AboutPageDocument = /*#__PURE__*/ gql`
    query AboutPage {
  about {
    data {
      attributes {
        aboutBlock {
          title
          subTitle
          description
        }
      }
    }
  }
}
    `;
export const ArticlesDocument = /*#__PURE__*/ gql`
    query articles($category: String!) {
  articles(filters: {category: {eq: $category}}) {
    data {
      attributes {
        title
        date
        category
        content
        slug
        media {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
export const ContactPageDocument = /*#__PURE__*/ gql`
    query ContactPage {
  aboutPage {
    data {
      attributes {
        contactBlock {
          title
          contactOptions
        }
      }
    }
  }
}
    `;
export const DynamicBlockDocument = /*#__PURE__*/ gql`
    query dynamicBlock {
  dynamicBlock {
    data {
      attributes {
        landingPageBlock {
          title
          url
          key
          photograph {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const EventsDocument = /*#__PURE__*/ gql`
    query Events {
  events {
    data {
      attributes {
        title
        location
        eventDate
        ticketPrices
        media {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
export const FooterDocument = /*#__PURE__*/ gql`
    query Footer {
  footer {
    data {
      attributes {
        aboutBlock {
          title
        }
        contactBlock {
          title
        }
        socialBlock {
          socialMediaOptions
        }
      }
    }
  }
}
    `;
export const HeaderDocument = /*#__PURE__*/ gql`
    query Header {
  header {
    data {
      attributes {
        title
        headerBlock {
          title
          options
        }
      }
    }
  }
}
    `;
export const LandingPhotoDocument = /*#__PURE__*/ gql`
    query landingPhoto {
  uploadFile(id: 1) {
    data {
      attributes {
        url
        alternativeText
        caption
        width
        height
        size
        ext
      }
    }
  }
}
    `;
export const MusicDocument = /*#__PURE__*/ gql`
    query music($category: String!) {
  musics(filters: {category: {eq: $category}}) {
    data {
      attributes {
        title
        description
        category
        mediaBlock
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AboutPage(variables?: AboutPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutPageQuery>(AboutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutPage', 'query');
    },
    articles(variables: ArticlesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlesQuery>(ArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articles', 'query');
    },
    ContactPage(variables?: ContactPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactPageQuery>(ContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContactPage', 'query');
    },
    dynamicBlock(variables?: DynamicBlockQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DynamicBlockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DynamicBlockQuery>(DynamicBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dynamicBlock', 'query');
    },
    Events(variables?: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Events', 'query');
    },
    Footer(variables?: FooterQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FooterQuery>(FooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Footer', 'query');
    },
    Header(variables?: HeaderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeaderQuery>(HeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Header', 'query');
    },
    landingPhoto(variables?: LandingPhotoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPhotoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPhotoQuery>(LandingPhotoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingPhoto', 'query');
    },
    music(variables: MusicQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MusicQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MusicQuery>(MusicDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'music', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;