export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** Reads and enables pagination through a set of `Animation`. */
  allAnimations?: Maybe<AnimationsConnection>
  /** Reads and enables pagination through a set of `Company`. */
  allCompanies?: Maybe<CompaniesConnection>
  /** Reads and enables pagination through a set of `CompanyAdminUser`. */
  allCompanyAdminUsers?: Maybe<CompanyAdminUsersConnection>
  /** Reads and enables pagination through a set of `CompanyGroupMonth`. */
  allCompanyGroupMonths?: Maybe<CompanyGroupMonthsConnection>
  /** Reads and enables pagination through a set of `CompanyGroupPremium`. */
  allCompanyGroupPremiums?: Maybe<CompanyGroupPremiumsConnection>
  /** Reads and enables pagination through a set of `CompanyProGroup`. */
  allCompanyProGroups?: Maybe<CompanyProGroupsConnection>
  /** Reads and enables pagination through a set of `FeedbackRequest`. */
  allFeedbackRequests?: Maybe<FeedbackRequestsConnection>
  /** Reads and enables pagination through a set of `FeedbackResponse`. */
  allFeedbackResponses?: Maybe<FeedbackResponsesConnection>
  /** Reads and enables pagination through a set of `Headline`. */
  allHeadlines?: Maybe<HeadlinesConnection>
  /** Reads and enables pagination through a set of `Instructor`. */
  allInstructors?: Maybe<InstructorsConnection>
  /** Reads and enables pagination through a set of `News`. */
  allNews?: Maybe<NewsConnection>
  /** Reads and enables pagination through a set of `NewsComment`. */
  allNewsComments?: Maybe<NewsCommentsConnection>
  /** Reads and enables pagination through a set of `Note`. */
  allNotes?: Maybe<NotesConnection>
  /** Reads and enables pagination through a set of `NoteComment`. */
  allNoteComments?: Maybe<NoteCommentsConnection>
  /** Reads and enables pagination through a set of `Premium`. */
  allPremiums?: Maybe<PremiumsConnection>
  /** Reads and enables pagination through a set of `PremiumDefinition`. */
  allPremiumDefinitions?: Maybe<PremiumDefinitionsConnection>
  /** Reads and enables pagination through a set of `Profile`. */
  allProfiles?: Maybe<ProfilesConnection>
  /** Reads and enables pagination through a set of `ProfileSocial`. */
  allProfileSocials?: Maybe<ProfileSocialsConnection>
  /** Reads and enables pagination through a set of `Submission`. */
  allSubmissions?: Maybe<SubmissionsConnection>
  /** Reads and enables pagination through a set of `Tumbleweed`. */
  allTumbleweeds?: Maybe<TumbleweedsConnection>
  /** Reads and enables pagination through a set of `VAdminFeedbackOverview`. */
  allVAdminFeedbackOverviews?: Maybe<VAdminFeedbackOverviewsConnection>
  /** Reads and enables pagination through a set of `VAdminFeedbackOverviewCollapsed`. */
  allVAdminFeedbackOverviewCollapseds?: Maybe<
    VAdminFeedbackOverviewCollapsedsConnection
  >
  /** Reads and enables pagination through a set of `VAdminInstructor`. */
  allVAdminInstructors?: Maybe<VAdminInstructorsConnection>
  /** Reads and enables pagination through a set of `VAdminMember`. */
  allVAdminMembers?: Maybe<VAdminMembersConnection>
  /** Reads and enables pagination through a set of `VAnimation`. */
  allVAnimations?: Maybe<VAnimationsConnection>
  /** Reads and enables pagination through a set of `VAnimationPreview`. */
  allVAnimationPreviews?: Maybe<VAnimationPreviewsConnection>
  /** Reads and enables pagination through a set of `VCompanyAdmin`. */
  allVCompanyAdmins?: Maybe<VCompanyAdminsConnection>
  /** Reads and enables pagination through a set of `VCompanyAdminGroup`. */
  allVCompanyAdminGroups?: Maybe<VCompanyAdminGroupsConnection>
  /** Reads and enables pagination through a set of `VCompanyAdminMember`. */
  allVCompanyAdminMembers?: Maybe<VCompanyAdminMembersConnection>
  /** Reads and enables pagination through a set of `VCompanyAdminMonth`. */
  allVCompanyAdminMonths?: Maybe<VCompanyAdminMonthsConnection>
  /** Reads and enables pagination through a set of `VFeedback`. */
  allVFeedbacks?: Maybe<VFeedbacksConnection>
  /** Reads and enables pagination through a set of `VInstructor`. */
  allVInstructors?: Maybe<VInstructorsConnection>
  /** Reads and enables pagination through a set of `VInstructorFeedback`. */
  allVInstructorFeedbacks?: Maybe<VInstructorFeedbacksConnection>
  /** Reads and enables pagination through a set of `VInstructorPool`. */
  allVInstructorPools?: Maybe<VInstructorPoolsConnection>
  /** Reads and enables pagination through a set of `VInstructorSetting`. */
  allVInstructorSettings?: Maybe<VInstructorSettingsConnection>
  /** Reads and enables pagination through a set of `VNote`. */
  allVNotes?: Maybe<VNotesConnection>
  /** Reads and enables pagination through a set of `VOwnNote`. */
  allVOwnNotes?: Maybe<VOwnNotesConnection>
  /** Reads and enables pagination through a set of `VPost`. */
  allVPosts?: Maybe<VPostsConnection>
  /** Reads and enables pagination through a set of `VProList`. */
  allVProLists?: Maybe<VProListsConnection>
  /** Reads and enables pagination through a set of `VProMembership`. */
  allVProMemberships?: Maybe<VProMembershipsConnection>
  /** Reads and enables pagination through a set of `VProOwnFeedback`. */
  allVProOwnFeedbacks?: Maybe<VProOwnFeedbacksConnection>
  animationById?: Maybe<Animation>
  companyById?: Maybe<Company>
  companyByName?: Maybe<Company>
  companyByNameUrlSafe?: Maybe<Company>
  companyAdminUserById?: Maybe<CompanyAdminUser>
  companyAdminUserByProfileId?: Maybe<CompanyAdminUser>
  companyGroupMonthById?: Maybe<CompanyGroupMonth>
  companyGroupPremiumById?: Maybe<CompanyGroupPremium>
  companyGroupPremiumByPremiumId?: Maybe<CompanyGroupPremium>
  companyProGroupById?: Maybe<CompanyProGroup>
  feedbackRequestById?: Maybe<FeedbackRequest>
  feedbackResponseById?: Maybe<FeedbackResponse>
  headlineById?: Maybe<Headline>
  instructorById?: Maybe<Instructor>
  instructorByProfileId?: Maybe<Instructor>
  newsById?: Maybe<News>
  newsByTitle?: Maybe<News>
  newsBySlug?: Maybe<News>
  newsCommentById?: Maybe<NewsComment>
  noteById?: Maybe<Note>
  noteCommentById?: Maybe<NoteComment>
  premiumById?: Maybe<Premium>
  premiumByProfileId?: Maybe<Premium>
  premiumDefinitionById?: Maybe<PremiumDefinition>
  profileById?: Maybe<Profile>
  profileByUsername?: Maybe<Profile>
  profileSocialByProfileId?: Maybe<ProfileSocial>
  submissionById?: Maybe<Submission>
  tumbleweedById?: Maybe<Tumbleweed>
  tumbleweedBySubmissionId?: Maybe<Tumbleweed>
  currentInstructor?: Maybe<Instructor>
  currentProfile?: Maybe<Profile>
  getClaimedPendingFeedback?: Maybe<FeedbackResponse>
  getProfileByUsername?: Maybe<Profile>
  isRegistrationOpen?: Maybe<Scalars['Boolean']>
  getPostBySlug?: Maybe<VPost>
  slugify?: Maybe<Scalars['String']>
  /** Reads a single `Animation` using its globally unique `ID`. */
  animation?: Maybe<Animation>
  /** Reads a single `Company` using its globally unique `ID`. */
  company?: Maybe<Company>
  /** Reads a single `CompanyAdminUser` using its globally unique `ID`. */
  companyAdminUser?: Maybe<CompanyAdminUser>
  /** Reads a single `CompanyGroupMonth` using its globally unique `ID`. */
  companyGroupMonth?: Maybe<CompanyGroupMonth>
  /** Reads a single `CompanyGroupPremium` using its globally unique `ID`. */
  companyGroupPremium?: Maybe<CompanyGroupPremium>
  /** Reads a single `CompanyProGroup` using its globally unique `ID`. */
  companyProGroup?: Maybe<CompanyProGroup>
  /** Reads a single `FeedbackRequest` using its globally unique `ID`. */
  feedbackRequest?: Maybe<FeedbackRequest>
  /** Reads a single `FeedbackResponse` using its globally unique `ID`. */
  feedbackResponse?: Maybe<FeedbackResponse>
  /** Reads a single `Headline` using its globally unique `ID`. */
  headline?: Maybe<Headline>
  /** Reads a single `Instructor` using its globally unique `ID`. */
  instructor?: Maybe<Instructor>
  /** Reads a single `News` using its globally unique `ID`. */
  news?: Maybe<News>
  /** Reads a single `NewsComment` using its globally unique `ID`. */
  newsComment?: Maybe<NewsComment>
  /** Reads a single `Note` using its globally unique `ID`. */
  note?: Maybe<Note>
  /** Reads a single `NoteComment` using its globally unique `ID`. */
  noteComment?: Maybe<NoteComment>
  /** Reads a single `Premium` using its globally unique `ID`. */
  premium?: Maybe<Premium>
  /** Reads a single `PremiumDefinition` using its globally unique `ID`. */
  premiumDefinition?: Maybe<PremiumDefinition>
  /** Reads a single `Profile` using its globally unique `ID`. */
  profile?: Maybe<Profile>
  /** Reads a single `Submission` using its globally unique `ID`. */
  submission?: Maybe<Submission>
  /** Reads a single `Tumbleweed` using its globally unique `ID`. */
  tumbleweed?: Maybe<Tumbleweed>
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAnimationsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<AnimationsOrderBy>>
  condition?: Maybe<AnimationCondition>
  filter?: Maybe<AnimationFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCompaniesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompaniesOrderBy>>
  condition?: Maybe<CompanyCondition>
  filter?: Maybe<CompanyFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCompanyAdminUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyAdminUsersOrderBy>>
  condition?: Maybe<CompanyAdminUserCondition>
  filter?: Maybe<CompanyAdminUserFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCompanyGroupMonthsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyGroupMonthsOrderBy>>
  condition?: Maybe<CompanyGroupMonthCondition>
  filter?: Maybe<CompanyGroupMonthFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCompanyGroupPremiumsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyGroupPremiumsOrderBy>>
  condition?: Maybe<CompanyGroupPremiumCondition>
  filter?: Maybe<CompanyGroupPremiumFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCompanyProGroupsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyProGroupsOrderBy>>
  condition?: Maybe<CompanyProGroupCondition>
  filter?: Maybe<CompanyProGroupFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllFeedbackRequestsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackRequestsOrderBy>>
  condition?: Maybe<FeedbackRequestCondition>
  filter?: Maybe<FeedbackRequestFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllFeedbackResponsesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackResponsesOrderBy>>
  condition?: Maybe<FeedbackResponseCondition>
  filter?: Maybe<FeedbackResponseFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllHeadlinesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<HeadlinesOrderBy>>
  condition?: Maybe<HeadlineCondition>
  filter?: Maybe<HeadlineFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllInstructorsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<InstructorsOrderBy>>
  condition?: Maybe<InstructorCondition>
  filter?: Maybe<InstructorFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllNewsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NewsOrderBy>>
  condition?: Maybe<NewsCondition>
  filter?: Maybe<NewsFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllNewsCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
  condition?: Maybe<NewsCommentCondition>
  filter?: Maybe<NewsCommentFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllNotesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NotesOrderBy>>
  condition?: Maybe<NoteCondition>
  filter?: Maybe<NoteFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllNoteCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
  condition?: Maybe<NoteCommentCondition>
  filter?: Maybe<NoteCommentFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPremiumsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PremiumsOrderBy>>
  condition?: Maybe<PremiumCondition>
  filter?: Maybe<PremiumFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPremiumDefinitionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PremiumDefinitionsOrderBy>>
  condition?: Maybe<PremiumDefinitionCondition>
  filter?: Maybe<PremiumDefinitionFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllProfilesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<ProfilesOrderBy>>
  condition?: Maybe<ProfileCondition>
  filter?: Maybe<ProfileFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllProfileSocialsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<ProfileSocialsOrderBy>>
  condition?: Maybe<ProfileSocialCondition>
  filter?: Maybe<ProfileSocialFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllSubmissionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<SubmissionsOrderBy>>
  condition?: Maybe<SubmissionCondition>
  filter?: Maybe<SubmissionFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTumbleweedsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<TumbleweedsOrderBy>>
  condition?: Maybe<TumbleweedCondition>
  filter?: Maybe<TumbleweedFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAdminFeedbackOverviewsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAdminFeedbackOverviewsOrderBy>>
  condition?: Maybe<VAdminFeedbackOverviewCondition>
  filter?: Maybe<VAdminFeedbackOverviewFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAdminFeedbackOverviewCollapsedsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAdminFeedbackOverviewCollapsedsOrderBy>>
  condition?: Maybe<VAdminFeedbackOverviewCollapsedCondition>
  filter?: Maybe<VAdminFeedbackOverviewCollapsedFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAdminInstructorsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAdminInstructorsOrderBy>>
  condition?: Maybe<VAdminInstructorCondition>
  filter?: Maybe<VAdminInstructorFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAdminMembersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAdminMembersOrderBy>>
  condition?: Maybe<VAdminMemberCondition>
  filter?: Maybe<VAdminMemberFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAnimationsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAnimationsOrderBy>>
  condition?: Maybe<VAnimationCondition>
  filter?: Maybe<VAnimationFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVAnimationPreviewsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAnimationPreviewsOrderBy>>
  condition?: Maybe<VAnimationPreviewCondition>
  filter?: Maybe<VAnimationPreviewFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVCompanyAdminsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VCompanyAdminsOrderBy>>
  condition?: Maybe<VCompanyAdminCondition>
  filter?: Maybe<VCompanyAdminFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVCompanyAdminGroupsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VCompanyAdminGroupsOrderBy>>
  condition?: Maybe<VCompanyAdminGroupCondition>
  filter?: Maybe<VCompanyAdminGroupFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVCompanyAdminMembersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VCompanyAdminMembersOrderBy>>
  condition?: Maybe<VCompanyAdminMemberCondition>
  filter?: Maybe<VCompanyAdminMemberFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVCompanyAdminMonthsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VCompanyAdminMonthsOrderBy>>
  condition?: Maybe<VCompanyAdminMonthCondition>
  filter?: Maybe<VCompanyAdminMonthFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVFeedbacksArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VFeedbacksOrderBy>>
  condition?: Maybe<VFeedbackCondition>
  filter?: Maybe<VFeedbackFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVInstructorsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VInstructorsOrderBy>>
  condition?: Maybe<VInstructorCondition>
  filter?: Maybe<VInstructorFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVInstructorFeedbacksArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VInstructorFeedbacksOrderBy>>
  condition?: Maybe<VInstructorFeedbackCondition>
  filter?: Maybe<VInstructorFeedbackFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVInstructorPoolsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VInstructorPoolsOrderBy>>
  condition?: Maybe<VInstructorPoolCondition>
  filter?: Maybe<VInstructorPoolFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVInstructorSettingsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VInstructorSettingsOrderBy>>
  condition?: Maybe<VInstructorSettingCondition>
  filter?: Maybe<VInstructorSettingFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVNotesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VNotesOrderBy>>
  condition?: Maybe<VNoteCondition>
  filter?: Maybe<VNoteFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVOwnNotesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VOwnNotesOrderBy>>
  condition?: Maybe<VOwnNoteCondition>
  filter?: Maybe<VOwnNoteFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VPostsOrderBy>>
  condition?: Maybe<VPostCondition>
  filter?: Maybe<VPostFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVProListsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProListsOrderBy>>
  condition?: Maybe<VProListCondition>
  filter?: Maybe<VProListFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVProMembershipsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProMembershipsOrderBy>>
  condition?: Maybe<VProMembershipCondition>
  filter?: Maybe<VProMembershipFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllVProOwnFeedbacksArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProOwnFeedbacksOrderBy>>
  condition?: Maybe<VProOwnFeedbackCondition>
  filter?: Maybe<VProOwnFeedbackFilter>
}

/** The root query type which gives access points into the data universe. */
export type QueryAnimationByIdArgs = {
  id: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyByNameArgs = {
  name: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyByNameUrlSafeArgs = {
  nameUrlSafe: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyAdminUserByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyAdminUserByProfileIdArgs = {
  profileId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyGroupMonthByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyGroupPremiumByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyGroupPremiumByPremiumIdArgs = {
  premiumId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyProGroupByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryFeedbackRequestByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryFeedbackResponseByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryHeadlineByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryInstructorByIdArgs = {
  id: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryInstructorByProfileIdArgs = {
  profileId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsByTitleArgs = {
  title: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsBySlugArgs = {
  slug: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsCommentByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNoteByIdArgs = {
  id: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryNoteCommentByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPremiumByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPremiumByProfileIdArgs = {
  profileId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPremiumDefinitionByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfileByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfileByUsernameArgs = {
  username: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfileSocialByProfileIdArgs = {
  profileId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QuerySubmissionByIdArgs = {
  id: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryTumbleweedByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryTumbleweedBySubmissionIdArgs = {
  submissionId: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryGetProfileByUsernameArgs = {
  _username?: Maybe<Scalars['String']>
}

/** The root query type which gives access points into the data universe. */
export type QueryGetPostBySlugArgs = {
  slug_?: Maybe<Scalars['String']>
}

/** The root query type which gives access points into the data universe. */
export type QuerySlugifyArgs = {
  value: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryAnimationArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyAdminUserArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyGroupMonthArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyGroupPremiumArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCompanyProGroupArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryFeedbackRequestArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryFeedbackResponseArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryHeadlineArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryInstructorArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNewsCommentArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNoteArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNoteCommentArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPremiumArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPremiumDefinitionArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfileArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QuerySubmissionArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryTumbleweedArgs = {
  nodeId: Scalars['ID']
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
}

/** A connection to a list of `Animation` values. */
export type AnimationsConnection = {
  __typename?: 'AnimationsConnection'
  /** A list of `Animation` objects. */
  nodes: Array<Animation>
  /** A list of edges which contains the `Animation` and cursor to aid in pagination. */
  edges: Array<AnimationsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Animation` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type Animation = Node & {
  __typename?: 'Animation'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  discipline: Discipline
  status: PublishStatus
  /** Reads a single `Profile` that is related to this `Animation`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads and enables pagination through a set of `Submission`. */
  submissionsByAnimationId: SubmissionsConnection
  /** Reads and enables pagination through a set of `FeedbackRequest`. */
  feedbackRequestsByAnimationId: FeedbackRequestsConnection
  /** Reads and enables pagination through a set of `VProList`. */
  vProListsByAnimationId: VProListsConnection
  getLatestSubmission?: Maybe<Submission>
  getSubmissionAmounts?: Maybe<Scalars['BigInt']>
  pendingFeedback?: Maybe<Scalars['Boolean']>
}

export type AnimationSubmissionsByAnimationIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<SubmissionsOrderBy>>
  condition?: Maybe<SubmissionCondition>
  filter?: Maybe<SubmissionFilter>
}

export type AnimationFeedbackRequestsByAnimationIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackRequestsOrderBy>>
  condition?: Maybe<FeedbackRequestCondition>
  filter?: Maybe<FeedbackRequestFilter>
}

export type AnimationVProListsByAnimationIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProListsOrderBy>>
  condition?: Maybe<VProListCondition>
  filter?: Maybe<VProListFilter>
}

export enum Discipline {
  Modeling = 'MODELING',
  Texturing = 'TEXTURING',
  Animation = 'ANIMATION',
  Cfx = 'CFX',
  Fx = 'FX',
  MotionGraphics = 'MOTION_GRAPHICS',
}

export enum PublishStatus {
  Published = 'PUBLISHED',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  Drafted = 'DRAFTED',
}

export type Profile = Node & {
  __typename?: 'Profile'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  username: Scalars['String']
  about?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  reelDescription?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  banner?: Maybe<Scalars['String']>
  occupation?: Maybe<Scalars['String']>
  role: UserRole
  organisation?: Maybe<Scalars['String']>
  reel?: Maybe<Scalars['String']>
  updatedAt: Scalars['Datetime']
  /** Reads and enables pagination through a set of `Animation`. */
  animationsByProfileId: AnimationsConnection
  /** Reads and enables pagination through a set of `FeedbackResponse`. */
  feedbackResponsesByProfileId: FeedbackResponsesConnection
  /** Reads a single `Instructor` that is related to this `Profile`. */
  instructorByProfileId?: Maybe<Instructor>
  /**
   * Reads and enables pagination through a set of `Instructor`.
   * @deprecated Please use instructorByProfileId instead
   */
  instructorsByProfileId: InstructorsConnection
  /** Reads and enables pagination through a set of `News`. */
  newsByProfileId: NewsConnection
  /** Reads and enables pagination through a set of `NewsComment`. */
  newsCommentsByProfileId: NewsCommentsConnection
  /** Reads and enables pagination through a set of `Note`. */
  notesByProfileId: NotesConnection
  /** Reads and enables pagination through a set of `NoteComment`. */
  noteCommentsByProfileId: NoteCommentsConnection
  /** Reads a single `ProfileSocial` that is related to this `Profile`. */
  profileSocialByProfileId?: Maybe<ProfileSocial>
  /**
   * Reads and enables pagination through a set of `ProfileSocial`.
   * @deprecated Please use profileSocialByProfileId instead
   */
  profileSocialsByProfileId: ProfileSocialsConnection
  /** Reads a single `CompanyAdminUser` that is related to this `Profile`. */
  companyAdminUserByProfileId?: Maybe<CompanyAdminUser>
  /**
   * Reads and enables pagination through a set of `CompanyAdminUser`.
   * @deprecated Please use companyAdminUserByProfileId instead
   */
  companyAdminUsersByProfileId: CompanyAdminUsersConnection
  /** Reads a single `Premium` that is related to this `Profile`. */
  premiumByProfileId?: Maybe<Premium>
  /**
   * Reads and enables pagination through a set of `Premium`.
   * @deprecated Please use premiumByProfileId instead
   */
  premiumsByProfileId: PremiumsConnection
  /** Reads and enables pagination through a set of `VAdminInstructor`. */
  vAdminInstructorsByProfileId: VAdminInstructorsConnection
  /** Reads and enables pagination through a set of `VAnimationPreview`. */
  vAnimationPreviewsByProfileId: VAnimationPreviewsConnection
  /** Reads and enables pagination through a set of `VNote`. */
  vNotesByProfileId: VNotesConnection
  /** Reads and enables pagination through a set of `VOwnNote`. */
  vOwnNotesByProfileId: VOwnNotesConnection
  /** Reads and enables pagination through a set of `VProList`. */
  vProListsByProfileId: VProListsConnection
  canSubmit?: Maybe<Scalars['Boolean']>
  dailyPosts?: Maybe<Scalars['Int']>
  getAdminCompany?: Maybe<Scalars['String']>
  getBuiltInFeedback?: Maybe<Scalars['Int']>
  isInstructor?: Maybe<InstructorStatus>
  premiumType?: Maybe<ProfilePremium>
}

export type ProfileAnimationsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<AnimationsOrderBy>>
  condition?: Maybe<AnimationCondition>
  filter?: Maybe<AnimationFilter>
}

export type ProfileFeedbackResponsesByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackResponsesOrderBy>>
  condition?: Maybe<FeedbackResponseCondition>
  filter?: Maybe<FeedbackResponseFilter>
}

export type ProfileInstructorsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<InstructorsOrderBy>>
  condition?: Maybe<InstructorCondition>
  filter?: Maybe<InstructorFilter>
}

export type ProfileNewsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NewsOrderBy>>
  condition?: Maybe<NewsCondition>
  filter?: Maybe<NewsFilter>
}

export type ProfileNewsCommentsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
  condition?: Maybe<NewsCommentCondition>
  filter?: Maybe<NewsCommentFilter>
}

export type ProfileNotesByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NotesOrderBy>>
  condition?: Maybe<NoteCondition>
  filter?: Maybe<NoteFilter>
}

export type ProfileNoteCommentsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
  condition?: Maybe<NoteCommentCondition>
  filter?: Maybe<NoteCommentFilter>
}

export type ProfileProfileSocialsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<ProfileSocialsOrderBy>>
  condition?: Maybe<ProfileSocialCondition>
  filter?: Maybe<ProfileSocialFilter>
}

export type ProfileCompanyAdminUsersByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyAdminUsersOrderBy>>
  condition?: Maybe<CompanyAdminUserCondition>
  filter?: Maybe<CompanyAdminUserFilter>
}

export type ProfilePremiumsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PremiumsOrderBy>>
  condition?: Maybe<PremiumCondition>
  filter?: Maybe<PremiumFilter>
}

export type ProfileVAdminInstructorsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAdminInstructorsOrderBy>>
  condition?: Maybe<VAdminInstructorCondition>
  filter?: Maybe<VAdminInstructorFilter>
}

export type ProfileVAnimationPreviewsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VAnimationPreviewsOrderBy>>
  condition?: Maybe<VAnimationPreviewCondition>
  filter?: Maybe<VAnimationPreviewFilter>
}

export type ProfileVNotesByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VNotesOrderBy>>
  condition?: Maybe<VNoteCondition>
  filter?: Maybe<VNoteFilter>
}

export type ProfileVOwnNotesByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VOwnNotesOrderBy>>
  condition?: Maybe<VOwnNoteCondition>
  filter?: Maybe<VOwnNoteFilter>
}

export type ProfileVProListsByProfileIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProListsOrderBy>>
  condition?: Maybe<VProListCondition>
  filter?: Maybe<VProListFilter>
}

export enum UserRole {
  FramethrowerUser = 'FRAMETHROWER_USER',
  FramethrowerAnonymous = 'FRAMETHROWER_ANONYMOUS',
  FramethrowerAdmin = 'FRAMETHROWER_ADMIN',
  FramethrowerBanned = 'FRAMETHROWER_BANNED',
  FramethrowerInactive = 'FRAMETHROWER_INACTIVE',
}

/** Methods to use when ordering `Animation`. */
export enum AnimationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  DisciplineAsc = 'DISCIPLINE_ASC',
  DisciplineDesc = 'DISCIPLINE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `Animation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AnimationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `discipline` field. */
  discipline?: Maybe<Discipline>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
}

/** A filter to be used against `Animation` object types. All fields are combined with a logical ‘and.’ */
export type AnimationFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `discipline` field. */
  discipline?: Maybe<DisciplineFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Filter by the object’s `getSubmissionAmounts` field. */
  getSubmissionAmounts?: Maybe<BigIntFilter>
  /** Filter by the object’s `pendingFeedback` field. */
  pendingFeedback?: Maybe<BooleanFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AnimationFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AnimationFilter>>
  /** Negates the expression. */
  not?: Maybe<AnimationFilter>
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: Maybe<Scalars['String']>
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: Maybe<Scalars['String']>
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: Maybe<Scalars['String']>
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: Maybe<Scalars['String']>
  /** Matches the specified pattern using the SQL standard's definition of a regular expression. */
  similarTo?: Maybe<Scalars['String']>
  /** Does not match the specified pattern using the SQL standard's definition of a regular expression. */
  notSimilarTo?: Maybe<Scalars['String']>
}

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['UUID']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['UUID']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['UUID']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['UUID']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['UUID']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['UUID']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['UUID']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['UUID']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['UUID']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['UUID']>
}

/** A filter to be used against Discipline fields. All fields are combined with a logical ‘and.’ */
export type DisciplineFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Discipline>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Discipline>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Discipline>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Discipline>
  /** Included in the specified list. */
  in?: Maybe<Array<Discipline>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Discipline>>
  /** Less than the specified value. */
  lessThan?: Maybe<Discipline>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Discipline>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Discipline>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Discipline>
}

/** A filter to be used against PublishStatus fields. All fields are combined with a logical ‘and.’ */
export type PublishStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<PublishStatus>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<PublishStatus>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<PublishStatus>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<PublishStatus>
  /** Included in the specified list. */
  in?: Maybe<Array<PublishStatus>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<PublishStatus>>
  /** Less than the specified value. */
  lessThan?: Maybe<PublishStatus>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<PublishStatus>
  /** Greater than the specified value. */
  greaterThan?: Maybe<PublishStatus>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<PublishStatus>
}

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['BigInt']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['BigInt']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['BigInt']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['BigInt']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['BigInt']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['BigInt']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['BigInt']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['BigInt']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['BigInt']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['BigInt']>
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Boolean']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Boolean']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Boolean']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Boolean']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Boolean']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Boolean']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>
}

/** A connection to a list of `FeedbackResponse` values. */
export type FeedbackResponsesConnection = {
  __typename?: 'FeedbackResponsesConnection'
  /** A list of `FeedbackResponse` objects. */
  nodes: Array<FeedbackResponse>
  /** A list of edges which contains the `FeedbackResponse` and cursor to aid in pagination. */
  edges: Array<FeedbackResponsesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `FeedbackResponse` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type FeedbackResponse = Node & {
  __typename?: 'FeedbackResponse'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  profileId: Scalars['UUID']
  submissionId: Scalars['String']
  link?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  feedbackRequestId: Scalars['UUID']
  status: FeedbackResponseStatus
  /** Reads a single `Profile` that is related to this `FeedbackResponse`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads a single `Submission` that is related to this `FeedbackResponse`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `FeedbackRequest` that is related to this `FeedbackResponse`. */
  feedbackRequestByFeedbackRequestId?: Maybe<FeedbackRequest>
}

export enum FeedbackResponseStatus {
  NoAction = 'NO_ACTION',
  Pending = 'PENDING',
  Processed = 'PROCESSED',
  Uploading = 'UPLOADING',
  Conceded = 'CONCEDED',
  Unclaimed = 'UNCLAIMED',
}

export type Submission = Node & {
  __typename?: 'Submission'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['String']
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
  animationId?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  frameRate: Scalars['String']
  audio: Scalars['Boolean']
  comment?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  status: PublishStatus
  updatedAt: Scalars['Datetime']
  shortComment?: Maybe<Scalars['String']>
  /** Reads a single `Animation` that is related to this `Submission`. */
  animationByAnimationId?: Maybe<Animation>
  /** Reads and enables pagination through a set of `FeedbackResponse`. */
  feedbackResponsesBySubmissionId: FeedbackResponsesConnection
  /** Reads and enables pagination through a set of `Note`. */
  notesBySubmissionId: NotesConnection
  /** Reads a single `Tumbleweed` that is related to this `Submission`. */
  tumbleweedBySubmissionId?: Maybe<Tumbleweed>
  /**
   * Reads and enables pagination through a set of `Tumbleweed`.
   * @deprecated Please use tumbleweedBySubmissionId instead
   */
  tumbleweedsBySubmissionId: TumbleweedsConnection
  /** Reads and enables pagination through a set of `VProList`. */
  vProListsBySubmissionId: VProListsConnection
  currentProfileHasReplied?: Maybe<Scalars['Boolean']>
  hasProFeedback?: Maybe<Scalars['Boolean']>
  isLatest?: Maybe<Scalars['Boolean']>
}

export type SubmissionFeedbackResponsesBySubmissionIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackResponsesOrderBy>>
  condition?: Maybe<FeedbackResponseCondition>
  filter?: Maybe<FeedbackResponseFilter>
}

export type SubmissionNotesBySubmissionIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NotesOrderBy>>
  condition?: Maybe<NoteCondition>
  filter?: Maybe<NoteFilter>
}

export type SubmissionTumbleweedsBySubmissionIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<TumbleweedsOrderBy>>
  condition?: Maybe<TumbleweedCondition>
  filter?: Maybe<TumbleweedFilter>
}

export type SubmissionVProListsBySubmissionIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProListsOrderBy>>
  condition?: Maybe<VProListCondition>
  filter?: Maybe<VProListFilter>
}

/** Methods to use when ordering `FeedbackResponse`. */
export enum FeedbackResponsesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
  FeedbackRequestIdAsc = 'FEEDBACK_REQUEST_ID_ASC',
  FeedbackRequestIdDesc = 'FEEDBACK_REQUEST_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `FeedbackResponse` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FeedbackResponseCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `feedbackRequestId` field. */
  feedbackRequestId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatus>
}

/** A filter to be used against `FeedbackResponse` object types. All fields are combined with a logical ‘and.’ */
export type FeedbackResponseFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Filter by the object’s `feedbackRequestId` field. */
  feedbackRequestId?: Maybe<UuidFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<FeedbackResponseFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<FeedbackResponseFilter>>
  /** Negates the expression. */
  not?: Maybe<FeedbackResponseFilter>
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against FeedbackResponseStatus fields. All fields are combined with a logical ‘and.’ */
export type FeedbackResponseStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<FeedbackResponseStatus>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<FeedbackResponseStatus>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<FeedbackResponseStatus>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<FeedbackResponseStatus>
  /** Included in the specified list. */
  in?: Maybe<Array<FeedbackResponseStatus>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<FeedbackResponseStatus>>
  /** Less than the specified value. */
  lessThan?: Maybe<FeedbackResponseStatus>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<FeedbackResponseStatus>
  /** Greater than the specified value. */
  greaterThan?: Maybe<FeedbackResponseStatus>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<FeedbackResponseStatus>
}

/** A connection to a list of `Note` values. */
export type NotesConnection = {
  __typename?: 'NotesConnection'
  /** A list of `Note` objects. */
  nodes: Array<Note>
  /** A list of edges which contains the `Note` and cursor to aid in pagination. */
  edges: Array<NotesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Note` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type Note = Node & {
  __typename?: 'Note'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['String']
  submissionId: Scalars['String']
  body: Scalars['String']
  paragraph: Scalars['String']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  profileId?: Maybe<Scalars['UUID']>
  status: PublishStatus
  /** Reads a single `Submission` that is related to this `Note`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `Profile` that is related to this `Note`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads and enables pagination through a set of `NoteComment`. */
  noteCommentsByNoteId: NoteCommentsConnection
}

export type NoteNoteCommentsByNoteIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
  condition?: Maybe<NoteCommentCondition>
  filter?: Maybe<NoteCommentFilter>
}

/** A connection to a list of `NoteComment` values. */
export type NoteCommentsConnection = {
  __typename?: 'NoteCommentsConnection'
  /** A list of `NoteComment` objects. */
  nodes: Array<NoteComment>
  /** A list of edges which contains the `NoteComment` and cursor to aid in pagination. */
  edges: Array<NoteCommentsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `NoteComment` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type NoteComment = Node & {
  __typename?: 'NoteComment'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  noteId: Scalars['String']
  body?: Maybe<Scalars['String']>
  profileId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  status: PublishStatus
  /** Reads a single `Note` that is related to this `NoteComment`. */
  noteByNoteId?: Maybe<Note>
  /** Reads a single `Profile` that is related to this `NoteComment`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `NoteComment` edge in the connection. */
export type NoteCommentsEdge = {
  __typename?: 'NoteCommentsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `NoteComment` at the end of the edge. */
  node: NoteComment
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>
}

/** Methods to use when ordering `NoteComment`. */
export enum NoteCommentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `NoteComment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NoteCommentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
}

/** A filter to be used against `NoteComment` object types. All fields are combined with a logical ‘and.’ */
export type NoteCommentFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `noteId` field. */
  noteId?: Maybe<StringFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<NoteCommentFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<NoteCommentFilter>>
  /** Negates the expression. */
  not?: Maybe<NoteCommentFilter>
}

/** A `Note` edge in the connection. */
export type NotesEdge = {
  __typename?: 'NotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Note` at the end of the edge. */
  node: Note
}

/** Methods to use when ordering `Note`. */
export enum NotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ParagraphAsc = 'PARAGRAPH_ASC',
  ParagraphDesc = 'PARAGRAPH_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Note` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NoteCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `paragraph` field. */
  paragraph?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
}

/** A filter to be used against `Note` object types. All fields are combined with a logical ‘and.’ */
export type NoteFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `paragraph` field. */
  paragraph?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<NoteFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<NoteFilter>>
  /** Negates the expression. */
  not?: Maybe<NoteFilter>
}

export type Tumbleweed = Node & {
  __typename?: 'Tumbleweed'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  submissionId?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  /** Reads a single `Submission` that is related to this `Tumbleweed`. */
  submissionBySubmissionId?: Maybe<Submission>
}

/** A connection to a list of `Tumbleweed` values. */
export type TumbleweedsConnection = {
  __typename?: 'TumbleweedsConnection'
  /** A list of `Tumbleweed` objects. */
  nodes: Array<Tumbleweed>
  /** A list of edges which contains the `Tumbleweed` and cursor to aid in pagination. */
  edges: Array<TumbleweedsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Tumbleweed` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Tumbleweed` edge in the connection. */
export type TumbleweedsEdge = {
  __typename?: 'TumbleweedsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Tumbleweed` at the end of the edge. */
  node: Tumbleweed
}

/** Methods to use when ordering `Tumbleweed`. */
export enum TumbleweedsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `Tumbleweed` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TumbleweedCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `Tumbleweed` object types. All fields are combined with a logical ‘and.’ */
export type TumbleweedFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TumbleweedFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TumbleweedFilter>>
  /** Negates the expression. */
  not?: Maybe<TumbleweedFilter>
}

/** A connection to a list of `VProList` values. */
export type VProListsConnection = {
  __typename?: 'VProListsConnection'
  /** A list of `VProList` objects. */
  nodes: Array<VProList>
  /** A list of edges which contains the `VProList` and cursor to aid in pagination. */
  edges: Array<VProListsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VProList` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VProList = {
  __typename?: 'VProList'
  animationId?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  updatedAt?: Maybe<Scalars['Datetime']>
  thumbnail?: Maybe<Scalars['String']>
  /** Reads a single `Animation` that is related to this `VProList`. */
  animationByAnimationId?: Maybe<Animation>
  /** Reads a single `Profile` that is related to this `VProList`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads a single `Submission` that is related to this `VProList`. */
  submissionBySubmissionId?: Maybe<Submission>
}

/** A `VProList` edge in the connection. */
export type VProListsEdge = {
  __typename?: 'VProListsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VProList` at the end of the edge. */
  node: VProList
}

/** Methods to use when ordering `VProList`. */
export enum VProListsOrderBy {
  Natural = 'NATURAL',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
}

/**
 * A condition to be used against `VProList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VProListCondition = {
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
}

/** A filter to be used against `VProList` object types. All fields are combined with a logical ‘and.’ */
export type VProListFilter = {
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VProListFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VProListFilter>>
  /** Negates the expression. */
  not?: Maybe<VProListFilter>
}

export type FeedbackRequest = Node & {
  __typename?: 'FeedbackRequest'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  animationId: Scalars['String']
  status: FeedbackRequestStatus
  /** Reads a single `Animation` that is related to this `FeedbackRequest`. */
  animationByAnimationId?: Maybe<Animation>
  /** Reads and enables pagination through a set of `FeedbackResponse`. */
  feedbackResponsesByFeedbackRequestId: FeedbackResponsesConnection
}

export type FeedbackRequestFeedbackResponsesByFeedbackRequestIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<FeedbackResponsesOrderBy>>
  condition?: Maybe<FeedbackResponseCondition>
  filter?: Maybe<FeedbackResponseFilter>
}

export enum FeedbackRequestStatus {
  Requested = 'REQUESTED',
  Fulfilled = 'FULFILLED',
  None = 'NONE',
}

/** A `FeedbackResponse` edge in the connection. */
export type FeedbackResponsesEdge = {
  __typename?: 'FeedbackResponsesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `FeedbackResponse` at the end of the edge. */
  node: FeedbackResponse
}

export type Instructor = Node & {
  __typename?: 'Instructor'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['String']
  profileId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  biography?: Maybe<Scalars['String']>
  banner?: Maybe<Scalars['String']>
  availability: InstructorAvailability
  status: InstructorStatus
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  currentlyResponding?: Maybe<Scalars['Boolean']>
  isTilted?: Maybe<Scalars['Boolean']>
}

export enum InstructorAvailability {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Busy = 'BUSY',
}

export enum InstructorStatus {
  NotInstructor = 'NOT_INSTRUCTOR',
  Unpublished = 'UNPUBLISHED',
  Inactive = 'INACTIVE',
  Active = 'ACTIVE',
}

/** A connection to a list of `Instructor` values. */
export type InstructorsConnection = {
  __typename?: 'InstructorsConnection'
  /** A list of `Instructor` objects. */
  nodes: Array<Instructor>
  /** A list of edges which contains the `Instructor` and cursor to aid in pagination. */
  edges: Array<InstructorsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Instructor` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Instructor` edge in the connection. */
export type InstructorsEdge = {
  __typename?: 'InstructorsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Instructor` at the end of the edge. */
  node: Instructor
}

/** Methods to use when ordering `Instructor`. */
export enum InstructorsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AcceptedAgreementAsc = 'ACCEPTED_AGREEMENT_ASC',
  AcceptedAgreementDesc = 'ACCEPTED_AGREEMENT_DESC',
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  BannerAsc = 'BANNER_ASC',
  BannerDesc = 'BANNER_DESC',
  AvailabilityAsc = 'AVAILABILITY_ASC',
  AvailabilityDesc = 'AVAILABILITY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `Instructor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InstructorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `biography` field. */
  biography?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `banner` field. */
  banner?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `availability` field. */
  availability?: Maybe<InstructorAvailability>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<InstructorStatus>
}

/** A filter to be used against `Instructor` object types. All fields are combined with a logical ‘and.’ */
export type InstructorFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<BooleanFilter>
  /** Filter by the object’s `biography` field. */
  biography?: Maybe<StringFilter>
  /** Filter by the object’s `banner` field. */
  banner?: Maybe<StringFilter>
  /** Filter by the object’s `availability` field. */
  availability?: Maybe<InstructorAvailabilityFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `currentlyResponding` field. */
  currentlyResponding?: Maybe<BooleanFilter>
  /** Filter by the object’s `isTilted` field. */
  isTilted?: Maybe<BooleanFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<InstructorFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<InstructorFilter>>
  /** Negates the expression. */
  not?: Maybe<InstructorFilter>
}

/** A filter to be used against InstructorAvailability fields. All fields are combined with a logical ‘and.’ */
export type InstructorAvailabilityFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<InstructorAvailability>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<InstructorAvailability>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<InstructorAvailability>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<InstructorAvailability>
  /** Included in the specified list. */
  in?: Maybe<Array<InstructorAvailability>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<InstructorAvailability>>
  /** Less than the specified value. */
  lessThan?: Maybe<InstructorAvailability>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<InstructorAvailability>
  /** Greater than the specified value. */
  greaterThan?: Maybe<InstructorAvailability>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<InstructorAvailability>
}

/** A filter to be used against InstructorStatus fields. All fields are combined with a logical ‘and.’ */
export type InstructorStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<InstructorStatus>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<InstructorStatus>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<InstructorStatus>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<InstructorStatus>
  /** Included in the specified list. */
  in?: Maybe<Array<InstructorStatus>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<InstructorStatus>>
  /** Less than the specified value. */
  lessThan?: Maybe<InstructorStatus>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<InstructorStatus>
  /** Greater than the specified value. */
  greaterThan?: Maybe<InstructorStatus>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<InstructorStatus>
}

/** A connection to a list of `News` values. */
export type NewsConnection = {
  __typename?: 'NewsConnection'
  /** A list of `News` objects. */
  nodes: Array<News>
  /** A list of edges which contains the `News` and cursor to aid in pagination. */
  edges: Array<NewsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `News` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type News = Node & {
  __typename?: 'News'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  updatedAt: Scalars['Datetime']
  createdAt: Scalars['Datetime']
  title: Scalars['String']
  body: Scalars['String']
  intro: Scalars['String']
  thumbnail: Scalars['String']
  slug?: Maybe<Scalars['String']>
  profileId: Scalars['UUID']
  status: PublishStatus
  /** Reads a single `Profile` that is related to this `News`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads and enables pagination through a set of `NewsComment`. */
  newsCommentsByNewsId: NewsCommentsConnection
}

export type NewsNewsCommentsByNewsIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
  condition?: Maybe<NewsCommentCondition>
  filter?: Maybe<NewsCommentFilter>
}

/** A connection to a list of `NewsComment` values. */
export type NewsCommentsConnection = {
  __typename?: 'NewsCommentsConnection'
  /** A list of `NewsComment` objects. */
  nodes: Array<NewsComment>
  /** A list of edges which contains the `NewsComment` and cursor to aid in pagination. */
  edges: Array<NewsCommentsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `NewsComment` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type NewsComment = Node & {
  __typename?: 'NewsComment'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  newsId: Scalars['UUID']
  body?: Maybe<Scalars['String']>
  profileId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  status: PublishStatus
  /** Reads a single `News` that is related to this `NewsComment`. */
  newsByNewsId?: Maybe<News>
  /** Reads a single `Profile` that is related to this `NewsComment`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `NewsComment` edge in the connection. */
export type NewsCommentsEdge = {
  __typename?: 'NewsCommentsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `NewsComment` at the end of the edge. */
  node: NewsComment
}

/** Methods to use when ordering `NewsComment`. */
export enum NewsCommentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NewsIdAsc = 'NEWS_ID_ASC',
  NewsIdDesc = 'NEWS_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `NewsComment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NewsCommentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `newsId` field. */
  newsId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
}

/** A filter to be used against `NewsComment` object types. All fields are combined with a logical ‘and.’ */
export type NewsCommentFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `newsId` field. */
  newsId?: Maybe<UuidFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<NewsCommentFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<NewsCommentFilter>>
  /** Negates the expression. */
  not?: Maybe<NewsCommentFilter>
}

/** A `News` edge in the connection. */
export type NewsEdge = {
  __typename?: 'NewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `News` at the end of the edge. */
  node: News
}

/** Methods to use when ordering `News`. */
export enum NewsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  IntroAsc = 'INTRO_ASC',
  IntroDesc = 'INTRO_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `News` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NewsCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `intro` field. */
  intro?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
}

/** A filter to be used against `News` object types. All fields are combined with a logical ‘and.’ */
export type NewsFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `intro` field. */
  intro?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<NewsFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<NewsFilter>>
  /** Negates the expression. */
  not?: Maybe<NewsFilter>
}

export type ProfileSocial = {
  __typename?: 'ProfileSocial'
  profileId: Scalars['UUID']
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  linkedin?: Maybe<Scalars['String']>
  artstation?: Maybe<Scalars['String']>
  vimeo?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
  www?: Maybe<Scalars['String']>
  /** Reads a single `Profile` that is related to this `ProfileSocial`. */
  profileByProfileId?: Maybe<Profile>
}

/** A connection to a list of `ProfileSocial` values. */
export type ProfileSocialsConnection = {
  __typename?: 'ProfileSocialsConnection'
  /** A list of `ProfileSocial` objects. */
  nodes: Array<ProfileSocial>
  /** A list of edges which contains the `ProfileSocial` and cursor to aid in pagination. */
  edges: Array<ProfileSocialsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `ProfileSocial` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `ProfileSocial` edge in the connection. */
export type ProfileSocialsEdge = {
  __typename?: 'ProfileSocialsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `ProfileSocial` at the end of the edge. */
  node: ProfileSocial
}

/** Methods to use when ordering `ProfileSocial`. */
export enum ProfileSocialsOrderBy {
  Natural = 'NATURAL',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  FacebookDesc = 'FACEBOOK_DESC',
  InstagramAsc = 'INSTAGRAM_ASC',
  InstagramDesc = 'INSTAGRAM_DESC',
  TwitterAsc = 'TWITTER_ASC',
  TwitterDesc = 'TWITTER_DESC',
  LinkedinAsc = 'LINKEDIN_ASC',
  LinkedinDesc = 'LINKEDIN_DESC',
  ArtstationAsc = 'ARTSTATION_ASC',
  ArtstationDesc = 'ARTSTATION_DESC',
  VimeoAsc = 'VIMEO_ASC',
  VimeoDesc = 'VIMEO_DESC',
  YoutubeAsc = 'YOUTUBE_ASC',
  YoutubeDesc = 'YOUTUBE_DESC',
  WwwAsc = 'WWW_ASC',
  WwwDesc = 'WWW_DESC',
}

/**
 * A condition to be used against `ProfileSocial` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProfileSocialCondition = {
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `facebook` field. */
  facebook?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `instagram` field. */
  instagram?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `twitter` field. */
  twitter?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `linkedin` field. */
  linkedin?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `artstation` field. */
  artstation?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `vimeo` field. */
  vimeo?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `youtube` field. */
  youtube?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `www` field. */
  www?: Maybe<Scalars['String']>
}

/** A filter to be used against `ProfileSocial` object types. All fields are combined with a logical ‘and.’ */
export type ProfileSocialFilter = {
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `facebook` field. */
  facebook?: Maybe<StringFilter>
  /** Filter by the object’s `instagram` field. */
  instagram?: Maybe<StringFilter>
  /** Filter by the object’s `twitter` field. */
  twitter?: Maybe<StringFilter>
  /** Filter by the object’s `linkedin` field. */
  linkedin?: Maybe<StringFilter>
  /** Filter by the object’s `artstation` field. */
  artstation?: Maybe<StringFilter>
  /** Filter by the object’s `vimeo` field. */
  vimeo?: Maybe<StringFilter>
  /** Filter by the object’s `youtube` field. */
  youtube?: Maybe<StringFilter>
  /** Filter by the object’s `www` field. */
  www?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ProfileSocialFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ProfileSocialFilter>>
  /** Negates the expression. */
  not?: Maybe<ProfileSocialFilter>
}

export type CompanyAdminUser = Node & {
  __typename?: 'CompanyAdminUser'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  companyId: Scalars['UUID']
  profileId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  /** Reads a single `Company` that is related to this `CompanyAdminUser`. */
  companyByCompanyId?: Maybe<Company>
  /** Reads a single `Profile` that is related to this `CompanyAdminUser`. */
  profileByProfileId?: Maybe<Profile>
}

export type Company = Node & {
  __typename?: 'Company'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  name: Scalars['String']
  link?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  address?: Maybe<Scalars['JSON']>
  nameUrlSafe: Scalars['String']
  public?: Maybe<Scalars['Boolean']>
  /** Reads and enables pagination through a set of `CompanyAdminUser`. */
  companyAdminUsersByCompanyId: CompanyAdminUsersConnection
  /** Reads and enables pagination through a set of `Premium`. */
  premiumsByCompanyId: PremiumsConnection
  /** Reads and enables pagination through a set of `CompanyProGroup`. */
  companyProGroupsByCompanyId: CompanyProGroupsConnection
  /** Reads and enables pagination through a set of `VCompanyAdmin`. */
  vCompanyAdminsById: VCompanyAdminsConnection
}

export type CompanyCompanyAdminUsersByCompanyIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyAdminUsersOrderBy>>
  condition?: Maybe<CompanyAdminUserCondition>
  filter?: Maybe<CompanyAdminUserFilter>
}

export type CompanyPremiumsByCompanyIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PremiumsOrderBy>>
  condition?: Maybe<PremiumCondition>
  filter?: Maybe<PremiumFilter>
}

export type CompanyCompanyProGroupsByCompanyIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyProGroupsOrderBy>>
  condition?: Maybe<CompanyProGroupCondition>
  filter?: Maybe<CompanyProGroupFilter>
}

export type CompanyVCompanyAdminsByIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VCompanyAdminsOrderBy>>
  condition?: Maybe<VCompanyAdminCondition>
  filter?: Maybe<VCompanyAdminFilter>
}

/** A connection to a list of `CompanyAdminUser` values. */
export type CompanyAdminUsersConnection = {
  __typename?: 'CompanyAdminUsersConnection'
  /** A list of `CompanyAdminUser` objects. */
  nodes: Array<CompanyAdminUser>
  /** A list of edges which contains the `CompanyAdminUser` and cursor to aid in pagination. */
  edges: Array<CompanyAdminUsersEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CompanyAdminUser` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `CompanyAdminUser` edge in the connection. */
export type CompanyAdminUsersEdge = {
  __typename?: 'CompanyAdminUsersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `CompanyAdminUser` at the end of the edge. */
  node: CompanyAdminUser
}

/** Methods to use when ordering `CompanyAdminUser`. */
export enum CompanyAdminUsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `CompanyAdminUser` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CompanyAdminUserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `CompanyAdminUser` object types. All fields are combined with a logical ‘and.’ */
export type CompanyAdminUserFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `companyId` field. */
  companyId?: Maybe<UuidFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CompanyAdminUserFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CompanyAdminUserFilter>>
  /** Negates the expression. */
  not?: Maybe<CompanyAdminUserFilter>
}

/** A connection to a list of `Premium` values. */
export type PremiumsConnection = {
  __typename?: 'PremiumsConnection'
  /** A list of `Premium` objects. */
  nodes: Array<Premium>
  /** A list of edges which contains the `Premium` and cursor to aid in pagination. */
  edges: Array<PremiumsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Premium` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type Premium = Node & {
  __typename?: 'Premium'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  premiumDefinitionId: Scalars['UUID']
  profileId: Scalars['UUID']
  builtInFeedback: Scalars['Int']
  purchasedFeedback: Scalars['Int']
  status: PremiumStatus
  companyId?: Maybe<Scalars['UUID']>
  stripeCustomerId?: Maybe<Scalars['UUID']>
  /** Reads a single `PremiumDefinition` that is related to this `Premium`. */
  premiumDefinitionByPremiumDefinitionId?: Maybe<PremiumDefinition>
  /** Reads a single `Profile` that is related to this `Premium`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads a single `Company` that is related to this `Premium`. */
  companyByCompanyId?: Maybe<Company>
  /** Reads a single `CompanyGroupPremium` that is related to this `Premium`. */
  companyGroupPremiumByPremiumId?: Maybe<CompanyGroupPremium>
  /**
   * Reads and enables pagination through a set of `CompanyGroupPremium`.
   * @deprecated Please use companyGroupPremiumByPremiumId instead
   */
  companyGroupPremiumsByPremiumId: CompanyGroupPremiumsConnection
}

export type PremiumCompanyGroupPremiumsByPremiumIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyGroupPremiumsOrderBy>>
  condition?: Maybe<CompanyGroupPremiumCondition>
  filter?: Maybe<CompanyGroupPremiumFilter>
}

export enum PremiumStatus {
  Incomplete = 'INCOMPLETE',
  IncompleteExpired = 'INCOMPLETE_EXPIRED',
  Trialing = 'TRIALING',
  Active = 'ACTIVE',
  PastDue = 'PAST_DUE',
  Canceled = 'CANCELED',
  Unpaid = 'UNPAID',
}

export type PremiumDefinition = Node & {
  __typename?: 'PremiumDefinition'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  name: ProfilePremium
  maxFrames: Scalars['Int']
  dailyPosts: Scalars['Int']
  concurrentProjects: Scalars['Int']
  stripePriceId: Scalars['String']
  price: Scalars['Int']
  /** Reads and enables pagination through a set of `Premium`. */
  premiumsByPremiumDefinitionId: PremiumsConnection
}

export type PremiumDefinitionPremiumsByPremiumDefinitionIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PremiumsOrderBy>>
  condition?: Maybe<PremiumCondition>
  filter?: Maybe<PremiumFilter>
}

export enum ProfilePremium {
  Default = 'DEFAULT',
  Plus = 'PLUS',
  Pro = 'PRO',
}

/** Methods to use when ordering `Premium`. */
export enum PremiumsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PremiumDefinitionIdAsc = 'PREMIUM_DEFINITION_ID_ASC',
  PremiumDefinitionIdDesc = 'PREMIUM_DEFINITION_ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  BuiltInFeedbackAsc = 'BUILT_IN_FEEDBACK_ASC',
  BuiltInFeedbackDesc = 'BUILT_IN_FEEDBACK_DESC',
  PurchasedFeedbackAsc = 'PURCHASED_FEEDBACK_ASC',
  PurchasedFeedbackDesc = 'PURCHASED_FEEDBACK_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  StripeCustomerIdAsc = 'STRIPE_CUSTOMER_ID_ASC',
  StripeCustomerIdDesc = 'STRIPE_CUSTOMER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Premium` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PremiumCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `premiumDefinitionId` field. */
  premiumDefinitionId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `builtInFeedback` field. */
  builtInFeedback?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `purchasedFeedback` field. */
  purchasedFeedback?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PremiumStatus>
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `stripeCustomerId` field. */
  stripeCustomerId?: Maybe<Scalars['UUID']>
}

/** A filter to be used against `Premium` object types. All fields are combined with a logical ‘and.’ */
export type PremiumFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `premiumDefinitionId` field. */
  premiumDefinitionId?: Maybe<UuidFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `builtInFeedback` field. */
  builtInFeedback?: Maybe<IntFilter>
  /** Filter by the object’s `purchasedFeedback` field. */
  purchasedFeedback?: Maybe<IntFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PremiumStatusFilter>
  /** Filter by the object’s `companyId` field. */
  companyId?: Maybe<UuidFilter>
  /** Filter by the object’s `stripeCustomerId` field. */
  stripeCustomerId?: Maybe<UuidFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PremiumFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PremiumFilter>>
  /** Negates the expression. */
  not?: Maybe<PremiumFilter>
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>
}

/** A filter to be used against PremiumStatus fields. All fields are combined with a logical ‘and.’ */
export type PremiumStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<PremiumStatus>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<PremiumStatus>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<PremiumStatus>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<PremiumStatus>
  /** Included in the specified list. */
  in?: Maybe<Array<PremiumStatus>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<PremiumStatus>>
  /** Less than the specified value. */
  lessThan?: Maybe<PremiumStatus>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<PremiumStatus>
  /** Greater than the specified value. */
  greaterThan?: Maybe<PremiumStatus>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<PremiumStatus>
}

export type CompanyGroupPremium = Node & {
  __typename?: 'CompanyGroupPremium'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  premiumId: Scalars['UUID']
  companyGroupId: Scalars['UUID']
  /** Reads a single `Premium` that is related to this `CompanyGroupPremium`. */
  premiumByPremiumId?: Maybe<Premium>
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupPremium`. */
  companyProGroupByCompanyGroupId?: Maybe<CompanyProGroup>
}

export type CompanyProGroup = Node & {
  __typename?: 'CompanyProGroup'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  companyId: Scalars['UUID']
  groupName: Scalars['String']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  /** Reads a single `Company` that is related to this `CompanyProGroup`. */
  companyByCompanyId?: Maybe<Company>
  /** Reads and enables pagination through a set of `CompanyGroupMonth`. */
  companyGroupMonthsByGroupId: CompanyGroupMonthsConnection
  /** Reads and enables pagination through a set of `CompanyGroupPremium`. */
  companyGroupPremiumsByCompanyGroupId: CompanyGroupPremiumsConnection
  /** Reads and enables pagination through a set of `VProMembership`. */
  vProMembershipsByCompanyProGroupId: VProMembershipsConnection
}

export type CompanyProGroupCompanyGroupMonthsByGroupIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyGroupMonthsOrderBy>>
  condition?: Maybe<CompanyGroupMonthCondition>
  filter?: Maybe<CompanyGroupMonthFilter>
}

export type CompanyProGroupCompanyGroupPremiumsByCompanyGroupIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CompanyGroupPremiumsOrderBy>>
  condition?: Maybe<CompanyGroupPremiumCondition>
  filter?: Maybe<CompanyGroupPremiumFilter>
}

export type CompanyProGroupVProMembershipsByCompanyProGroupIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<VProMembershipsOrderBy>>
  condition?: Maybe<VProMembershipCondition>
  filter?: Maybe<VProMembershipFilter>
}

/** A connection to a list of `CompanyGroupMonth` values. */
export type CompanyGroupMonthsConnection = {
  __typename?: 'CompanyGroupMonthsConnection'
  /** A list of `CompanyGroupMonth` objects. */
  nodes: Array<CompanyGroupMonth>
  /** A list of edges which contains the `CompanyGroupMonth` and cursor to aid in pagination. */
  edges: Array<CompanyGroupMonthsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CompanyGroupMonth` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type CompanyGroupMonth = Node & {
  __typename?: 'CompanyGroupMonth'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  groupId: Scalars['UUID']
  month: Scalars['Int']
  year: Scalars['Int']
  amountFeedbacks: Scalars['Int']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupMonth`. */
  companyProGroupByGroupId?: Maybe<CompanyProGroup>
}

/** A `CompanyGroupMonth` edge in the connection. */
export type CompanyGroupMonthsEdge = {
  __typename?: 'CompanyGroupMonthsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `CompanyGroupMonth` at the end of the edge. */
  node: CompanyGroupMonth
}

/** Methods to use when ordering `CompanyGroupMonth`. */
export enum CompanyGroupMonthsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  AmountFeedbacksAsc = 'AMOUNT_FEEDBACKS_ASC',
  AmountFeedbacksDesc = 'AMOUNT_FEEDBACKS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `CompanyGroupMonth` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CompanyGroupMonthCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `month` field. */
  month?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `amountFeedbacks` field. */
  amountFeedbacks?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `CompanyGroupMonth` object types. All fields are combined with a logical ‘and.’ */
export type CompanyGroupMonthFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `groupId` field. */
  groupId?: Maybe<UuidFilter>
  /** Filter by the object’s `month` field. */
  month?: Maybe<IntFilter>
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>
  /** Filter by the object’s `amountFeedbacks` field. */
  amountFeedbacks?: Maybe<IntFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CompanyGroupMonthFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CompanyGroupMonthFilter>>
  /** Negates the expression. */
  not?: Maybe<CompanyGroupMonthFilter>
}

/** A connection to a list of `CompanyGroupPremium` values. */
export type CompanyGroupPremiumsConnection = {
  __typename?: 'CompanyGroupPremiumsConnection'
  /** A list of `CompanyGroupPremium` objects. */
  nodes: Array<CompanyGroupPremium>
  /** A list of edges which contains the `CompanyGroupPremium` and cursor to aid in pagination. */
  edges: Array<CompanyGroupPremiumsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CompanyGroupPremium` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `CompanyGroupPremium` edge in the connection. */
export type CompanyGroupPremiumsEdge = {
  __typename?: 'CompanyGroupPremiumsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `CompanyGroupPremium` at the end of the edge. */
  node: CompanyGroupPremium
}

/** Methods to use when ordering `CompanyGroupPremium`. */
export enum CompanyGroupPremiumsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PremiumIdAsc = 'PREMIUM_ID_ASC',
  PremiumIdDesc = 'PREMIUM_ID_DESC',
  CompanyGroupIdAsc = 'COMPANY_GROUP_ID_ASC',
  CompanyGroupIdDesc = 'COMPANY_GROUP_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `CompanyGroupPremium` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type CompanyGroupPremiumCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `premiumId` field. */
  premiumId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `companyGroupId` field. */
  companyGroupId?: Maybe<Scalars['UUID']>
}

/** A filter to be used against `CompanyGroupPremium` object types. All fields are combined with a logical ‘and.’ */
export type CompanyGroupPremiumFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `premiumId` field. */
  premiumId?: Maybe<UuidFilter>
  /** Filter by the object’s `companyGroupId` field. */
  companyGroupId?: Maybe<UuidFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CompanyGroupPremiumFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CompanyGroupPremiumFilter>>
  /** Negates the expression. */
  not?: Maybe<CompanyGroupPremiumFilter>
}

/** A connection to a list of `VProMembership` values. */
export type VProMembershipsConnection = {
  __typename?: 'VProMembershipsConnection'
  /** A list of `VProMembership` objects. */
  nodes: Array<VProMembership>
  /** A list of edges which contains the `VProMembership` and cursor to aid in pagination. */
  edges: Array<VProMembershipsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VProMembership` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VProMembership = {
  __typename?: 'VProMembership'
  id?: Maybe<Scalars['UUID']>
  profileId?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  username?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  builtInFeedback?: Maybe<Scalars['Int']>
  purchasedFeedback?: Maybe<Scalars['Int']>
  premiumName?: Maybe<ProfilePremium>
  dailyPosts?: Maybe<Scalars['Int']>
  maxFrames?: Maybe<Scalars['Int']>
  concurrentProjects?: Maybe<Scalars['Int']>
  groupName?: Maybe<Scalars['String']>
  companyProGroupId?: Maybe<Scalars['UUID']>
  status?: Maybe<PremiumStatus>
  /** Reads a single `CompanyProGroup` that is related to this `VProMembership`. */
  companyProGroupByCompanyProGroupId?: Maybe<CompanyProGroup>
}

/** A `VProMembership` edge in the connection. */
export type VProMembershipsEdge = {
  __typename?: 'VProMembershipsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VProMembership` at the end of the edge. */
  node: VProMembership
}

/** Methods to use when ordering `VProMembership`. */
export enum VProMembershipsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  CompanyNameAsc = 'COMPANY_NAME_ASC',
  CompanyNameDesc = 'COMPANY_NAME_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  BuiltInFeedbackAsc = 'BUILT_IN_FEEDBACK_ASC',
  BuiltInFeedbackDesc = 'BUILT_IN_FEEDBACK_DESC',
  PurchasedFeedbackAsc = 'PURCHASED_FEEDBACK_ASC',
  PurchasedFeedbackDesc = 'PURCHASED_FEEDBACK_DESC',
  PremiumNameAsc = 'PREMIUM_NAME_ASC',
  PremiumNameDesc = 'PREMIUM_NAME_DESC',
  DailyPostsAsc = 'DAILY_POSTS_ASC',
  DailyPostsDesc = 'DAILY_POSTS_DESC',
  MaxFramesAsc = 'MAX_FRAMES_ASC',
  MaxFramesDesc = 'MAX_FRAMES_DESC',
  ConcurrentProjectsAsc = 'CONCURRENT_PROJECTS_ASC',
  ConcurrentProjectsDesc = 'CONCURRENT_PROJECTS_DESC',
  GroupNameAsc = 'GROUP_NAME_ASC',
  GroupNameDesc = 'GROUP_NAME_DESC',
  CompanyProGroupIdAsc = 'COMPANY_PRO_GROUP_ID_ASC',
  CompanyProGroupIdDesc = 'COMPANY_PRO_GROUP_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
}

/**
 * A condition to be used against `VProMembership` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VProMembershipCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `companyName` field. */
  companyName?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `logo` field. */
  logo?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `builtInFeedback` field. */
  builtInFeedback?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `purchasedFeedback` field. */
  purchasedFeedback?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `premiumName` field. */
  premiumName?: Maybe<ProfilePremium>
  /** Checks for equality with the object’s `dailyPosts` field. */
  dailyPosts?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `maxFrames` field. */
  maxFrames?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `concurrentProjects` field. */
  concurrentProjects?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `groupName` field. */
  groupName?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `companyProGroupId` field. */
  companyProGroupId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PremiumStatus>
}

/** A filter to be used against `VProMembership` object types. All fields are combined with a logical ‘and.’ */
export type VProMembershipFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `companyName` field. */
  companyName?: Maybe<StringFilter>
  /** Filter by the object’s `logo` field. */
  logo?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Filter by the object’s `builtInFeedback` field. */
  builtInFeedback?: Maybe<IntFilter>
  /** Filter by the object’s `purchasedFeedback` field. */
  purchasedFeedback?: Maybe<IntFilter>
  /** Filter by the object’s `premiumName` field. */
  premiumName?: Maybe<ProfilePremiumFilter>
  /** Filter by the object’s `dailyPosts` field. */
  dailyPosts?: Maybe<IntFilter>
  /** Filter by the object’s `maxFrames` field. */
  maxFrames?: Maybe<IntFilter>
  /** Filter by the object’s `concurrentProjects` field. */
  concurrentProjects?: Maybe<IntFilter>
  /** Filter by the object’s `groupName` field. */
  groupName?: Maybe<StringFilter>
  /** Filter by the object’s `companyProGroupId` field. */
  companyProGroupId?: Maybe<UuidFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PremiumStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VProMembershipFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VProMembershipFilter>>
  /** Negates the expression. */
  not?: Maybe<VProMembershipFilter>
}

/** A filter to be used against ProfilePremium fields. All fields are combined with a logical ‘and.’ */
export type ProfilePremiumFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<ProfilePremium>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ProfilePremium>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ProfilePremium>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ProfilePremium>
  /** Included in the specified list. */
  in?: Maybe<Array<ProfilePremium>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ProfilePremium>>
  /** Less than the specified value. */
  lessThan?: Maybe<ProfilePremium>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ProfilePremium>
  /** Greater than the specified value. */
  greaterThan?: Maybe<ProfilePremium>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ProfilePremium>
}

/** A `Premium` edge in the connection. */
export type PremiumsEdge = {
  __typename?: 'PremiumsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Premium` at the end of the edge. */
  node: Premium
}

/** A connection to a list of `CompanyProGroup` values. */
export type CompanyProGroupsConnection = {
  __typename?: 'CompanyProGroupsConnection'
  /** A list of `CompanyProGroup` objects. */
  nodes: Array<CompanyProGroup>
  /** A list of edges which contains the `CompanyProGroup` and cursor to aid in pagination. */
  edges: Array<CompanyProGroupsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CompanyProGroup` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `CompanyProGroup` edge in the connection. */
export type CompanyProGroupsEdge = {
  __typename?: 'CompanyProGroupsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `CompanyProGroup` at the end of the edge. */
  node: CompanyProGroup
}

/** Methods to use when ordering `CompanyProGroup`. */
export enum CompanyProGroupsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  GroupNameAsc = 'GROUP_NAME_ASC',
  GroupNameDesc = 'GROUP_NAME_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `CompanyProGroup` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CompanyProGroupCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `groupName` field. */
  groupName?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>
}

/** A filter to be used against `CompanyProGroup` object types. All fields are combined with a logical ‘and.’ */
export type CompanyProGroupFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `companyId` field. */
  companyId?: Maybe<UuidFilter>
  /** Filter by the object’s `groupName` field. */
  groupName?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CompanyProGroupFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CompanyProGroupFilter>>
  /** Negates the expression. */
  not?: Maybe<CompanyProGroupFilter>
}

/** A connection to a list of `VCompanyAdmin` values. */
export type VCompanyAdminsConnection = {
  __typename?: 'VCompanyAdminsConnection'
  /** A list of `VCompanyAdmin` objects. */
  nodes: Array<VCompanyAdmin>
  /** A list of edges which contains the `VCompanyAdmin` and cursor to aid in pagination. */
  edges: Array<VCompanyAdminsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VCompanyAdmin` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VCompanyAdmin = {
  __typename?: 'VCompanyAdmin'
  id?: Maybe<Scalars['UUID']>
  name?: Maybe<Scalars['String']>
  nameUrlSafe?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['JSON']>
  link?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  members?: Maybe<Scalars['BigInt']>
  groups?: Maybe<Scalars['BigInt']>
  /** Reads a single `Company` that is related to this `VCompanyAdmin`. */
  companyById?: Maybe<Company>
}

/** A `VCompanyAdmin` edge in the connection. */
export type VCompanyAdminsEdge = {
  __typename?: 'VCompanyAdminsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VCompanyAdmin` at the end of the edge. */
  node: VCompanyAdmin
}

/** Methods to use when ordering `VCompanyAdmin`. */
export enum VCompanyAdminsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameUrlSafeAsc = 'NAME_URL_SAFE_ASC',
  NameUrlSafeDesc = 'NAME_URL_SAFE_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  MembersAsc = 'MEMBERS_ASC',
  MembersDesc = 'MEMBERS_DESC',
  GroupsAsc = 'GROUPS_ASC',
  GroupsDesc = 'GROUPS_DESC',
}

/**
 * A condition to be used against `VCompanyAdmin` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VCompanyAdminCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `nameUrlSafe` field. */
  nameUrlSafe?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['JSON']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `logo` field. */
  logo?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `members` field. */
  members?: Maybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `groups` field. */
  groups?: Maybe<Scalars['BigInt']>
}

/** A filter to be used against `VCompanyAdmin` object types. All fields are combined with a logical ‘and.’ */
export type VCompanyAdminFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>
  /** Filter by the object’s `nameUrlSafe` field. */
  nameUrlSafe?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Filter by the object’s `logo` field. */
  logo?: Maybe<StringFilter>
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `members` field. */
  members?: Maybe<BigIntFilter>
  /** Filter by the object’s `groups` field. */
  groups?: Maybe<BigIntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VCompanyAdminFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VCompanyAdminFilter>>
  /** Negates the expression. */
  not?: Maybe<VCompanyAdminFilter>
}

/** A connection to a list of `VAdminInstructor` values. */
export type VAdminInstructorsConnection = {
  __typename?: 'VAdminInstructorsConnection'
  /** A list of `VAdminInstructor` objects. */
  nodes: Array<VAdminInstructor>
  /** A list of edges which contains the `VAdminInstructor` and cursor to aid in pagination. */
  edges: Array<VAdminInstructorsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAdminInstructor` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAdminInstructor = {
  __typename?: 'VAdminInstructor'
  id?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  status?: Maybe<InstructorStatus>
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  biography?: Maybe<Scalars['String']>
  banner?: Maybe<Scalars['String']>
  availability?: Maybe<InstructorAvailability>
  /** Reads a single `Profile` that is related to this `VAdminInstructor`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `VAdminInstructor` edge in the connection. */
export type VAdminInstructorsEdge = {
  __typename?: 'VAdminInstructorsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAdminInstructor` at the end of the edge. */
  node: VAdminInstructor
}

/** Methods to use when ordering `VAdminInstructor`. */
export enum VAdminInstructorsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  AcceptedAgreementAsc = 'ACCEPTED_AGREEMENT_ASC',
  AcceptedAgreementDesc = 'ACCEPTED_AGREEMENT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  BannerAsc = 'BANNER_ASC',
  BannerDesc = 'BANNER_DESC',
  AvailabilityAsc = 'AVAILABILITY_ASC',
  AvailabilityDesc = 'AVAILABILITY_DESC',
}

/**
 * A condition to be used against `VAdminInstructor` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VAdminInstructorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<InstructorStatus>
  /** Checks for equality with the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `biography` field. */
  biography?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `banner` field. */
  banner?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `availability` field. */
  availability?: Maybe<InstructorAvailability>
}

/** A filter to be used against `VAdminInstructor` object types. All fields are combined with a logical ‘and.’ */
export type VAdminInstructorFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<BooleanFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `biography` field. */
  biography?: Maybe<StringFilter>
  /** Filter by the object’s `banner` field. */
  banner?: Maybe<StringFilter>
  /** Filter by the object’s `availability` field. */
  availability?: Maybe<InstructorAvailabilityFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAdminInstructorFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAdminInstructorFilter>>
  /** Negates the expression. */
  not?: Maybe<VAdminInstructorFilter>
}

/** A connection to a list of `VAnimationPreview` values. */
export type VAnimationPreviewsConnection = {
  __typename?: 'VAnimationPreviewsConnection'
  /** A list of `VAnimationPreview` objects. */
  nodes: Array<VAnimationPreview>
  /** A list of edges which contains the `VAnimationPreview` and cursor to aid in pagination. */
  edges: Array<VAnimationPreviewsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAnimationPreview` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAnimationPreview = {
  __typename?: 'VAnimationPreview'
  id?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
  submissions?: Maybe<Scalars['BigInt']>
  notes?: Maybe<Scalars['BigInt']>
  feedbackCount?: Maybe<Scalars['BigInt']>
  profileId?: Maybe<Scalars['UUID']>
  title?: Maybe<Scalars['String']>
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  audio?: Maybe<Scalars['Boolean']>
  shortComment?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Reads a single `Profile` that is related to this `VAnimationPreview`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `VAnimationPreview` edge in the connection. */
export type VAnimationPreviewsEdge = {
  __typename?: 'VAnimationPreviewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAnimationPreview` at the end of the edge. */
  node: VAnimationPreview
}

/** Methods to use when ordering `VAnimationPreview`. */
export enum VAnimationPreviewsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  SubmissionsAsc = 'SUBMISSIONS_ASC',
  SubmissionsDesc = 'SUBMISSIONS_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  FeedbackCountAsc = 'FEEDBACK_COUNT_ASC',
  FeedbackCountDesc = 'FEEDBACK_COUNT_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  StartFrameAsc = 'START_FRAME_ASC',
  StartFrameDesc = 'START_FRAME_DESC',
  EndFrameAsc = 'END_FRAME_ASC',
  EndFrameDesc = 'END_FRAME_DESC',
  ThumbnailUrlAsc = 'THUMBNAIL_URL_ASC',
  ThumbnailUrlDesc = 'THUMBNAIL_URL_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  AudioAsc = 'AUDIO_ASC',
  AudioDesc = 'AUDIO_DESC',
  ShortCommentAsc = 'SHORT_COMMENT_ASC',
  ShortCommentDesc = 'SHORT_COMMENT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/**
 * A condition to be used against `VAnimationPreview` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VAnimationPreviewCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissions` field. */
  submissions?: Maybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `notes` field. */
  notes?: Maybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `feedbackCount` field. */
  feedbackCount?: Maybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `startFrame` field. */
  startFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `endFrame` field. */
  endFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `audio` field. */
  audio?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `shortComment` field. */
  shortComment?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `VAnimationPreview` object types. All fields are combined with a logical ‘and.’ */
export type VAnimationPreviewFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `submissions` field. */
  submissions?: Maybe<BigIntFilter>
  /** Filter by the object’s `notes` field. */
  notes?: Maybe<BigIntFilter>
  /** Filter by the object’s `feedbackCount` field. */
  feedbackCount?: Maybe<BigIntFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `startFrame` field. */
  startFrame?: Maybe<IntFilter>
  /** Filter by the object’s `endFrame` field. */
  endFrame?: Maybe<IntFilter>
  /** Filter by the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `audio` field. */
  audio?: Maybe<BooleanFilter>
  /** Filter by the object’s `shortComment` field. */
  shortComment?: Maybe<StringFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAnimationPreviewFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAnimationPreviewFilter>>
  /** Negates the expression. */
  not?: Maybe<VAnimationPreviewFilter>
}

/** A connection to a list of `VNote` values. */
export type VNotesConnection = {
  __typename?: 'VNotesConnection'
  /** A list of `VNote` objects. */
  nodes: Array<VNote>
  /** A list of edges which contains the `VNote` and cursor to aid in pagination. */
  edges: Array<VNotesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VNote` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VNote = {
  __typename?: 'VNote'
  id?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  status?: Maybe<PublishStatus>
  paragraph?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  noteComments?: Maybe<Scalars['BigInt']>
  /** Reads a single `Profile` that is related to this `VNote`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `VNote` edge in the connection. */
export type VNotesEdge = {
  __typename?: 'VNotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VNote` at the end of the edge. */
  node: VNote
}

/** Methods to use when ordering `VNote`. */
export enum VNotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ParagraphAsc = 'PARAGRAPH_ASC',
  ParagraphDesc = 'PARAGRAPH_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  NoteCommentsAsc = 'NOTE_COMMENTS_ASC',
  NoteCommentsDesc = 'NOTE_COMMENTS_DESC',
}

/** A condition to be used against `VNote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VNoteCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
  /** Checks for equality with the object’s `paragraph` field. */
  paragraph?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `noteComments` field. */
  noteComments?: Maybe<Scalars['BigInt']>
}

/** A filter to be used against `VNote` object types. All fields are combined with a logical ‘and.’ */
export type VNoteFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Filter by the object’s `paragraph` field. */
  paragraph?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `noteComments` field. */
  noteComments?: Maybe<BigIntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VNoteFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VNoteFilter>>
  /** Negates the expression. */
  not?: Maybe<VNoteFilter>
}

/** A connection to a list of `VOwnNote` values. */
export type VOwnNotesConnection = {
  __typename?: 'VOwnNotesConnection'
  /** A list of `VOwnNote` objects. */
  nodes: Array<VOwnNote>
  /** A list of edges which contains the `VOwnNote` and cursor to aid in pagination. */
  edges: Array<VOwnNotesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VOwnNote` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VOwnNote = {
  __typename?: 'VOwnNote'
  id?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  status?: Maybe<PublishStatus>
  submissionId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  paragraph?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  noteComments?: Maybe<Scalars['BigInt']>
  /** Reads a single `Profile` that is related to this `VOwnNote`. */
  profileByProfileId?: Maybe<Profile>
}

/** A `VOwnNote` edge in the connection. */
export type VOwnNotesEdge = {
  __typename?: 'VOwnNotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VOwnNote` at the end of the edge. */
  node: VOwnNote
}

/** Methods to use when ordering `VOwnNote`. */
export enum VOwnNotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ParagraphAsc = 'PARAGRAPH_ASC',
  ParagraphDesc = 'PARAGRAPH_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  NoteCommentsAsc = 'NOTE_COMMENTS_ASC',
  NoteCommentsDesc = 'NOTE_COMMENTS_DESC',
}

/**
 * A condition to be used against `VOwnNote` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VOwnNoteCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `paragraph` field. */
  paragraph?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `noteComments` field. */
  noteComments?: Maybe<Scalars['BigInt']>
}

/** A filter to be used against `VOwnNote` object types. All fields are combined with a logical ‘and.’ */
export type VOwnNoteFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `paragraph` field. */
  paragraph?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `noteComments` field. */
  noteComments?: Maybe<BigIntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VOwnNoteFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VOwnNoteFilter>>
  /** Negates the expression. */
  not?: Maybe<VOwnNoteFilter>
}

/** A connection to a list of `Submission` values. */
export type SubmissionsConnection = {
  __typename?: 'SubmissionsConnection'
  /** A list of `Submission` objects. */
  nodes: Array<Submission>
  /** A list of edges which contains the `Submission` and cursor to aid in pagination. */
  edges: Array<SubmissionsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Submission` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Submission` edge in the connection. */
export type SubmissionsEdge = {
  __typename?: 'SubmissionsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Submission` at the end of the edge. */
  node: Submission
}

/** Methods to use when ordering `Submission`. */
export enum SubmissionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  StartFrameAsc = 'START_FRAME_ASC',
  StartFrameDesc = 'START_FRAME_DESC',
  EndFrameAsc = 'END_FRAME_ASC',
  EndFrameDesc = 'END_FRAME_DESC',
  ThumbnailUrlAsc = 'THUMBNAIL_URL_ASC',
  ThumbnailUrlDesc = 'THUMBNAIL_URL_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  VideoUrlAsc = 'VIDEO_URL_ASC',
  VideoUrlDesc = 'VIDEO_URL_DESC',
  FrameRateAsc = 'FRAME_RATE_ASC',
  FrameRateDesc = 'FRAME_RATE_DESC',
  AudioAsc = 'AUDIO_ASC',
  AudioDesc = 'AUDIO_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ShortCommentAsc = 'SHORT_COMMENT_ASC',
  ShortCommentDesc = 'SHORT_COMMENT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `Submission` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SubmissionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `startFrame` field. */
  startFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `endFrame` field. */
  endFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `videoUrl` field. */
  videoUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `frameRate` field. */
  frameRate?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `audio` field. */
  audio?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `comment` field. */
  comment?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `shortComment` field. */
  shortComment?: Maybe<Scalars['String']>
}

/** A filter to be used against `Submission` object types. All fields are combined with a logical ‘and.’ */
export type SubmissionFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `startFrame` field. */
  startFrame?: Maybe<IntFilter>
  /** Filter by the object’s `endFrame` field. */
  endFrame?: Maybe<IntFilter>
  /** Filter by the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<StringFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `videoUrl` field. */
  videoUrl?: Maybe<StringFilter>
  /** Filter by the object’s `frameRate` field. */
  frameRate?: Maybe<StringFilter>
  /** Filter by the object’s `audio` field. */
  audio?: Maybe<BooleanFilter>
  /** Filter by the object’s `comment` field. */
  comment?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `shortComment` field. */
  shortComment?: Maybe<StringFilter>
  /** Filter by the object’s `currentProfileHasReplied` field. */
  currentProfileHasReplied?: Maybe<BooleanFilter>
  /** Filter by the object’s `hasProFeedback` field. */
  hasProFeedback?: Maybe<BooleanFilter>
  /** Filter by the object’s `isLatest` field. */
  isLatest?: Maybe<BooleanFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<SubmissionFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<SubmissionFilter>>
  /** Negates the expression. */
  not?: Maybe<SubmissionFilter>
}

/** A connection to a list of `FeedbackRequest` values. */
export type FeedbackRequestsConnection = {
  __typename?: 'FeedbackRequestsConnection'
  /** A list of `FeedbackRequest` objects. */
  nodes: Array<FeedbackRequest>
  /** A list of edges which contains the `FeedbackRequest` and cursor to aid in pagination. */
  edges: Array<FeedbackRequestsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `FeedbackRequest` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `FeedbackRequest` edge in the connection. */
export type FeedbackRequestsEdge = {
  __typename?: 'FeedbackRequestsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `FeedbackRequest` at the end of the edge. */
  node: FeedbackRequest
}

/** Methods to use when ordering `FeedbackRequest`. */
export enum FeedbackRequestsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `FeedbackRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FeedbackRequestCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<FeedbackRequestStatus>
}

/** A filter to be used against `FeedbackRequest` object types. All fields are combined with a logical ‘and.’ */
export type FeedbackRequestFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<FeedbackRequestStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<FeedbackRequestFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<FeedbackRequestFilter>>
  /** Negates the expression. */
  not?: Maybe<FeedbackRequestFilter>
}

/** A filter to be used against FeedbackRequestStatus fields. All fields are combined with a logical ‘and.’ */
export type FeedbackRequestStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<FeedbackRequestStatus>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<FeedbackRequestStatus>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<FeedbackRequestStatus>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<FeedbackRequestStatus>
  /** Included in the specified list. */
  in?: Maybe<Array<FeedbackRequestStatus>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<FeedbackRequestStatus>>
  /** Less than the specified value. */
  lessThan?: Maybe<FeedbackRequestStatus>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<FeedbackRequestStatus>
  /** Greater than the specified value. */
  greaterThan?: Maybe<FeedbackRequestStatus>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<FeedbackRequestStatus>
}

/** A `Animation` edge in the connection. */
export type AnimationsEdge = {
  __typename?: 'AnimationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Animation` at the end of the edge. */
  node: Animation
}

/** A connection to a list of `Company` values. */
export type CompaniesConnection = {
  __typename?: 'CompaniesConnection'
  /** A list of `Company` objects. */
  nodes: Array<Company>
  /** A list of edges which contains the `Company` and cursor to aid in pagination. */
  edges: Array<CompaniesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Company` edge in the connection. */
export type CompaniesEdge = {
  __typename?: 'CompaniesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Company` at the end of the edge. */
  node: Company
}

/** Methods to use when ordering `Company`. */
export enum CompaniesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  NameUrlSafeAsc = 'NAME_URL_SAFE_ASC',
  NameUrlSafeDesc = 'NAME_URL_SAFE_DESC',
  PublicAsc = 'PUBLIC_ASC',
  PublicDesc = 'PUBLIC_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Company` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CompanyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `logo` field. */
  logo?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['JSON']>
  /** Checks for equality with the object’s `nameUrlSafe` field. */
  nameUrlSafe?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `public` field. */
  public?: Maybe<Scalars['Boolean']>
}

/** A filter to be used against `Company` object types. All fields are combined with a logical ‘and.’ */
export type CompanyFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Filter by the object’s `logo` field. */
  logo?: Maybe<StringFilter>
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `nameUrlSafe` field. */
  nameUrlSafe?: Maybe<StringFilter>
  /** Filter by the object’s `public` field. */
  public?: Maybe<BooleanFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CompanyFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CompanyFilter>>
  /** Negates the expression. */
  not?: Maybe<CompanyFilter>
}

/** A connection to a list of `Headline` values. */
export type HeadlinesConnection = {
  __typename?: 'HeadlinesConnection'
  /** A list of `Headline` objects. */
  nodes: Array<Headline>
  /** A list of edges which contains the `Headline` and cursor to aid in pagination. */
  edges: Array<HeadlinesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Headline` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type Headline = Node & {
  __typename?: 'Headline'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  title?: Maybe<Scalars['String']>
  thumbnail: Scalars['String']
  link: Scalars['String']
}

/** A `Headline` edge in the connection. */
export type HeadlinesEdge = {
  __typename?: 'HeadlinesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Headline` at the end of the edge. */
  node: Headline
}

/** Methods to use when ordering `Headline`. */
export enum HeadlinesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `Headline` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HeadlineCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
}

/** A filter to be used against `Headline` object types. All fields are combined with a logical ‘and.’ */
export type HeadlineFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<HeadlineFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<HeadlineFilter>>
  /** Negates the expression. */
  not?: Maybe<HeadlineFilter>
}

/** A connection to a list of `PremiumDefinition` values. */
export type PremiumDefinitionsConnection = {
  __typename?: 'PremiumDefinitionsConnection'
  /** A list of `PremiumDefinition` objects. */
  nodes: Array<PremiumDefinition>
  /** A list of edges which contains the `PremiumDefinition` and cursor to aid in pagination. */
  edges: Array<PremiumDefinitionsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PremiumDefinition` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `PremiumDefinition` edge in the connection. */
export type PremiumDefinitionsEdge = {
  __typename?: 'PremiumDefinitionsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `PremiumDefinition` at the end of the edge. */
  node: PremiumDefinition
}

/** Methods to use when ordering `PremiumDefinition`. */
export enum PremiumDefinitionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  MaxFramesAsc = 'MAX_FRAMES_ASC',
  MaxFramesDesc = 'MAX_FRAMES_DESC',
  DailyPostsAsc = 'DAILY_POSTS_ASC',
  DailyPostsDesc = 'DAILY_POSTS_DESC',
  ConcurrentProjectsAsc = 'CONCURRENT_PROJECTS_ASC',
  ConcurrentProjectsDesc = 'CONCURRENT_PROJECTS_DESC',
  StripePriceIdAsc = 'STRIPE_PRICE_ID_ASC',
  StripePriceIdDesc = 'STRIPE_PRICE_ID_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `PremiumDefinition` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PremiumDefinitionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<ProfilePremium>
  /** Checks for equality with the object’s `maxFrames` field. */
  maxFrames?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `dailyPosts` field. */
  dailyPosts?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `concurrentProjects` field. */
  concurrentProjects?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `stripePriceId` field. */
  stripePriceId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `price` field. */
  price?: Maybe<Scalars['Int']>
}

/** A filter to be used against `PremiumDefinition` object types. All fields are combined with a logical ‘and.’ */
export type PremiumDefinitionFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `name` field. */
  name?: Maybe<ProfilePremiumFilter>
  /** Filter by the object’s `maxFrames` field. */
  maxFrames?: Maybe<IntFilter>
  /** Filter by the object’s `dailyPosts` field. */
  dailyPosts?: Maybe<IntFilter>
  /** Filter by the object’s `concurrentProjects` field. */
  concurrentProjects?: Maybe<IntFilter>
  /** Filter by the object’s `stripePriceId` field. */
  stripePriceId?: Maybe<StringFilter>
  /** Filter by the object’s `price` field. */
  price?: Maybe<IntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PremiumDefinitionFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PremiumDefinitionFilter>>
  /** Negates the expression. */
  not?: Maybe<PremiumDefinitionFilter>
}

/** A connection to a list of `Profile` values. */
export type ProfilesConnection = {
  __typename?: 'ProfilesConnection'
  /** A list of `Profile` objects. */
  nodes: Array<Profile>
  /** A list of edges which contains the `Profile` and cursor to aid in pagination. */
  edges: Array<ProfilesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Profile` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Profile` edge in the connection. */
export type ProfilesEdge = {
  __typename?: 'ProfilesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Profile` at the end of the edge. */
  node: Profile
}

/** Methods to use when ordering `Profile`. */
export enum ProfilesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AboutAsc = 'ABOUT_ASC',
  AboutDesc = 'ABOUT_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  ReelDescriptionAsc = 'REEL_DESCRIPTION_ASC',
  ReelDescriptionDesc = 'REEL_DESCRIPTION_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  BannerAsc = 'BANNER_ASC',
  BannerDesc = 'BANNER_DESC',
  OccupationAsc = 'OCCUPATION_ASC',
  OccupationDesc = 'OCCUPATION_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  OrganisationAsc = 'ORGANISATION_ASC',
  OrganisationDesc = 'ORGANISATION_DESC',
  ReelAsc = 'REEL_ASC',
  ReelDesc = 'REEL_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Profile` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProfileCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `about` field. */
  about?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `firstname` field. */
  firstname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `lastname` field. */
  lastname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `reelDescription` field. */
  reelDescription?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `banner` field. */
  banner?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `occupation` field. */
  occupation?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `role` field. */
  role?: Maybe<UserRole>
  /** Checks for equality with the object’s `organisation` field. */
  organisation?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `reel` field. */
  reel?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `Profile` object types. All fields are combined with a logical ‘and.’ */
export type ProfileFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `about` field. */
  about?: Maybe<StringFilter>
  /** Filter by the object’s `firstname` field. */
  firstname?: Maybe<StringFilter>
  /** Filter by the object’s `lastname` field. */
  lastname?: Maybe<StringFilter>
  /** Filter by the object’s `reelDescription` field. */
  reelDescription?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `banner` field. */
  banner?: Maybe<StringFilter>
  /** Filter by the object’s `occupation` field. */
  occupation?: Maybe<StringFilter>
  /** Filter by the object’s `role` field. */
  role?: Maybe<UserRoleFilter>
  /** Filter by the object’s `organisation` field. */
  organisation?: Maybe<StringFilter>
  /** Filter by the object’s `reel` field. */
  reel?: Maybe<StringFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `canSubmit` field. */
  canSubmit?: Maybe<BooleanFilter>
  /** Filter by the object’s `dailyPosts` field. */
  dailyPosts?: Maybe<IntFilter>
  /** Filter by the object’s `getAdminCompany` field. */
  getAdminCompany?: Maybe<StringFilter>
  /** Filter by the object’s `getBuiltInFeedback` field. */
  getBuiltInFeedback?: Maybe<IntFilter>
  /** Filter by the object’s `isInstructor` field. */
  isInstructor?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `premiumType` field. */
  premiumType?: Maybe<ProfilePremiumFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ProfileFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ProfileFilter>>
  /** Negates the expression. */
  not?: Maybe<ProfileFilter>
}

/** A filter to be used against UserRole fields. All fields are combined with a logical ‘and.’ */
export type UserRoleFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>
  /** Equal to the specified value. */
  equalTo?: Maybe<UserRole>
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<UserRole>
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<UserRole>
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<UserRole>
  /** Included in the specified list. */
  in?: Maybe<Array<UserRole>>
  /** Not included in the specified list. */
  notIn?: Maybe<Array<UserRole>>
  /** Less than the specified value. */
  lessThan?: Maybe<UserRole>
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<UserRole>
  /** Greater than the specified value. */
  greaterThan?: Maybe<UserRole>
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<UserRole>
}

/** A connection to a list of `VAdminFeedbackOverview` values. */
export type VAdminFeedbackOverviewsConnection = {
  __typename?: 'VAdminFeedbackOverviewsConnection'
  /** A list of `VAdminFeedbackOverview` objects. */
  nodes: Array<VAdminFeedbackOverview>
  /** A list of edges which contains the `VAdminFeedbackOverview` and cursor to aid in pagination. */
  edges: Array<VAdminFeedbackOverviewsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAdminFeedbackOverview` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAdminFeedbackOverview = {
  __typename?: 'VAdminFeedbackOverview'
  id?: Maybe<Scalars['UUID']>
  feedbackRequestId?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  profileId?: Maybe<Scalars['UUID']>
  title?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
  animationId?: Maybe<Scalars['String']>
  month?: Maybe<Scalars['Int']>
  year?: Maybe<Scalars['Int']>
}

/** A `VAdminFeedbackOverview` edge in the connection. */
export type VAdminFeedbackOverviewsEdge = {
  __typename?: 'VAdminFeedbackOverviewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAdminFeedbackOverview` at the end of the edge. */
  node: VAdminFeedbackOverview
}

/** Methods to use when ordering `VAdminFeedbackOverview`. */
export enum VAdminFeedbackOverviewsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FeedbackRequestIdAsc = 'FEEDBACK_REQUEST_ID_ASC',
  FeedbackRequestIdDesc = 'FEEDBACK_REQUEST_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
}

/**
 * A condition to be used against `VAdminFeedbackOverview` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type VAdminFeedbackOverviewCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `feedbackRequestId` field. */
  feedbackRequestId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `month` field. */
  month?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>
}

/** A filter to be used against `VAdminFeedbackOverview` object types. All fields are combined with a logical ‘and.’ */
export type VAdminFeedbackOverviewFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `feedbackRequestId` field. */
  feedbackRequestId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `month` field. */
  month?: Maybe<IntFilter>
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAdminFeedbackOverviewFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAdminFeedbackOverviewFilter>>
  /** Negates the expression. */
  not?: Maybe<VAdminFeedbackOverviewFilter>
}

/** A connection to a list of `VAdminFeedbackOverviewCollapsed` values. */
export type VAdminFeedbackOverviewCollapsedsConnection = {
  __typename?: 'VAdminFeedbackOverviewCollapsedsConnection'
  /** A list of `VAdminFeedbackOverviewCollapsed` objects. */
  nodes: Array<VAdminFeedbackOverviewCollapsed>
  /** A list of edges which contains the `VAdminFeedbackOverviewCollapsed` and cursor to aid in pagination. */
  edges: Array<VAdminFeedbackOverviewCollapsedsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAdminFeedbackOverviewCollapsed` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAdminFeedbackOverviewCollapsed = {
  __typename?: 'VAdminFeedbackOverviewCollapsed'
  profileId?: Maybe<Scalars['UUID']>
  count?: Maybe<Scalars['Int']>
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  avatar?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** A `VAdminFeedbackOverviewCollapsed` edge in the connection. */
export type VAdminFeedbackOverviewCollapsedsEdge = {
  __typename?: 'VAdminFeedbackOverviewCollapsedsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAdminFeedbackOverviewCollapsed` at the end of the edge. */
  node: VAdminFeedbackOverviewCollapsed
}

/** Methods to use when ordering `VAdminFeedbackOverviewCollapsed`. */
export enum VAdminFeedbackOverviewCollapsedsOrderBy {
  Natural = 'NATURAL',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CountAsc = 'COUNT_ASC',
  CountDesc = 'COUNT_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
}

/**
 * A condition to be used against `VAdminFeedbackOverviewCollapsed` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type VAdminFeedbackOverviewCollapsedCondition = {
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `count` field. */
  count?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `month` field. */
  month?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
}

/** A filter to be used against `VAdminFeedbackOverviewCollapsed` object types. All fields are combined with a logical ‘and.’ */
export type VAdminFeedbackOverviewCollapsedFilter = {
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `count` field. */
  count?: Maybe<IntFilter>
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>
  /** Filter by the object’s `month` field. */
  month?: Maybe<IntFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAdminFeedbackOverviewCollapsedFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAdminFeedbackOverviewCollapsedFilter>>
  /** Negates the expression. */
  not?: Maybe<VAdminFeedbackOverviewCollapsedFilter>
}

/** A connection to a list of `VAdminMember` values. */
export type VAdminMembersConnection = {
  __typename?: 'VAdminMembersConnection'
  /** A list of `VAdminMember` objects. */
  nodes: Array<VAdminMember>
  /** A list of edges which contains the `VAdminMember` and cursor to aid in pagination. */
  edges: Array<VAdminMembersEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAdminMember` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAdminMember = {
  __typename?: 'VAdminMember'
  id?: Maybe<Scalars['UUID']>
  avatar?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  role?: Maybe<UserRole>
  firstname?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  isInstructor?: Maybe<InstructorStatus>
}

/** A `VAdminMember` edge in the connection. */
export type VAdminMembersEdge = {
  __typename?: 'VAdminMembersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAdminMember` at the end of the edge. */
  node: VAdminMember
}

/** Methods to use when ordering `VAdminMember`. */
export enum VAdminMembersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IsInstructorAsc = 'IS_INSTRUCTOR_ASC',
  IsInstructorDesc = 'IS_INSTRUCTOR_DESC',
}

/**
 * A condition to be used against `VAdminMember` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VAdminMemberCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `role` field. */
  role?: Maybe<UserRole>
  /** Checks for equality with the object’s `firstname` field. */
  firstname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `lastname` field. */
  lastname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `isInstructor` field. */
  isInstructor?: Maybe<InstructorStatus>
}

/** A filter to be used against `VAdminMember` object types. All fields are combined with a logical ‘and.’ */
export type VAdminMemberFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `role` field. */
  role?: Maybe<UserRoleFilter>
  /** Filter by the object’s `firstname` field. */
  firstname?: Maybe<StringFilter>
  /** Filter by the object’s `lastname` field. */
  lastname?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `isInstructor` field. */
  isInstructor?: Maybe<InstructorStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAdminMemberFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAdminMemberFilter>>
  /** Negates the expression. */
  not?: Maybe<VAdminMemberFilter>
}

/** A connection to a list of `VAnimation` values. */
export type VAnimationsConnection = {
  __typename?: 'VAnimationsConnection'
  /** A list of `VAnimation` objects. */
  nodes: Array<VAnimation>
  /** A list of edges which contains the `VAnimation` and cursor to aid in pagination. */
  edges: Array<VAnimationsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VAnimation` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VAnimation = {
  __typename?: 'VAnimation'
  animationId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  startFrame?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  endFrame?: Maybe<Scalars['Int']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  instructor?: Maybe<InstructorStatus>
  premiumType?: Maybe<ProfilePremium>
  currentProfileHasReplied?: Maybe<Scalars['Boolean']>
  role?: Maybe<UserRole>
  occupation?: Maybe<Scalars['String']>
  organisation?: Maybe<Scalars['String']>
  profeedback?: Maybe<Scalars['Boolean']>
  profeedbackStatus?: Maybe<FeedbackRequestStatus>
  comment?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  audio?: Maybe<Scalars['Boolean']>
  frameRate?: Maybe<Scalars['String']>
  isLatest?: Maybe<Scalars['Boolean']>
  submissionId?: Maybe<Scalars['String']>
}

/** A `VAnimation` edge in the connection. */
export type VAnimationsEdge = {
  __typename?: 'VAnimationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VAnimation` at the end of the edge. */
  node: VAnimation
}

/** Methods to use when ordering `VAnimation`. */
export enum VAnimationsOrderBy {
  Natural = 'NATURAL',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  StartFrameAsc = 'START_FRAME_ASC',
  StartFrameDesc = 'START_FRAME_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  EndFrameAsc = 'END_FRAME_ASC',
  EndFrameDesc = 'END_FRAME_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  InstructorAsc = 'INSTRUCTOR_ASC',
  InstructorDesc = 'INSTRUCTOR_DESC',
  PremiumTypeAsc = 'PREMIUM_TYPE_ASC',
  PremiumTypeDesc = 'PREMIUM_TYPE_DESC',
  CurrentProfileHasRepliedAsc = 'CURRENT_PROFILE_HAS_REPLIED_ASC',
  CurrentProfileHasRepliedDesc = 'CURRENT_PROFILE_HAS_REPLIED_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  OccupationAsc = 'OCCUPATION_ASC',
  OccupationDesc = 'OCCUPATION_DESC',
  OrganisationAsc = 'ORGANISATION_ASC',
  OrganisationDesc = 'ORGANISATION_DESC',
  ProfeedbackAsc = 'PROFEEDBACK_ASC',
  ProfeedbackDesc = 'PROFEEDBACK_DESC',
  ProfeedbackStatusAsc = 'PROFEEDBACK_STATUS_ASC',
  ProfeedbackStatusDesc = 'PROFEEDBACK_STATUS_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  ThumbnailUrlAsc = 'THUMBNAIL_URL_ASC',
  ThumbnailUrlDesc = 'THUMBNAIL_URL_DESC',
  VideoUrlAsc = 'VIDEO_URL_ASC',
  VideoUrlDesc = 'VIDEO_URL_DESC',
  AudioAsc = 'AUDIO_ASC',
  AudioDesc = 'AUDIO_DESC',
  FrameRateAsc = 'FRAME_RATE_ASC',
  FrameRateDesc = 'FRAME_RATE_DESC',
  IsLatestAsc = 'IS_LATEST_ASC',
  IsLatestDesc = 'IS_LATEST_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
}

/**
 * A condition to be used against `VAnimation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VAnimationCondition = {
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `startFrame` field. */
  startFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `endFrame` field. */
  endFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `instructor` field. */
  instructor?: Maybe<InstructorStatus>
  /** Checks for equality with the object’s `premiumType` field. */
  premiumType?: Maybe<ProfilePremium>
  /** Checks for equality with the object’s `currentProfileHasReplied` field. */
  currentProfileHasReplied?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `role` field. */
  role?: Maybe<UserRole>
  /** Checks for equality with the object’s `occupation` field. */
  occupation?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `organisation` field. */
  organisation?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profeedback` field. */
  profeedback?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `profeedbackStatus` field. */
  profeedbackStatus?: Maybe<FeedbackRequestStatus>
  /** Checks for equality with the object’s `comment` field. */
  comment?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `videoUrl` field. */
  videoUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `audio` field. */
  audio?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `frameRate` field. */
  frameRate?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `isLatest` field. */
  isLatest?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
}

/** A filter to be used against `VAnimation` object types. All fields are combined with a logical ‘and.’ */
export type VAnimationFilter = {
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `startFrame` field. */
  startFrame?: Maybe<IntFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `endFrame` field. */
  endFrame?: Maybe<IntFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `instructor` field. */
  instructor?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `premiumType` field. */
  premiumType?: Maybe<ProfilePremiumFilter>
  /** Filter by the object’s `currentProfileHasReplied` field. */
  currentProfileHasReplied?: Maybe<BooleanFilter>
  /** Filter by the object’s `role` field. */
  role?: Maybe<UserRoleFilter>
  /** Filter by the object’s `occupation` field. */
  occupation?: Maybe<StringFilter>
  /** Filter by the object’s `organisation` field. */
  organisation?: Maybe<StringFilter>
  /** Filter by the object’s `profeedback` field. */
  profeedback?: Maybe<BooleanFilter>
  /** Filter by the object’s `profeedbackStatus` field. */
  profeedbackStatus?: Maybe<FeedbackRequestStatusFilter>
  /** Filter by the object’s `comment` field. */
  comment?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<StringFilter>
  /** Filter by the object’s `videoUrl` field. */
  videoUrl?: Maybe<StringFilter>
  /** Filter by the object’s `audio` field. */
  audio?: Maybe<BooleanFilter>
  /** Filter by the object’s `frameRate` field. */
  frameRate?: Maybe<StringFilter>
  /** Filter by the object’s `isLatest` field. */
  isLatest?: Maybe<BooleanFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VAnimationFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VAnimationFilter>>
  /** Negates the expression. */
  not?: Maybe<VAnimationFilter>
}

/** A connection to a list of `VCompanyAdminGroup` values. */
export type VCompanyAdminGroupsConnection = {
  __typename?: 'VCompanyAdminGroupsConnection'
  /** A list of `VCompanyAdminGroup` objects. */
  nodes: Array<VCompanyAdminGroup>
  /** A list of edges which contains the `VCompanyAdminGroup` and cursor to aid in pagination. */
  edges: Array<VCompanyAdminGroupsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VCompanyAdminGroup` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VCompanyAdminGroup = {
  __typename?: 'VCompanyAdminGroup'
  id?: Maybe<Scalars['UUID']>
  groupName?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  totalmembers?: Maybe<Scalars['BigInt']>
}

/** A `VCompanyAdminGroup` edge in the connection. */
export type VCompanyAdminGroupsEdge = {
  __typename?: 'VCompanyAdminGroupsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VCompanyAdminGroup` at the end of the edge. */
  node: VCompanyAdminGroup
}

/** Methods to use when ordering `VCompanyAdminGroup`. */
export enum VCompanyAdminGroupsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GroupNameAsc = 'GROUP_NAME_ASC',
  GroupNameDesc = 'GROUP_NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  TotalmembersAsc = 'TOTALMEMBERS_ASC',
  TotalmembersDesc = 'TOTALMEMBERS_DESC',
}

/**
 * A condition to be used against `VCompanyAdminGroup` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VCompanyAdminGroupCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `groupName` field. */
  groupName?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `totalmembers` field. */
  totalmembers?: Maybe<Scalars['BigInt']>
}

/** A filter to be used against `VCompanyAdminGroup` object types. All fields are combined with a logical ‘and.’ */
export type VCompanyAdminGroupFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `groupName` field. */
  groupName?: Maybe<StringFilter>
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>
  /** Filter by the object’s `totalmembers` field. */
  totalmembers?: Maybe<BigIntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VCompanyAdminGroupFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VCompanyAdminGroupFilter>>
  /** Negates the expression. */
  not?: Maybe<VCompanyAdminGroupFilter>
}

/** A connection to a list of `VCompanyAdminMember` values. */
export type VCompanyAdminMembersConnection = {
  __typename?: 'VCompanyAdminMembersConnection'
  /** A list of `VCompanyAdminMember` objects. */
  nodes: Array<VCompanyAdminMember>
  /** A list of edges which contains the `VCompanyAdminMember` and cursor to aid in pagination. */
  edges: Array<VCompanyAdminMembersEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VCompanyAdminMember` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VCompanyAdminMember = {
  __typename?: 'VCompanyAdminMember'
  premiumId?: Maybe<Scalars['UUID']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  groupId?: Maybe<Scalars['UUID']>
  groupName?: Maybe<Scalars['String']>
}

/** A `VCompanyAdminMember` edge in the connection. */
export type VCompanyAdminMembersEdge = {
  __typename?: 'VCompanyAdminMembersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VCompanyAdminMember` at the end of the edge. */
  node: VCompanyAdminMember
}

/** Methods to use when ordering `VCompanyAdminMember`. */
export enum VCompanyAdminMembersOrderBy {
  Natural = 'NATURAL',
  PremiumIdAsc = 'PREMIUM_ID_ASC',
  PremiumIdDesc = 'PREMIUM_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupNameAsc = 'GROUP_NAME_ASC',
  GroupNameDesc = 'GROUP_NAME_DESC',
}

/**
 * A condition to be used against `VCompanyAdminMember` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type VCompanyAdminMemberCondition = {
  /** Checks for equality with the object’s `premiumId` field. */
  premiumId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `firstname` field. */
  firstname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `lastname` field. */
  lastname?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `groupName` field. */
  groupName?: Maybe<Scalars['String']>
}

/** A filter to be used against `VCompanyAdminMember` object types. All fields are combined with a logical ‘and.’ */
export type VCompanyAdminMemberFilter = {
  /** Filter by the object’s `premiumId` field. */
  premiumId?: Maybe<UuidFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `firstname` field. */
  firstname?: Maybe<StringFilter>
  /** Filter by the object’s `lastname` field. */
  lastname?: Maybe<StringFilter>
  /** Filter by the object’s `groupId` field. */
  groupId?: Maybe<UuidFilter>
  /** Filter by the object’s `groupName` field. */
  groupName?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VCompanyAdminMemberFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VCompanyAdminMemberFilter>>
  /** Negates the expression. */
  not?: Maybe<VCompanyAdminMemberFilter>
}

/** A connection to a list of `VCompanyAdminMonth` values. */
export type VCompanyAdminMonthsConnection = {
  __typename?: 'VCompanyAdminMonthsConnection'
  /** A list of `VCompanyAdminMonth` objects. */
  nodes: Array<VCompanyAdminMonth>
  /** A list of edges which contains the `VCompanyAdminMonth` and cursor to aid in pagination. */
  edges: Array<VCompanyAdminMonthsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VCompanyAdminMonth` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VCompanyAdminMonth = {
  __typename?: 'VCompanyAdminMonth'
  id?: Maybe<Scalars['UUID']>
  groupId?: Maybe<Scalars['UUID']>
  month?: Maybe<Scalars['Int']>
  year?: Maybe<Scalars['Int']>
  amountFeedbacks?: Maybe<Scalars['Int']>
}

/** A `VCompanyAdminMonth` edge in the connection. */
export type VCompanyAdminMonthsEdge = {
  __typename?: 'VCompanyAdminMonthsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VCompanyAdminMonth` at the end of the edge. */
  node: VCompanyAdminMonth
}

/** Methods to use when ordering `VCompanyAdminMonth`. */
export enum VCompanyAdminMonthsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  AmountFeedbacksAsc = 'AMOUNT_FEEDBACKS_ASC',
  AmountFeedbacksDesc = 'AMOUNT_FEEDBACKS_DESC',
}

/**
 * A condition to be used against `VCompanyAdminMonth` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VCompanyAdminMonthCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `month` field. */
  month?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `amountFeedbacks` field. */
  amountFeedbacks?: Maybe<Scalars['Int']>
}

/** A filter to be used against `VCompanyAdminMonth` object types. All fields are combined with a logical ‘and.’ */
export type VCompanyAdminMonthFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `groupId` field. */
  groupId?: Maybe<UuidFilter>
  /** Filter by the object’s `month` field. */
  month?: Maybe<IntFilter>
  /** Filter by the object’s `year` field. */
  year?: Maybe<IntFilter>
  /** Filter by the object’s `amountFeedbacks` field. */
  amountFeedbacks?: Maybe<IntFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VCompanyAdminMonthFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VCompanyAdminMonthFilter>>
  /** Negates the expression. */
  not?: Maybe<VCompanyAdminMonthFilter>
}

/** A connection to a list of `VFeedback` values. */
export type VFeedbacksConnection = {
  __typename?: 'VFeedbacksConnection'
  /** A list of `VFeedback` objects. */
  nodes: Array<VFeedback>
  /** A list of edges which contains the `VFeedback` and cursor to aid in pagination. */
  edges: Array<VFeedbacksEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VFeedback` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VFeedback = {
  __typename?: 'VFeedback'
  id?: Maybe<Scalars['UUID']>
  profileId?: Maybe<Scalars['UUID']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  submissionId?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Datetime']>
  instructorId?: Maybe<Scalars['UUID']>
  thumbnail?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  allowed?: Maybe<Scalars['Boolean']>
  status?: Maybe<FeedbackResponseStatus>
}

/** A `VFeedback` edge in the connection. */
export type VFeedbacksEdge = {
  __typename?: 'VFeedbacksEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VFeedback` at the end of the edge. */
  node: VFeedback
}

/** Methods to use when ordering `VFeedback`. */
export enum VFeedbacksOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  InstructorIdAsc = 'INSTRUCTOR_ID_ASC',
  InstructorIdDesc = 'INSTRUCTOR_ID_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  AllowedAsc = 'ALLOWED_ASC',
  AllowedDesc = 'ALLOWED_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
}

/**
 * A condition to be used against `VFeedback` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VFeedbackCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `instructorId` field. */
  instructorId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `allowed` field. */
  allowed?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatus>
}

/** A filter to be used against `VFeedback` object types. All fields are combined with a logical ‘and.’ */
export type VFeedbackFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `instructorId` field. */
  instructorId?: Maybe<UuidFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Filter by the object’s `link` field. */
  link?: Maybe<StringFilter>
  /** Filter by the object’s `allowed` field. */
  allowed?: Maybe<BooleanFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatusFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VFeedbackFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VFeedbackFilter>>
  /** Negates the expression. */
  not?: Maybe<VFeedbackFilter>
}

/** A connection to a list of `VInstructor` values. */
export type VInstructorsConnection = {
  __typename?: 'VInstructorsConnection'
  /** A list of `VInstructor` objects. */
  nodes: Array<VInstructor>
  /** A list of edges which contains the `VInstructor` and cursor to aid in pagination. */
  edges: Array<VInstructorsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VInstructor` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VInstructor = {
  __typename?: 'VInstructor'
  id?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  status?: Maybe<InstructorStatus>
  biography?: Maybe<Scalars['String']>
  banner?: Maybe<Scalars['String']>
  availability?: Maybe<InstructorAvailability>
}

/** A `VInstructor` edge in the connection. */
export type VInstructorsEdge = {
  __typename?: 'VInstructorsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VInstructor` at the end of the edge. */
  node: VInstructor
}

/** Methods to use when ordering `VInstructor`. */
export enum VInstructorsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AcceptedAgreementAsc = 'ACCEPTED_AGREEMENT_ASC',
  AcceptedAgreementDesc = 'ACCEPTED_AGREEMENT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  BannerAsc = 'BANNER_ASC',
  BannerDesc = 'BANNER_DESC',
  AvailabilityAsc = 'AVAILABILITY_ASC',
  AvailabilityDesc = 'AVAILABILITY_DESC',
}

/**
 * A condition to be used against `VInstructor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VInstructorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<InstructorStatus>
  /** Checks for equality with the object’s `biography` field. */
  biography?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `banner` field. */
  banner?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `availability` field. */
  availability?: Maybe<InstructorAvailability>
}

/** A filter to be used against `VInstructor` object types. All fields are combined with a logical ‘and.’ */
export type VInstructorFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `profileId` field. */
  profileId?: Maybe<UuidFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<BooleanFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `biography` field. */
  biography?: Maybe<StringFilter>
  /** Filter by the object’s `banner` field. */
  banner?: Maybe<StringFilter>
  /** Filter by the object’s `availability` field. */
  availability?: Maybe<InstructorAvailabilityFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VInstructorFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VInstructorFilter>>
  /** Negates the expression. */
  not?: Maybe<VInstructorFilter>
}

/** A connection to a list of `VInstructorFeedback` values. */
export type VInstructorFeedbacksConnection = {
  __typename?: 'VInstructorFeedbacksConnection'
  /** A list of `VInstructorFeedback` objects. */
  nodes: Array<VInstructorFeedback>
  /** A list of edges which contains the `VInstructorFeedback` and cursor to aid in pagination. */
  edges: Array<VInstructorFeedbacksEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VInstructorFeedback` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VInstructorFeedback = {
  __typename?: 'VInstructorFeedback'
  id?: Maybe<Scalars['UUID']>
  submissionId?: Maybe<Scalars['String']>
  status?: Maybe<FeedbackResponseStatus>
  createdAt?: Maybe<Scalars['Datetime']>
  title?: Maybe<Scalars['String']>
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  shortComment?: Maybe<Scalars['String']>
  animationId?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
}

/** A `VInstructorFeedback` edge in the connection. */
export type VInstructorFeedbacksEdge = {
  __typename?: 'VInstructorFeedbacksEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VInstructorFeedback` at the end of the edge. */
  node: VInstructorFeedback
}

/** Methods to use when ordering `VInstructorFeedback`. */
export enum VInstructorFeedbacksOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  StartFrameAsc = 'START_FRAME_ASC',
  StartFrameDesc = 'START_FRAME_DESC',
  EndFrameAsc = 'END_FRAME_ASC',
  EndFrameDesc = 'END_FRAME_DESC',
  ShortCommentAsc = 'SHORT_COMMENT_ASC',
  ShortCommentDesc = 'SHORT_COMMENT_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
}

/**
 * A condition to be used against `VInstructorFeedback` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type VInstructorFeedbackCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatus>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `startFrame` field. */
  startFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `endFrame` field. */
  endFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `shortComment` field. */
  shortComment?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
}

/** A filter to be used against `VInstructorFeedback` object types. All fields are combined with a logical ‘and.’ */
export type VInstructorFeedbackFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<FeedbackResponseStatusFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `startFrame` field. */
  startFrame?: Maybe<IntFilter>
  /** Filter by the object’s `endFrame` field. */
  endFrame?: Maybe<IntFilter>
  /** Filter by the object’s `shortComment` field. */
  shortComment?: Maybe<StringFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VInstructorFeedbackFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VInstructorFeedbackFilter>>
  /** Negates the expression. */
  not?: Maybe<VInstructorFeedbackFilter>
}

/** A connection to a list of `VInstructorPool` values. */
export type VInstructorPoolsConnection = {
  __typename?: 'VInstructorPoolsConnection'
  /** A list of `VInstructorPool` objects. */
  nodes: Array<VInstructorPool>
  /** A list of edges which contains the `VInstructorPool` and cursor to aid in pagination. */
  edges: Array<VInstructorPoolsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VInstructorPool` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VInstructorPool = {
  __typename?: 'VInstructorPool'
  id?: Maybe<Scalars['UUID']>
  animationId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  requestStatus?: Maybe<FeedbackRequestStatus>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  responseStatus?: Maybe<FeedbackResponseStatus>
  submissionId?: Maybe<Scalars['String']>
  shortComment?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  latestSubmission?: Maybe<Scalars['Datetime']>
}

/** A `VInstructorPool` edge in the connection. */
export type VInstructorPoolsEdge = {
  __typename?: 'VInstructorPoolsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VInstructorPool` at the end of the edge. */
  node: VInstructorPool
}

/** Methods to use when ordering `VInstructorPool`. */
export enum VInstructorPoolsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  StartFrameAsc = 'START_FRAME_ASC',
  StartFrameDesc = 'START_FRAME_DESC',
  EndFrameAsc = 'END_FRAME_ASC',
  EndFrameDesc = 'END_FRAME_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  RequestStatusAsc = 'REQUEST_STATUS_ASC',
  RequestStatusDesc = 'REQUEST_STATUS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ResponseStatusAsc = 'RESPONSE_STATUS_ASC',
  ResponseStatusDesc = 'RESPONSE_STATUS_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  ShortCommentAsc = 'SHORT_COMMENT_ASC',
  ShortCommentDesc = 'SHORT_COMMENT_DESC',
  ThumbnailUrlAsc = 'THUMBNAIL_URL_ASC',
  ThumbnailUrlDesc = 'THUMBNAIL_URL_DESC',
  LatestSubmissionAsc = 'LATEST_SUBMISSION_ASC',
  LatestSubmissionDesc = 'LATEST_SUBMISSION_DESC',
}

/**
 * A condition to be used against `VInstructorPool` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VInstructorPoolCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `startFrame` field. */
  startFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `endFrame` field. */
  endFrame?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `requestStatus` field. */
  requestStatus?: Maybe<FeedbackRequestStatus>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `responseStatus` field. */
  responseStatus?: Maybe<FeedbackResponseStatus>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `shortComment` field. */
  shortComment?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `latestSubmission` field. */
  latestSubmission?: Maybe<Scalars['Datetime']>
}

/** A filter to be used against `VInstructorPool` object types. All fields are combined with a logical ‘and.’ */
export type VInstructorPoolFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `startFrame` field. */
  startFrame?: Maybe<IntFilter>
  /** Filter by the object’s `endFrame` field. */
  endFrame?: Maybe<IntFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Filter by the object’s `requestStatus` field. */
  requestStatus?: Maybe<FeedbackRequestStatusFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `responseStatus` field. */
  responseStatus?: Maybe<FeedbackResponseStatusFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `shortComment` field. */
  shortComment?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnailUrl` field. */
  thumbnailUrl?: Maybe<StringFilter>
  /** Filter by the object’s `latestSubmission` field. */
  latestSubmission?: Maybe<DatetimeFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VInstructorPoolFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VInstructorPoolFilter>>
  /** Negates the expression. */
  not?: Maybe<VInstructorPoolFilter>
}

/** A connection to a list of `VInstructorSetting` values. */
export type VInstructorSettingsConnection = {
  __typename?: 'VInstructorSettingsConnection'
  /** A list of `VInstructorSetting` objects. */
  nodes: Array<VInstructorSetting>
  /** A list of edges which contains the `VInstructorSetting` and cursor to aid in pagination. */
  edges: Array<VInstructorSettingsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VInstructorSetting` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VInstructorSetting = {
  __typename?: 'VInstructorSetting'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  status?: Maybe<InstructorStatus>
  biography?: Maybe<Scalars['String']>
  banner?: Maybe<Scalars['String']>
  availability?: Maybe<InstructorAvailability>
}

/** A `VInstructorSetting` edge in the connection. */
export type VInstructorSettingsEdge = {
  __typename?: 'VInstructorSettingsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VInstructorSetting` at the end of the edge. */
  node: VInstructorSetting
}

/** Methods to use when ordering `VInstructorSetting`. */
export enum VInstructorSettingsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AcceptedAgreementAsc = 'ACCEPTED_AGREEMENT_ASC',
  AcceptedAgreementDesc = 'ACCEPTED_AGREEMENT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  BannerAsc = 'BANNER_ASC',
  BannerDesc = 'BANNER_DESC',
  AvailabilityAsc = 'AVAILABILITY_ASC',
  AvailabilityDesc = 'AVAILABILITY_DESC',
}

/**
 * A condition to be used against `VInstructorSetting` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VInstructorSettingCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<InstructorStatus>
  /** Checks for equality with the object’s `biography` field. */
  biography?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `banner` field. */
  banner?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `availability` field. */
  availability?: Maybe<InstructorAvailability>
}

/** A filter to be used against `VInstructorSetting` object types. All fields are combined with a logical ‘and.’ */
export type VInstructorSettingFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `acceptedAgreement` field. */
  acceptedAgreement?: Maybe<BooleanFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<InstructorStatusFilter>
  /** Filter by the object’s `biography` field. */
  biography?: Maybe<StringFilter>
  /** Filter by the object’s `banner` field. */
  banner?: Maybe<StringFilter>
  /** Filter by the object’s `availability` field. */
  availability?: Maybe<InstructorAvailabilityFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VInstructorSettingFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VInstructorSettingFilter>>
  /** Negates the expression. */
  not?: Maybe<VInstructorSettingFilter>
}

/** A connection to a list of `VPost` values. */
export type VPostsConnection = {
  __typename?: 'VPostsConnection'
  /** A list of `VPost` objects. */
  nodes: Array<VPost>
  /** A list of edges which contains the `VPost` and cursor to aid in pagination. */
  edges: Array<VPostsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VPost` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VPost = {
  __typename?: 'VPost'
  id?: Maybe<Scalars['UUID']>
  body?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  status?: Maybe<PublishStatus>
  title?: Maybe<Scalars['String']>
  intro?: Maybe<Scalars['String']>
  proContent?: Maybe<Scalars['Boolean']>
  videoUrl?: Maybe<Scalars['String']>
  proPost?: Maybe<Scalars['String']>
}

/** A `VPost` edge in the connection. */
export type VPostsEdge = {
  __typename?: 'VPostsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VPost` at the end of the edge. */
  node: VPost
}

/** Methods to use when ordering `VPost`. */
export enum VPostsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  ThumbnailAsc = 'THUMBNAIL_ASC',
  ThumbnailDesc = 'THUMBNAIL_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  IntroAsc = 'INTRO_ASC',
  IntroDesc = 'INTRO_DESC',
  ProContentAsc = 'PRO_CONTENT_ASC',
  ProContentDesc = 'PRO_CONTENT_DESC',
  VideoUrlAsc = 'VIDEO_URL_ASC',
  VideoUrlDesc = 'VIDEO_URL_DESC',
  ProPostAsc = 'PRO_POST_ASC',
  ProPostDesc = 'PRO_POST_DESC',
}

/** A condition to be used against `VPost` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VPostCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `body` field. */
  body?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `thumbnail` field. */
  thumbnail?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PublishStatus>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `intro` field. */
  intro?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `proContent` field. */
  proContent?: Maybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `videoUrl` field. */
  videoUrl?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `proPost` field. */
  proPost?: Maybe<Scalars['String']>
}

/** A filter to be used against `VPost` object types. All fields are combined with a logical ‘and.’ */
export type VPostFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `body` field. */
  body?: Maybe<StringFilter>
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>
  /** Filter by the object’s `thumbnail` field. */
  thumbnail?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `status` field. */
  status?: Maybe<PublishStatusFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `intro` field. */
  intro?: Maybe<StringFilter>
  /** Filter by the object’s `proContent` field. */
  proContent?: Maybe<BooleanFilter>
  /** Filter by the object’s `videoUrl` field. */
  videoUrl?: Maybe<StringFilter>
  /** Filter by the object’s `proPost` field. */
  proPost?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VPostFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VPostFilter>>
  /** Negates the expression. */
  not?: Maybe<VPostFilter>
}

/** A connection to a list of `VProOwnFeedback` values. */
export type VProOwnFeedbacksConnection = {
  __typename?: 'VProOwnFeedbacksConnection'
  /** A list of `VProOwnFeedback` objects. */
  nodes: Array<VProOwnFeedback>
  /** A list of edges which contains the `VProOwnFeedback` and cursor to aid in pagination. */
  edges: Array<VProOwnFeedbacksEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `VProOwnFeedback` you could get from the connection. */
  totalCount: Scalars['Int']
}

export type VProOwnFeedback = {
  __typename?: 'VProOwnFeedback'
  id?: Maybe<Scalars['UUID']>
  animationId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  responseStatus?: Maybe<FeedbackResponseStatus>
  submissionId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  latestSubmissionId?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
}

/** A `VProOwnFeedback` edge in the connection. */
export type VProOwnFeedbacksEdge = {
  __typename?: 'VProOwnFeedbacksEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `VProOwnFeedback` at the end of the edge. */
  node: VProOwnFeedback
}

/** Methods to use when ordering `VProOwnFeedback`. */
export enum VProOwnFeedbacksOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AnimationIdAsc = 'ANIMATION_ID_ASC',
  AnimationIdDesc = 'ANIMATION_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ResponseStatusAsc = 'RESPONSE_STATUS_ASC',
  ResponseStatusDesc = 'RESPONSE_STATUS_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  LatestSubmissionIdAsc = 'LATEST_SUBMISSION_ID_ASC',
  LatestSubmissionIdDesc = 'LATEST_SUBMISSION_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
}

/**
 * A condition to be used against `VProOwnFeedback` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VProOwnFeedbackCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `animationId` field. */
  animationId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `responseStatus` field. */
  responseStatus?: Maybe<FeedbackResponseStatus>
  /** Checks for equality with the object’s `submissionId` field. */
  submissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `latestSubmissionId` field. */
  latestSubmissionId?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: Maybe<Scalars['String']>
}

/** A filter to be used against `VProOwnFeedback` object types. All fields are combined with a logical ‘and.’ */
export type VProOwnFeedbackFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>
  /** Filter by the object’s `animationId` field. */
  animationId?: Maybe<StringFilter>
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>
  /** Filter by the object’s `responseStatus` field. */
  responseStatus?: Maybe<FeedbackResponseStatusFilter>
  /** Filter by the object’s `submissionId` field. */
  submissionId?: Maybe<StringFilter>
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>
  /** Filter by the object’s `latestSubmissionId` field. */
  latestSubmissionId?: Maybe<StringFilter>
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>
  /** Filter by the object’s `avatar` field. */
  avatar?: Maybe<StringFilter>
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<VProOwnFeedbackFilter>>
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<VProOwnFeedbackFilter>>
  /** Negates the expression. */
  not?: Maybe<VProOwnFeedbackFilter>
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  adminCreateCompany?: Maybe<AdminCreateCompanyPayload>
  adminEditInstructorStatus?: Maybe<AdminEditInstructorStatusPayload>
  adminPromoteToInstructor?: Maybe<AdminPromoteToInstructorPayload>
  adminUpdatePost?: Maybe<AdminUpdatePostPayload>
  authenticate?: Maybe<AuthenticatePayload>
  authenticateByUsername?: Maybe<AuthenticateByUsernamePayload>
  changePassword?: Maybe<ChangePasswordPayload>
  changeUserRole?: Maybe<ChangeUserRolePayload>
  claimFeedback?: Maybe<ClaimFeedbackPayload>
  companyAdminAddMonthToGroup?: Maybe<CompanyAdminAddMonthToGroupPayload>
  companyAdminAddPremiumToGroup?: Maybe<CompanyAdminAddPremiumToGroupPayload>
  companyAdminRemoveMonthFromGroup?: Maybe<
    CompanyAdminRemoveMonthFromGroupPayload
  >
  companyAdminRemovePremiumFromGroup?: Maybe<
    CompanyAdminRemovePremiumFromGroupPayload
  >
  companyCreateGroup?: Maybe<CompanyCreateGroupPayload>
  companyDeleteGroup?: Maybe<CompanyDeleteGroupPayload>
  deleteOwnAnimation?: Maybe<DeleteOwnAnimationPayload>
  deleteOwnNewsComment?: Maybe<DeleteOwnNewsCommentPayload>
  deleteOwnNote?: Maybe<DeleteOwnNotePayload>
  deleteOwnNoteComment?: Maybe<DeleteOwnNoteCommentPayload>
  deleteOwnSubmission?: Maybe<DeleteOwnSubmissionPayload>
  instructorRegisterBanner?: Maybe<InstructorRegisterBannerPayload>
  instructorUpdateAvailability?: Maybe<InstructorUpdateAvailabilityPayload>
  instructorUpdateBio?: Maybe<InstructorUpdateBioPayload>
  refreshJwtToken?: Maybe<RefreshJwtTokenPayload>
  registerAnimation?: Maybe<RegisterAnimationPayload>
  registerFeedbackResponse?: Maybe<RegisterFeedbackResponsePayload>
  registerHeadline?: Maybe<RegisterHeadlinePayload>
  registerNewAvatar?: Maybe<RegisterNewAvatarPayload>
  registerNewBanner?: Maybe<RegisterNewBannerPayload>
  registerNews?: Maybe<RegisterNewsPayload>
  registerNewsComment?: Maybe<RegisterNewsCommentPayload>
  registerNote?: Maybe<RegisterNotePayload>
  registerNoteComment?: Maybe<RegisterNoteCommentPayload>
  registerProfile?: Maybe<RegisterProfilePayload>
  registerProfileDetails?: Maybe<RegisterProfileDetailsPayload>
  registerReel?: Maybe<RegisterReelPayload>
  registerSocial?: Maybe<RegisterSocialPayload>
  registerSubmission?: Maybe<RegisterSubmissionPayload>
  registerTumbleweed?: Maybe<RegisterTumbleweedPayload>
  requestProfeedback?: Maybe<RequestProfeedbackPayload>
  updateAnimationTitle?: Maybe<UpdateAnimationTitlePayload>
  updateOwnNewsComment?: Maybe<UpdateOwnNewsCommentPayload>
  updateOwnNote?: Maybe<UpdateOwnNotePayload>
  updateOwnNoteComment?: Maybe<UpdateOwnNoteCommentPayload>
  updateOwnSubmissionComment?: Maybe<UpdateOwnSubmissionCommentPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAdminCreateCompanyArgs = {
  input: AdminCreateCompanyInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAdminEditInstructorStatusArgs = {
  input: AdminEditInstructorStatusInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAdminPromoteToInstructorArgs = {
  input: AdminPromoteToInstructorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAdminUpdatePostArgs = {
  input: AdminUpdatePostInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateByUsernameArgs = {
  input: AuthenticateByUsernameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationChangePasswordArgs = {
  input: ChangePasswordInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationChangeUserRoleArgs = {
  input: ChangeUserRoleInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationClaimFeedbackArgs = {
  input: ClaimFeedbackInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyAdminAddMonthToGroupArgs = {
  input: CompanyAdminAddMonthToGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyAdminAddPremiumToGroupArgs = {
  input: CompanyAdminAddPremiumToGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyAdminRemoveMonthFromGroupArgs = {
  input: CompanyAdminRemoveMonthFromGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyAdminRemovePremiumFromGroupArgs = {
  input: CompanyAdminRemovePremiumFromGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyCreateGroupArgs = {
  input: CompanyCreateGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCompanyDeleteGroupArgs = {
  input: CompanyDeleteGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOwnAnimationArgs = {
  input: DeleteOwnAnimationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOwnNewsCommentArgs = {
  input: DeleteOwnNewsCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOwnNoteArgs = {
  input: DeleteOwnNoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOwnNoteCommentArgs = {
  input: DeleteOwnNoteCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOwnSubmissionArgs = {
  input: DeleteOwnSubmissionInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInstructorRegisterBannerArgs = {
  input: InstructorRegisterBannerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInstructorUpdateAvailabilityArgs = {
  input: InstructorUpdateAvailabilityInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInstructorUpdateBioArgs = {
  input: InstructorUpdateBioInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRefreshJwtTokenArgs = {
  input: RefreshJwtTokenInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterAnimationArgs = {
  input: RegisterAnimationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterFeedbackResponseArgs = {
  input: RegisterFeedbackResponseInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterHeadlineArgs = {
  input: RegisterHeadlineInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNewAvatarArgs = {
  input: RegisterNewAvatarInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNewBannerArgs = {
  input: RegisterNewBannerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNewsArgs = {
  input: RegisterNewsInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNewsCommentArgs = {
  input: RegisterNewsCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNoteArgs = {
  input: RegisterNoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterNoteCommentArgs = {
  input: RegisterNoteCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterProfileArgs = {
  input: RegisterProfileInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterProfileDetailsArgs = {
  input: RegisterProfileDetailsInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterReelArgs = {
  input: RegisterReelInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterSocialArgs = {
  input: RegisterSocialInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterSubmissionArgs = {
  input: RegisterSubmissionInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterTumbleweedArgs = {
  input: RegisterTumbleweedInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRequestProfeedbackArgs = {
  input: RequestProfeedbackInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnimationTitleArgs = {
  input: UpdateAnimationTitleInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOwnNewsCommentArgs = {
  input: UpdateOwnNewsCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOwnNoteArgs = {
  input: UpdateOwnNoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOwnNoteCommentArgs = {
  input: UpdateOwnNoteCommentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOwnSubmissionCommentArgs = {
  input: UpdateOwnSubmissionCommentInput
}

/** The output of our `adminCreateCompany` mutation. */
export type AdminCreateCompanyPayload = {
  __typename?: 'AdminCreateCompanyPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  company?: Maybe<Company>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>
}

/** The output of our `adminCreateCompany` mutation. */
export type AdminCreateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: Maybe<Array<CompaniesOrderBy>>
}

/** All input for the `adminCreateCompany` mutation. */
export type AdminCreateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  url_?: Maybe<Scalars['String']>
  name_?: Maybe<Scalars['String']>
  logo_?: Maybe<Scalars['String']>
  link_?: Maybe<Scalars['String']>
  description_?: Maybe<Scalars['String']>
  public_?: Maybe<Scalars['Boolean']>
  address_?: Maybe<Scalars['JSON']>
  companyId_?: Maybe<Scalars['UUID']>
}

/** The output of our `adminEditInstructorStatus` mutation. */
export type AdminEditInstructorStatusPayload = {
  __typename?: 'AdminEditInstructorStatusPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructor?: Maybe<Instructor>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Instructor`. May be used by Relay 1. */
  instructorEdge?: Maybe<InstructorsEdge>
}

/** The output of our `adminEditInstructorStatus` mutation. */
export type AdminEditInstructorStatusPayloadInstructorEdgeArgs = {
  orderBy?: Maybe<Array<InstructorsOrderBy>>
}

/** All input for the `adminEditInstructorStatus` mutation. */
export type AdminEditInstructorStatusInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructorStatus_?: Maybe<InstructorStatus>
  profileId_?: Maybe<Scalars['UUID']>
}

/** The output of our `adminPromoteToInstructor` mutation. */
export type AdminPromoteToInstructorPayload = {
  __typename?: 'AdminPromoteToInstructorPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructor?: Maybe<Instructor>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Instructor`. May be used by Relay 1. */
  instructorEdge?: Maybe<InstructorsEdge>
}

/** The output of our `adminPromoteToInstructor` mutation. */
export type AdminPromoteToInstructorPayloadInstructorEdgeArgs = {
  orderBy?: Maybe<Array<InstructorsOrderBy>>
}

/** All input for the `adminPromoteToInstructor` mutation. */
export type AdminPromoteToInstructorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profileId_?: Maybe<Scalars['UUID']>
}

/** The output of our `adminUpdatePost` mutation. */
export type AdminUpdatePostPayload = {
  __typename?: 'AdminUpdatePostPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  news?: Maybe<News>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `News`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `News`. May be used by Relay 1. */
  newsEdge?: Maybe<NewsEdge>
}

/** The output of our `adminUpdatePost` mutation. */
export type AdminUpdatePostPayloadNewsEdgeArgs = {
  orderBy?: Maybe<Array<NewsOrderBy>>
}

/** All input for the `adminUpdatePost` mutation. */
export type AdminUpdatePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  body_?: Maybe<Scalars['String']>
  title_?: Maybe<Scalars['String']>
  id_?: Maybe<Scalars['UUID']>
}

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  jwtToken?: Maybe<Scalars['JwtToken']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

/** The output of our `authenticateByUsername` mutation. */
export type AuthenticateByUsernamePayload = {
  __typename?: 'AuthenticateByUsernamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  jwtToken?: Maybe<Scalars['JwtToken']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `authenticateByUsername` mutation. */
export type AuthenticateByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  username: Scalars['String']
  password: Scalars['String']
}

/** The output of our `changePassword` mutation. */
export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  boolean?: Maybe<Scalars['Boolean']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `changePassword` mutation. */
export type ChangePasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
  repeatedNewPassword: Scalars['String']
}

/** The output of our `changeUserRole` mutation. */
export type ChangeUserRolePayload = {
  __typename?: 'ChangeUserRolePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `changeUserRole` mutation. */
export type ChangeUserRolePayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `changeUserRole` mutation. */
export type ChangeUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  role_: UserRole
  userid_: Scalars['UUID']
}

/** The output of our `claimFeedback` mutation. */
export type ClaimFeedbackPayload = {
  __typename?: 'ClaimFeedbackPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  feedbackResponse?: Maybe<FeedbackResponse>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `FeedbackResponse`. */
  profileByProfileId?: Maybe<Profile>
  /** Reads a single `Submission` that is related to this `FeedbackResponse`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `FeedbackRequest` that is related to this `FeedbackResponse`. */
  feedbackRequestByFeedbackRequestId?: Maybe<FeedbackRequest>
  /** An edge for our `FeedbackResponse`. May be used by Relay 1. */
  feedbackResponseEdge?: Maybe<FeedbackResponsesEdge>
}

/** The output of our `claimFeedback` mutation. */
export type ClaimFeedbackPayloadFeedbackResponseEdgeArgs = {
  orderBy?: Maybe<Array<FeedbackResponsesOrderBy>>
}

/** All input for the `claimFeedback` mutation. */
export type ClaimFeedbackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  feedbackRequestId_: Scalars['String']
  submissionId_: Scalars['String']
}

/** The output of our `companyAdminAddMonthToGroup` mutation. */
export type CompanyAdminAddMonthToGroupPayload = {
  __typename?: 'CompanyAdminAddMonthToGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyGroupMonth?: Maybe<CompanyGroupMonth>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupMonth`. */
  companyProGroupByGroupId?: Maybe<CompanyProGroup>
  /** An edge for our `CompanyGroupMonth`. May be used by Relay 1. */
  companyGroupMonthEdge?: Maybe<CompanyGroupMonthsEdge>
}

/** The output of our `companyAdminAddMonthToGroup` mutation. */
export type CompanyAdminAddMonthToGroupPayloadCompanyGroupMonthEdgeArgs = {
  orderBy?: Maybe<Array<CompanyGroupMonthsOrderBy>>
}

/** All input for the `companyAdminAddMonthToGroup` mutation. */
export type CompanyAdminAddMonthToGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  month_?: Maybe<Scalars['Int']>
  year_?: Maybe<Scalars['Int']>
  amountFeedbacks_?: Maybe<Scalars['Int']>
  groupId_?: Maybe<Scalars['UUID']>
}

/** The output of our `companyAdminAddPremiumToGroup` mutation. */
export type CompanyAdminAddPremiumToGroupPayload = {
  __typename?: 'CompanyAdminAddPremiumToGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyGroupPremium?: Maybe<CompanyGroupPremium>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Premium` that is related to this `CompanyGroupPremium`. */
  premiumByPremiumId?: Maybe<Premium>
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupPremium`. */
  companyProGroupByCompanyGroupId?: Maybe<CompanyProGroup>
  /** An edge for our `CompanyGroupPremium`. May be used by Relay 1. */
  companyGroupPremiumEdge?: Maybe<CompanyGroupPremiumsEdge>
}

/** The output of our `companyAdminAddPremiumToGroup` mutation. */
export type CompanyAdminAddPremiumToGroupPayloadCompanyGroupPremiumEdgeArgs = {
  orderBy?: Maybe<Array<CompanyGroupPremiumsOrderBy>>
}

/** All input for the `companyAdminAddPremiumToGroup` mutation. */
export type CompanyAdminAddPremiumToGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  groupId_: Scalars['UUID']
  premiumId_: Scalars['UUID']
}

/** The output of our `companyAdminRemoveMonthFromGroup` mutation. */
export type CompanyAdminRemoveMonthFromGroupPayload = {
  __typename?: 'CompanyAdminRemoveMonthFromGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyGroupMonth?: Maybe<CompanyGroupMonth>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupMonth`. */
  companyProGroupByGroupId?: Maybe<CompanyProGroup>
  /** An edge for our `CompanyGroupMonth`. May be used by Relay 1. */
  companyGroupMonthEdge?: Maybe<CompanyGroupMonthsEdge>
}

/** The output of our `companyAdminRemoveMonthFromGroup` mutation. */
export type CompanyAdminRemoveMonthFromGroupPayloadCompanyGroupMonthEdgeArgs = {
  orderBy?: Maybe<Array<CompanyGroupMonthsOrderBy>>
}

/** All input for the `companyAdminRemoveMonthFromGroup` mutation. */
export type CompanyAdminRemoveMonthFromGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  monthId_: Scalars['UUID']
}

/** The output of our `companyAdminRemovePremiumFromGroup` mutation. */
export type CompanyAdminRemovePremiumFromGroupPayload = {
  __typename?: 'CompanyAdminRemovePremiumFromGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyGroupPremium?: Maybe<CompanyGroupPremium>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Premium` that is related to this `CompanyGroupPremium`. */
  premiumByPremiumId?: Maybe<Premium>
  /** Reads a single `CompanyProGroup` that is related to this `CompanyGroupPremium`. */
  companyProGroupByCompanyGroupId?: Maybe<CompanyProGroup>
  /** An edge for our `CompanyGroupPremium`. May be used by Relay 1. */
  companyGroupPremiumEdge?: Maybe<CompanyGroupPremiumsEdge>
}

/** The output of our `companyAdminRemovePremiumFromGroup` mutation. */
export type CompanyAdminRemovePremiumFromGroupPayloadCompanyGroupPremiumEdgeArgs = {
  orderBy?: Maybe<Array<CompanyGroupPremiumsOrderBy>>
}

/** All input for the `companyAdminRemovePremiumFromGroup` mutation. */
export type CompanyAdminRemovePremiumFromGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  premiumId_?: Maybe<Scalars['UUID']>
}

/** The output of our `companyCreateGroup` mutation. */
export type CompanyCreateGroupPayload = {
  __typename?: 'CompanyCreateGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyProGroup?: Maybe<CompanyProGroup>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Company` that is related to this `CompanyProGroup`. */
  companyByCompanyId?: Maybe<Company>
  /** An edge for our `CompanyProGroup`. May be used by Relay 1. */
  companyProGroupEdge?: Maybe<CompanyProGroupsEdge>
}

/** The output of our `companyCreateGroup` mutation. */
export type CompanyCreateGroupPayloadCompanyProGroupEdgeArgs = {
  orderBy?: Maybe<Array<CompanyProGroupsOrderBy>>
}

/** All input for the `companyCreateGroup` mutation. */
export type CompanyCreateGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  name_?: Maybe<Scalars['String']>
  description_?: Maybe<Scalars['String']>
}

/** The output of our `companyDeleteGroup` mutation. */
export type CompanyDeleteGroupPayload = {
  __typename?: 'CompanyDeleteGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  companyProGroup?: Maybe<CompanyProGroup>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Company` that is related to this `CompanyProGroup`. */
  companyByCompanyId?: Maybe<Company>
  /** An edge for our `CompanyProGroup`. May be used by Relay 1. */
  companyProGroupEdge?: Maybe<CompanyProGroupsEdge>
}

/** The output of our `companyDeleteGroup` mutation. */
export type CompanyDeleteGroupPayloadCompanyProGroupEdgeArgs = {
  orderBy?: Maybe<Array<CompanyProGroupsOrderBy>>
}

/** All input for the `companyDeleteGroup` mutation. */
export type CompanyDeleteGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  groupId_: Scalars['UUID']
}

/** The output of our `deleteOwnAnimation` mutation. */
export type DeleteOwnAnimationPayload = {
  __typename?: 'DeleteOwnAnimationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  string?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `deleteOwnAnimation` mutation. */
export type DeleteOwnAnimationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animationId?: Maybe<Scalars['String']>
}

/** The output of our `deleteOwnNewsComment` mutation. */
export type DeleteOwnNewsCommentPayload = {
  __typename?: 'DeleteOwnNewsCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  newsComment?: Maybe<NewsComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `News` that is related to this `NewsComment`. */
  newsByNewsId?: Maybe<News>
  /** Reads a single `Profile` that is related to this `NewsComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NewsComment`. May be used by Relay 1. */
  newsCommentEdge?: Maybe<NewsCommentsEdge>
}

/** The output of our `deleteOwnNewsComment` mutation. */
export type DeleteOwnNewsCommentPayloadNewsCommentEdgeArgs = {
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
}

/** All input for the `deleteOwnNewsComment` mutation. */
export type DeleteOwnNewsCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  _id?: Maybe<Scalars['UUID']>
}

/** The output of our `deleteOwnNote` mutation. */
export type DeleteOwnNotePayload = {
  __typename?: 'DeleteOwnNotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  note?: Maybe<Note>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Submission` that is related to this `Note`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `Profile` that is related to this `Note`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>
}

/** The output of our `deleteOwnNote` mutation. */
export type DeleteOwnNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
}

/** All input for the `deleteOwnNote` mutation. */
export type DeleteOwnNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  _id?: Maybe<Scalars['String']>
}

/** The output of our `deleteOwnNoteComment` mutation. */
export type DeleteOwnNoteCommentPayload = {
  __typename?: 'DeleteOwnNoteCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  noteComment?: Maybe<NoteComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Note` that is related to this `NoteComment`. */
  noteByNoteId?: Maybe<Note>
  /** Reads a single `Profile` that is related to this `NoteComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NoteComment`. May be used by Relay 1. */
  noteCommentEdge?: Maybe<NoteCommentsEdge>
}

/** The output of our `deleteOwnNoteComment` mutation. */
export type DeleteOwnNoteCommentPayloadNoteCommentEdgeArgs = {
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
}

/** All input for the `deleteOwnNoteComment` mutation. */
export type DeleteOwnNoteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  _id?: Maybe<Scalars['UUID']>
}

/** The output of our `deleteOwnSubmission` mutation. */
export type DeleteOwnSubmissionPayload = {
  __typename?: 'DeleteOwnSubmissionPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  string?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `deleteOwnSubmission` mutation. */
export type DeleteOwnSubmissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
}

/** The output of our `instructorRegisterBanner` mutation. */
export type InstructorRegisterBannerPayload = {
  __typename?: 'InstructorRegisterBannerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructor?: Maybe<Instructor>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Instructor`. May be used by Relay 1. */
  instructorEdge?: Maybe<InstructorsEdge>
}

/** The output of our `instructorRegisterBanner` mutation. */
export type InstructorRegisterBannerPayloadInstructorEdgeArgs = {
  orderBy?: Maybe<Array<InstructorsOrderBy>>
}

/** All input for the `instructorRegisterBanner` mutation. */
export type InstructorRegisterBannerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  banner_?: Maybe<Scalars['String']>
}

/** The output of our `instructorUpdateAvailability` mutation. */
export type InstructorUpdateAvailabilityPayload = {
  __typename?: 'InstructorUpdateAvailabilityPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructor?: Maybe<Instructor>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Instructor`. May be used by Relay 1. */
  instructorEdge?: Maybe<InstructorsEdge>
}

/** The output of our `instructorUpdateAvailability` mutation. */
export type InstructorUpdateAvailabilityPayloadInstructorEdgeArgs = {
  orderBy?: Maybe<Array<InstructorsOrderBy>>
}

/** All input for the `instructorUpdateAvailability` mutation. */
export type InstructorUpdateAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  availability_?: Maybe<InstructorAvailability>
}

/** The output of our `instructorUpdateBio` mutation. */
export type InstructorUpdateBioPayload = {
  __typename?: 'InstructorUpdateBioPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instructor?: Maybe<Instructor>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Instructor`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Instructor`. May be used by Relay 1. */
  instructorEdge?: Maybe<InstructorsEdge>
}

/** The output of our `instructorUpdateBio` mutation. */
export type InstructorUpdateBioPayloadInstructorEdgeArgs = {
  orderBy?: Maybe<Array<InstructorsOrderBy>>
}

/** All input for the `instructorUpdateBio` mutation. */
export type InstructorUpdateBioInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  biography_?: Maybe<Scalars['String']>
}

/** The output of our `refreshJwtToken` mutation. */
export type RefreshJwtTokenPayload = {
  __typename?: 'RefreshJwtTokenPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  jwtToken?: Maybe<Scalars['JwtToken']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `refreshJwtToken` mutation. */
export type RefreshJwtTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The output of our `registerAnimation` mutation. */
export type RegisterAnimationPayload = {
  __typename?: 'RegisterAnimationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animationSubmission?: Maybe<AnimationSubmission>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

export type AnimationSubmission = {
  __typename?: 'AnimationSubmission'
  animationId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  submissionId?: Maybe<Scalars['String']>
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
}

/** All input for the `registerAnimation` mutation. */
export type RegisterAnimationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  _title: Scalars['String']
  _startFrame: Scalars['Int']
  _endFrame: Scalars['Int']
  _thumbnailUrl: Scalars['String']
  _comment: Scalars['String']
  _uploadId: Scalars['UUID']
  _profileId: Scalars['UUID']
  _proFeedback: Scalars['Boolean']
  _frameRate: Scalars['String']
  _audio: Scalars['Boolean']
}

/** The output of our `registerFeedbackResponse` mutation. */
export type RegisterFeedbackResponsePayload = {
  __typename?: 'RegisterFeedbackResponsePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animation?: Maybe<Animation>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Animation`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Animation`. May be used by Relay 1. */
  animationEdge?: Maybe<AnimationsEdge>
}

/** The output of our `registerFeedbackResponse` mutation. */
export type RegisterFeedbackResponsePayloadAnimationEdgeArgs = {
  orderBy?: Maybe<Array<AnimationsOrderBy>>
}

/** All input for the `registerFeedbackResponse` mutation. */
export type RegisterFeedbackResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  thumbnail_: Scalars['String']
  link_: Scalars['String']
}

/** The output of our `registerHeadline` mutation. */
export type RegisterHeadlinePayload = {
  __typename?: 'RegisterHeadlinePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  headline?: Maybe<Headline>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Headline`. May be used by Relay 1. */
  headlineEdge?: Maybe<HeadlinesEdge>
}

/** The output of our `registerHeadline` mutation. */
export type RegisterHeadlinePayloadHeadlineEdgeArgs = {
  orderBy?: Maybe<Array<HeadlinesOrderBy>>
}

/** All input for the `registerHeadline` mutation. */
export type RegisterHeadlineInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  thumbnail_?: Maybe<Scalars['String']>
  link_?: Maybe<Scalars['String']>
  title_?: Maybe<Scalars['String']>
}

/** The output of our `registerNewAvatar` mutation. */
export type RegisterNewAvatarPayload = {
  __typename?: 'RegisterNewAvatarPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `registerNewAvatar` mutation. */
export type RegisterNewAvatarPayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `registerNewAvatar` mutation. */
export type RegisterNewAvatarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  avatar_?: Maybe<Scalars['String']>
}

/** The output of our `registerNewBanner` mutation. */
export type RegisterNewBannerPayload = {
  __typename?: 'RegisterNewBannerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `registerNewBanner` mutation. */
export type RegisterNewBannerPayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `registerNewBanner` mutation. */
export type RegisterNewBannerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  banner_?: Maybe<Scalars['String']>
}

/** The output of our `registerNews` mutation. */
export type RegisterNewsPayload = {
  __typename?: 'RegisterNewsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  news?: Maybe<News>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `News`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `News`. May be used by Relay 1. */
  newsEdge?: Maybe<NewsEdge>
}

/** The output of our `registerNews` mutation. */
export type RegisterNewsPayloadNewsEdgeArgs = {
  orderBy?: Maybe<Array<NewsOrderBy>>
}

/** All input for the `registerNews` mutation. */
export type RegisterNewsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  title_: Scalars['String']
  body_: Scalars['String']
  thumbnail_: Scalars['String']
  intro_: Scalars['String']
  proContent_?: Maybe<Scalars['String']>
  videoUrl_?: Maybe<Scalars['String']>
}

/** The output of our `registerNewsComment` mutation. */
export type RegisterNewsCommentPayload = {
  __typename?: 'RegisterNewsCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  newsComment?: Maybe<NewsComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `News` that is related to this `NewsComment`. */
  newsByNewsId?: Maybe<News>
  /** Reads a single `Profile` that is related to this `NewsComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NewsComment`. May be used by Relay 1. */
  newsCommentEdge?: Maybe<NewsCommentsEdge>
}

/** The output of our `registerNewsComment` mutation. */
export type RegisterNewsCommentPayloadNewsCommentEdgeArgs = {
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
}

/** All input for the `registerNewsComment` mutation. */
export type RegisterNewsCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  body_?: Maybe<Scalars['String']>
  newsId_?: Maybe<Scalars['UUID']>
}

/** The output of our `registerNote` mutation. */
export type RegisterNotePayload = {
  __typename?: 'RegisterNotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  note?: Maybe<Note>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Submission` that is related to this `Note`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `Profile` that is related to this `Note`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>
}

/** The output of our `registerNote` mutation. */
export type RegisterNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
}

/** All input for the `registerNote` mutation. */
export type RegisterNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  submissionId?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  paragraph?: Maybe<Scalars['String']>
}

/** The output of our `registerNoteComment` mutation. */
export type RegisterNoteCommentPayload = {
  __typename?: 'RegisterNoteCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  noteComment?: Maybe<NoteComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Note` that is related to this `NoteComment`. */
  noteByNoteId?: Maybe<Note>
  /** Reads a single `Profile` that is related to this `NoteComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NoteComment`. May be used by Relay 1. */
  noteCommentEdge?: Maybe<NoteCommentsEdge>
}

/** The output of our `registerNoteComment` mutation. */
export type RegisterNoteCommentPayloadNoteCommentEdgeArgs = {
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
}

/** All input for the `registerNoteComment` mutation. */
export type RegisterNoteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  noteId: Scalars['String']
  body: Scalars['String']
}

/** The output of our `registerProfile` mutation. */
export type RegisterProfilePayload = {
  __typename?: 'RegisterProfilePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `registerProfile` mutation. */
export type RegisterProfilePayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `registerProfile` mutation. */
export type RegisterProfileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  username: Scalars['String']
  email: Scalars['String']
  pass: Scalars['String']
}

/** The output of our `registerProfileDetails` mutation. */
export type RegisterProfileDetailsPayload = {
  __typename?: 'RegisterProfileDetailsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `registerProfileDetails` mutation. */
export type RegisterProfileDetailsPayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `registerProfileDetails` mutation. */
export type RegisterProfileDetailsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  firstname_?: Maybe<Scalars['String']>
  lastname_?: Maybe<Scalars['String']>
  occupation_?: Maybe<Scalars['String']>
  organisation_?: Maybe<Scalars['String']>
  about_?: Maybe<Scalars['String']>
}

/** The output of our `registerReel` mutation. */
export type RegisterReelPayload = {
  __typename?: 'RegisterReelPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profile?: Maybe<Profile>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>
}

/** The output of our `registerReel` mutation. */
export type RegisterReelPayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>
}

/** All input for the `registerReel` mutation. */
export type RegisterReelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  reel_?: Maybe<Scalars['String']>
  reelDescription_?: Maybe<Scalars['String']>
}

/** The output of our `registerSocial` mutation. */
export type RegisterSocialPayload = {
  __typename?: 'RegisterSocialPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  profileSocial?: Maybe<ProfileSocial>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `ProfileSocial`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `ProfileSocial`. May be used by Relay 1. */
  profileSocialEdge?: Maybe<ProfileSocialsEdge>
}

/** The output of our `registerSocial` mutation. */
export type RegisterSocialPayloadProfileSocialEdgeArgs = {
  orderBy?: Maybe<Array<ProfileSocialsOrderBy>>
}

/** All input for the `registerSocial` mutation. */
export type RegisterSocialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  instagram_?: Maybe<Scalars['String']>
  twitter_?: Maybe<Scalars['String']>
  linkedin_?: Maybe<Scalars['String']>
  artstation_?: Maybe<Scalars['String']>
  vimeo_?: Maybe<Scalars['String']>
  youtube_?: Maybe<Scalars['String']>
  www_?: Maybe<Scalars['String']>
  facebook_?: Maybe<Scalars['String']>
}

/** The output of our `registerSubmission` mutation. */
export type RegisterSubmissionPayload = {
  __typename?: 'RegisterSubmissionPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animationSubmission?: Maybe<AnimationSubmission>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `registerSubmission` mutation. */
export type RegisterSubmissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  _thumbnailUrl: Scalars['String']
  _comment: Scalars['String']
  _uploadId: Scalars['UUID']
  _animationId: Scalars['String']
  _profileId: Scalars['UUID']
  _proFeedback: Scalars['Boolean']
  _startFrame: Scalars['Int']
  _endFrame: Scalars['Int']
  _frameRate: Scalars['String']
  _audio: Scalars['Boolean']
}

/** The output of our `registerTumbleweed` mutation. */
export type RegisterTumbleweedPayload = {
  __typename?: 'RegisterTumbleweedPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  bundleWeed?: Maybe<BundleWeed>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

export type BundleWeed = {
  __typename?: 'BundleWeed'
  animationId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  profileId?: Maybe<Scalars['UUID']>
  submissionId?: Maybe<Scalars['String']>
  startFrame?: Maybe<Scalars['Int']>
  endFrame?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  username?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
}

/** All input for the `registerTumbleweed` mutation. */
export type RegisterTumbleweedInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The output of our `requestProfeedback` mutation. */
export type RequestProfeedbackPayload = {
  __typename?: 'RequestProfeedbackPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  boolean?: Maybe<Scalars['Boolean']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `requestProfeedback` mutation. */
export type RequestProfeedbackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animationdId_?: Maybe<Scalars['String']>
}

/** The output of our `updateAnimationTitle` mutation. */
export type UpdateAnimationTitlePayload = {
  __typename?: 'UpdateAnimationTitlePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animation?: Maybe<Animation>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Profile` that is related to this `Animation`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Animation`. May be used by Relay 1. */
  animationEdge?: Maybe<AnimationsEdge>
}

/** The output of our `updateAnimationTitle` mutation. */
export type UpdateAnimationTitlePayloadAnimationEdgeArgs = {
  orderBy?: Maybe<Array<AnimationsOrderBy>>
}

/** All input for the `updateAnimationTitle` mutation. */
export type UpdateAnimationTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  animationId_?: Maybe<Scalars['String']>
  title_?: Maybe<Scalars['String']>
}

/** The output of our `updateOwnNewsComment` mutation. */
export type UpdateOwnNewsCommentPayload = {
  __typename?: 'UpdateOwnNewsCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  newsComment?: Maybe<NewsComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `News` that is related to this `NewsComment`. */
  newsByNewsId?: Maybe<News>
  /** Reads a single `Profile` that is related to this `NewsComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NewsComment`. May be used by Relay 1. */
  newsCommentEdge?: Maybe<NewsCommentsEdge>
}

/** The output of our `updateOwnNewsComment` mutation. */
export type UpdateOwnNewsCommentPayloadNewsCommentEdgeArgs = {
  orderBy?: Maybe<Array<NewsCommentsOrderBy>>
}

/** All input for the `updateOwnNewsComment` mutation. */
export type UpdateOwnNewsCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  body_?: Maybe<Scalars['String']>
  id_?: Maybe<Scalars['UUID']>
}

/** The output of our `updateOwnNote` mutation. */
export type UpdateOwnNotePayload = {
  __typename?: 'UpdateOwnNotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  note?: Maybe<Note>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Submission` that is related to this `Note`. */
  submissionBySubmissionId?: Maybe<Submission>
  /** Reads a single `Profile` that is related to this `Note`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>
}

/** The output of our `updateOwnNote` mutation. */
export type UpdateOwnNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
}

/** All input for the `updateOwnNote` mutation. */
export type UpdateOwnNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  body_?: Maybe<Scalars['String']>
  paragraph_?: Maybe<Scalars['String']>
  id_?: Maybe<Scalars['String']>
}

/** The output of our `updateOwnNoteComment` mutation. */
export type UpdateOwnNoteCommentPayload = {
  __typename?: 'UpdateOwnNoteCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  noteComment?: Maybe<NoteComment>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Note` that is related to this `NoteComment`. */
  noteByNoteId?: Maybe<Note>
  /** Reads a single `Profile` that is related to this `NoteComment`. */
  profileByProfileId?: Maybe<Profile>
  /** An edge for our `NoteComment`. May be used by Relay 1. */
  noteCommentEdge?: Maybe<NoteCommentsEdge>
}

/** The output of our `updateOwnNoteComment` mutation. */
export type UpdateOwnNoteCommentPayloadNoteCommentEdgeArgs = {
  orderBy?: Maybe<Array<NoteCommentsOrderBy>>
}

/** All input for the `updateOwnNoteComment` mutation. */
export type UpdateOwnNoteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  body_?: Maybe<Scalars['String']>
  id_?: Maybe<Scalars['String']>
}

/** The output of our `updateOwnSubmissionComment` mutation. */
export type UpdateOwnSubmissionCommentPayload = {
  __typename?: 'UpdateOwnSubmissionCommentPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  submission?: Maybe<Submission>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Animation` that is related to this `Submission`. */
  animationByAnimationId?: Maybe<Animation>
  /** An edge for our `Submission`. May be used by Relay 1. */
  submissionEdge?: Maybe<SubmissionsEdge>
}

/** The output of our `updateOwnSubmissionComment` mutation. */
export type UpdateOwnSubmissionCommentPayloadSubmissionEdgeArgs = {
  orderBy?: Maybe<Array<SubmissionsOrderBy>>
}

/** All input for the `updateOwnSubmissionComment` mutation. */
export type UpdateOwnSubmissionCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  comment_?: Maybe<Scalars['String']>
  shortComment_?: Maybe<Scalars['String']>
  id_?: Maybe<Scalars['String']>
}

export type AdminChangeInstructorStatusMutationVariables = Exact<{
  profileId: Scalars['UUID']
  instructorStatus: InstructorStatus
}>

export type AdminChangeInstructorStatusMutation = {
  __typename?: 'Mutation'
} & {
  adminEditInstructorStatus?: Maybe<
    { __typename?: 'AdminEditInstructorStatusPayload' } & Pick<
      AdminEditInstructorStatusPayload,
      'clientMutationId'
    > & {
        instructor?: Maybe<
          { __typename?: 'Instructor' } & Pick<Instructor, 'status'>
        >
      }
  >
}

export type AdminPromoteToInstructorMutationVariables = Exact<{
  profileId: Scalars['UUID']
}>

export type AdminPromoteToInstructorMutation = { __typename?: 'Mutation' } & {
  adminPromoteToInstructor?: Maybe<
    { __typename?: 'AdminPromoteToInstructorPayload' } & {
      instructor?: Maybe<{ __typename?: 'Instructor' } & Pick<Instructor, 'id'>>
    }
  >
}

export type AdminUpdatePostMutationVariables = Exact<{
  title: Scalars['String']
  id: Scalars['UUID']
  body: Scalars['String']
}>

export type AdminUpdatePostMutation = { __typename?: 'Mutation' } & {
  adminUpdatePost?: Maybe<
    { __typename?: 'AdminUpdatePostPayload' } & {
      news?: Maybe<
        { __typename?: 'News' } & Pick<
          News,
          | 'updatedAt'
          | 'title'
          | 'thumbnail'
          | 'status'
          | 'slug'
          | 'profileId'
          | 'nodeId'
          | 'intro'
          | 'id'
          | 'createdAt'
          | 'body'
        >
      >
    }
  >
}

export type AllCompanyAdminMonthsQueryVariables = Exact<{
  groupId: Scalars['UUID']
}>

export type AllCompanyAdminMonthsQuery = { __typename?: 'Query' } & {
  allVCompanyAdminMonths?: Maybe<
    { __typename?: 'VCompanyAdminMonthsConnection' } & {
      nodes: Array<
        { __typename?: 'VCompanyAdminMonth' } & Pick<
          VCompanyAdminMonth,
          'year' | 'id' | 'month' | 'groupId' | 'amountFeedbacks'
        >
      >
    }
  >
}

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
  repeatedNewPassword: Scalars['String']
}>

export type ChangePasswordMutation = { __typename: 'Mutation' } & {
  changePassword?: Maybe<
    { __typename?: 'ChangePasswordPayload' } & Pick<
      ChangePasswordPayload,
      'boolean'
    >
  >
}

export type ChangeUserRoleMutationVariables = Exact<{
  userId: Scalars['UUID']
  role: UserRole
}>

export type ChangeUserRoleMutation = { __typename?: 'Mutation' } & {
  changeUserRole?: Maybe<
    { __typename?: 'ChangeUserRolePayload' } & {
      profile?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'role'>>
    }
  >
}

export type ClaimFeedbackMutationVariables = Exact<{
  feedbackRequestId: Scalars['String']
  submissionId: Scalars['String']
}>

export type ClaimFeedbackMutation = { __typename: 'Mutation' } & {
  claimFeedback?: Maybe<
    { __typename?: 'ClaimFeedbackPayload' } & {
      feedbackResponse?: Maybe<
        { __typename?: 'FeedbackResponse' } & Pick<
          FeedbackResponse,
          'createdAt' | 'status' | 'id' | 'profileId'
        >
      >
    }
  >
}

export type CompanyAdminAddMonthToGroupMutationVariables = Exact<{
  year: Scalars['Int']
  month: Scalars['Int']
  groupId: Scalars['UUID']
  amountFeedbacks: Scalars['Int']
}>

export type CompanyAdminAddMonthToGroupMutation = {
  __typename?: 'Mutation'
} & {
  companyAdminAddMonthToGroup?: Maybe<
    { __typename?: 'CompanyAdminAddMonthToGroupPayload' } & {
      companyGroupMonth?: Maybe<
        { __typename?: 'CompanyGroupMonth' } & Pick<CompanyGroupMonth, 'id'>
      >
    }
  >
}

export type CompanyAdminAddPremiumToGroupMutationVariables = Exact<{
  groupId: Scalars['UUID']
  premiumId: Scalars['UUID']
}>

export type CompanyAdminAddPremiumToGroupMutation = {
  __typename?: 'Mutation'
} & {
  companyAdminAddPremiumToGroup?: Maybe<
    { __typename?: 'CompanyAdminAddPremiumToGroupPayload' } & {
      companyGroupPremium?: Maybe<
        { __typename?: 'CompanyGroupPremium' } & Pick<
          CompanyGroupPremium,
          'premiumId' | 'companyGroupId'
        >
      >
    }
  >
}

export type CompanyAdminRemoveMonthFromGroupMutationVariables = Exact<{
  monthId: Scalars['UUID']
}>

export type CompanyAdminRemoveMonthFromGroupMutation = {
  __typename?: 'Mutation'
} & {
  companyAdminRemoveMonthFromGroup?: Maybe<
    { __typename?: 'CompanyAdminRemoveMonthFromGroupPayload' } & {
      companyGroupMonth?: Maybe<
        { __typename?: 'CompanyGroupMonth' } & Pick<
          CompanyGroupMonth,
          'groupId'
        >
      >
    }
  >
}

export type CompanyAdminRemovePremiumFromGroupMutationVariables = Exact<{
  premiumId: Scalars['UUID']
}>

export type CompanyAdminRemovePremiumFromGroupMutation = {
  __typename?: 'Mutation'
} & {
  companyAdminRemovePremiumFromGroup?: Maybe<
    { __typename?: 'CompanyAdminRemovePremiumFromGroupPayload' } & {
      companyProGroupByCompanyGroupId?: Maybe<
        { __typename?: 'CompanyProGroup' } & Pick<CompanyProGroup, 'groupName'>
      >
    }
  >
}

export type CompanyCreateGroupMutationVariables = Exact<{
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
}>

export type CompanyCreateGroupMutation = { __typename?: 'Mutation' } & {
  companyCreateGroup?: Maybe<
    { __typename?: 'CompanyCreateGroupPayload' } & Pick<
      CompanyCreateGroupPayload,
      'clientMutationId'
    > & {
        companyProGroup?: Maybe<
          { __typename?: 'CompanyProGroup' } & Pick<
            CompanyProGroup,
            | 'companyId'
            | 'createdAt'
            | 'description'
            | 'groupName'
            | 'id'
            | 'nodeId'
            | 'updatedAt'
          >
        >
      }
  >
}

export type CompanyDeleteGroupMutationVariables = Exact<{
  id: Scalars['UUID']
}>

export type CompanyDeleteGroupMutation = { __typename?: 'Mutation' } & {
  companyDeleteGroup?: Maybe<
    { __typename?: 'CompanyDeleteGroupPayload' } & {
      companyProGroup?: Maybe<
        { __typename?: 'CompanyProGroup' } & Pick<CompanyProGroup, 'groupName'>
      >
    }
  >
}

export type DeleteOwnAnimationMutationVariables = Exact<{
  animationId: Scalars['String']
}>

export type DeleteOwnAnimationMutation = { __typename?: 'Mutation' } & {
  deleteOwnAnimation?: Maybe<
    { __typename?: 'DeleteOwnAnimationPayload' } & Pick<
      DeleteOwnAnimationPayload,
      'string'
    >
  >
}

export type DeleteOwnNoteMutationVariables = Exact<{
  id: Scalars['String']
}>

export type DeleteOwnNoteMutation = { __typename?: 'Mutation' } & {
  deleteOwnNote?: Maybe<
    { __typename?: 'DeleteOwnNotePayload' } & {
      note?: Maybe<{ __typename?: 'Note' } & Pick<Note, 'status'>>
    }
  >
}

export type DeleteNoteCommentMutationVariables = Exact<{
  id: Scalars['UUID']
}>

export type DeleteNoteCommentMutation = { __typename?: 'Mutation' } & {
  deleteOwnNoteComment?: Maybe<
    { __typename?: 'DeleteOwnNoteCommentPayload' } & {
      noteComment?: Maybe<
        { __typename?: 'NoteComment' } & Pick<NoteComment, 'id'>
      >
    }
  >
}

export type DeleteOwnSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String']
}>

export type DeleteOwnSubmissionMutation = { __typename?: 'Mutation' } & {
  deleteOwnSubmission?: Maybe<
    { __typename?: 'DeleteOwnSubmissionPayload' } & Pick<
      DeleteOwnSubmissionPayload,
      'string'
    >
  >
}

export type InstructorRegisterBannerMutationVariables = Exact<{
  banner: Scalars['String']
}>

export type InstructorRegisterBannerMutation = { __typename?: 'Mutation' } & {
  instructorRegisterBanner?: Maybe<
    { __typename?: 'InstructorRegisterBannerPayload' } & {
      instructor?: Maybe<
        { __typename?: 'Instructor' } & Pick<Instructor, 'id' | 'banner'>
      >
    }
  >
}

export type InstructorUpdateAvailabilityMutationVariables = Exact<{
  availability: InstructorAvailability
}>

export type InstructorUpdateAvailabilityMutation = {
  __typename?: 'Mutation'
} & {
  instructorUpdateAvailability?: Maybe<
    { __typename?: 'InstructorUpdateAvailabilityPayload' } & {
      instructor?: Maybe<
        { __typename?: 'Instructor' } & Pick<Instructor, 'availability' | 'id'>
      >
    }
  >
}

export type InstructorUpdateBioMutationVariables = Exact<{
  bio: Scalars['String']
}>

export type InstructorUpdateBioMutation = { __typename?: 'Mutation' } & {
  instructorUpdateBio?: Maybe<
    { __typename?: 'InstructorUpdateBioPayload' } & {
      instructor?: Maybe<
        { __typename?: 'Instructor' } & Pick<Instructor, 'id' | 'biography'>
      >
    }
  >
}

export type LoginByEmailMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type LoginByEmailMutation = { __typename: 'Mutation' } & {
  authenticate?: Maybe<
    { __typename: 'AuthenticatePayload' } & Pick<
      AuthenticatePayload,
      'jwtToken'
    >
  >
}

export type LoginByUsernameMutationVariables = Exact<{
  username: Scalars['String']
  password: Scalars['String']
}>

export type LoginByUsernameMutation = { __typename: 'Mutation' } & {
  authenticateByUsername?: Maybe<
    { __typename: 'AuthenticateByUsernamePayload' } & Pick<
      AuthenticateByUsernamePayload,
      'jwtToken'
    >
  >
}

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never }>

export type RefreshTokenMutation = { __typename?: 'Mutation' } & {
  refreshJwtToken?: Maybe<
    { __typename?: 'RefreshJwtTokenPayload' } & Pick<
      RefreshJwtTokenPayload,
      'jwtToken'
    >
  >
}

export type RegisterAvatarMutationVariables = Exact<{
  avatar: Scalars['String']
}>

export type RegisterAvatarMutation = { __typename?: 'Mutation' } & {
  registerNewAvatar?: Maybe<
    { __typename?: 'RegisterNewAvatarPayload' } & {
      profile?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'avatar'>>
    }
  >
}

export type RegisterFeedbackResponseMutationVariables = Exact<{
  thumbnail: Scalars['String']
  link: Scalars['String']
}>

export type RegisterFeedbackResponseMutation = { __typename: 'Mutation' } & {
  registerFeedbackResponse?: Maybe<
    { __typename?: 'RegisterFeedbackResponsePayload' } & {
      animation?: Maybe<{ __typename?: 'Animation' } & Pick<Animation, 'id'>>
    }
  >
}

export type RegisterHeadlineMutationVariables = Exact<{
  thumbnail: Scalars['String']
  link: Scalars['String']
  title?: Maybe<Scalars['String']>
}>

export type RegisterHeadlineMutation = { __typename: 'Mutation' } & {
  registerHeadline?: Maybe<
    { __typename?: 'RegisterHeadlinePayload' } & {
      headline?: Maybe<
        { __typename?: 'Headline' } & Pick<
          Headline,
          'id' | 'createdAt' | 'link' | 'thumbnail' | 'title'
        >
      >
    }
  >
}

export type RegisterNewBannerMutationVariables = Exact<{
  banner: Scalars['String']
}>

export type RegisterNewBannerMutation = { __typename?: 'Mutation' } & {
  registerNewBanner?: Maybe<
    { __typename?: 'RegisterNewBannerPayload' } & {
      profile?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'banner'>>
    }
  >
}

export type RegisterNewsMutationVariables = Exact<{
  title: Scalars['String']
  paragraph: Scalars['String']
  body: Scalars['String']
  thumbnail: Scalars['String']
  proContent?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
}>

export type RegisterNewsMutation = { __typename?: 'Mutation' } & {
  registerNews?: Maybe<
    { __typename?: 'RegisterNewsPayload' } & {
      news?: Maybe<
        { __typename?: 'News' } & Pick<
          News,
          | 'id'
          | 'body'
          | 'createdAt'
          | 'intro'
          | 'nodeId'
          | 'profileId'
          | 'slug'
          | 'thumbnail'
          | 'title'
        >
      >
    }
  >
}

export type RegisterNewsCommentMutationVariables = Exact<{
  body: Scalars['String']
  newsId?: Maybe<Scalars['UUID']>
}>

export type RegisterNewsCommentMutation = { __typename?: 'Mutation' } & {
  registerNewsComment?: Maybe<
    { __typename?: 'RegisterNewsCommentPayload' } & {
      newsComment?: Maybe<
        { __typename?: 'NewsComment' } & Pick<
          NewsComment,
          'body' | 'createdAt' | 'id'
        >
      >
    }
  >
}

export type RegisterNoteMutationVariables = Exact<{
  submissionId: Scalars['String']
  body: Scalars['String']
  paragraph: Scalars['String']
}>

export type RegisterNoteMutation = { __typename?: 'Mutation' } & {
  registerNote?: Maybe<
    { __typename?: 'RegisterNotePayload' } & {
      note?: Maybe<
        { __typename?: 'Note' } & Pick<
          Note,
          'id' | 'createdAt' | 'body' | 'submissionId' | 'profileId'
        >
      >
    }
  >
}

export type RegisterNoteCommentMutationVariables = Exact<{
  noteId: Scalars['String']
  body: Scalars['String']
}>

export type RegisterNoteCommentMutation = { __typename: 'Mutation' } & {
  registerNoteComment?: Maybe<
    { __typename?: 'RegisterNoteCommentPayload' } & {
      noteComment?: Maybe<
        { __typename?: 'NoteComment' } & Pick<NoteComment, 'id'>
      >
    }
  >
}

export type RegisterProfileMutationVariables = Exact<{
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}>

export type RegisterProfileMutation = { __typename: 'Mutation' } & {
  registerProfile?: Maybe<
    { __typename?: 'RegisterProfilePayload' } & Pick<
      RegisterProfilePayload,
      'clientMutationId'
    >
  >
}

export type RegisterSocialMutationVariables = Exact<{
  www?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
  vimeo?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  linkedin?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  artstation?: Maybe<Scalars['String']>
}>

export type RegisterSocialMutation = { __typename?: 'Mutation' } & {
  registerSocial?: Maybe<
    { __typename?: 'RegisterSocialPayload' } & {
      profileSocial?: Maybe<
        { __typename?: 'ProfileSocial' } & Pick<
          ProfileSocial,
          | 'linkedin'
          | 'instagram'
          | 'facebook'
          | 'artstation'
          | 'profileId'
          | 'twitter'
          | 'vimeo'
          | 'www'
          | 'youtube'
        >
      >
    }
  >
}

export type RegisterProfileDetailsMutationVariables = Exact<{
  organisation?: Maybe<Scalars['String']>
  occupation?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
}>

export type RegisterProfileDetailsMutation = { __typename: 'Mutation' } & {
  registerProfileDetails?: Maybe<
    { __typename?: 'RegisterProfileDetailsPayload' } & {
      profile?: Maybe<
        { __typename?: 'Profile' } & Pick<
          Profile,
          'about' | 'firstname' | 'lastname' | 'occupation' | 'organisation'
        >
      >
    }
  >
}

export type RequestProfeedbackMutationVariables = Exact<{
  animationId: Scalars['String']
}>

export type RequestProfeedbackMutation = { __typename?: 'Mutation' } & {
  requestProfeedback?: Maybe<
    { __typename?: 'RequestProfeedbackPayload' } & Pick<
      RequestProfeedbackPayload,
      'boolean'
    >
  >
}

export type UpdateAnimationTitleMutationVariables = Exact<{
  animationId: Scalars['String']
  title: Scalars['String']
}>

export type UpdateAnimationTitleMutation = { __typename?: 'Mutation' } & {
  updateAnimationTitle?: Maybe<
    { __typename?: 'UpdateAnimationTitlePayload' } & {
      animation?: Maybe<
        { __typename?: 'Animation' } & Pick<Animation, 'title' | 'id'>
      >
    }
  >
}

export type UpdateOwnNewsCommentMutationVariables = Exact<{
  id: Scalars['UUID']
  body: Scalars['String']
}>

export type UpdateOwnNewsCommentMutation = { __typename?: 'Mutation' } & {
  updateOwnNewsComment?: Maybe<
    { __typename?: 'UpdateOwnNewsCommentPayload' } & {
      newsComment?: Maybe<
        { __typename?: 'NewsComment' } & Pick<NewsComment, 'id' | 'updatedAt'>
      >
    }
  >
}

export type UpdateOwnNoteMutationVariables = Exact<{
  id: Scalars['String']
  paragraph: Scalars['String']
  body: Scalars['String']
}>

export type UpdateOwnNoteMutation = { __typename?: 'Mutation' } & {
  updateOwnNote?: Maybe<
    { __typename?: 'UpdateOwnNotePayload' } & {
      note?: Maybe<{ __typename?: 'Note' } & Pick<Note, 'id' | 'updatedAt'>>
    }
  >
}

export type UpdateOwnNoteCommentMutationVariables = Exact<{
  id: Scalars['String']
  body: Scalars['String']
}>

export type UpdateOwnNoteCommentMutation = { __typename?: 'Mutation' } & {
  updateOwnNoteComment?: Maybe<
    { __typename?: 'UpdateOwnNoteCommentPayload' } & {
      noteComment?: Maybe<
        { __typename?: 'NoteComment' } & Pick<NoteComment, 'id' | 'updatedAt'>
      >
    }
  >
}

export type UpdateReelMutationVariables = Exact<{
  reelDescription?: Maybe<Scalars['String']>
  reel?: Maybe<Scalars['String']>
}>

export type UpdateReelMutation = { __typename: 'Mutation' } & {
  registerReel?: Maybe<
    { __typename?: 'RegisterReelPayload' } & Pick<
      RegisterReelPayload,
      'clientMutationId'
    > & {
        profile?: Maybe<
          { __typename?: 'Profile' } & Pick<Profile, 'reel' | 'reelDescription'>
        >
      }
  >
}

export type UpdateOwnSubmissionCommentMutationVariables = Exact<{
  comment: Scalars['String']
  shortComment: Scalars['String']
  id: Scalars['String']
}>

export type UpdateOwnSubmissionCommentMutation = { __typename?: 'Mutation' } & {
  updateOwnSubmissionComment?: Maybe<
    { __typename?: 'UpdateOwnSubmissionCommentPayload' } & {
      submission?: Maybe<
        { __typename?: 'Submission' } & Pick<Submission, 'updatedAt'>
      >
    }
  >
}

export type AcceptedAgreementQueryVariables = Exact<{ [key: string]: never }>

export type AcceptedAgreementQuery = { __typename: 'Query' } & {
  currentProfile?: Maybe<
    { __typename?: 'Profile' } & {
      instructorByProfileId?: Maybe<
        { __typename?: 'Instructor' } & Pick<Instructor, 'acceptedAgreement'>
      >
    }
  >
}

export type GetAllAdminInstructorsQueryVariables = Exact<{
  first: Scalars['Int']
  offset: Scalars['Int']
}>

export type GetAllAdminInstructorsQuery = { __typename: 'Query' } & {
  allVAdminInstructors?: Maybe<
    { __typename?: 'VAdminInstructorsConnection' } & Pick<
      VAdminInstructorsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VAdminInstructor' } & Pick<
            VAdminInstructor,
            'status' | 'availability'
          > & {
              profileByProfileId?: Maybe<
                { __typename?: 'Profile' } & Pick<
                  Profile,
                  | 'id'
                  | 'username'
                  | 'firstname'
                  | 'lastname'
                  | 'avatar'
                  | 'organisation'
                  | 'occupation'
                >
              >
            }
        >
      }
  >
}

export type GetAllAnimationQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllAnimationQuery = { __typename?: 'Query' } & {
  allVAnimationPreviews?: Maybe<
    { __typename?: 'VAnimationPreviewsConnection' } & Pick<
      VAnimationPreviewsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VAnimationPreview' } & Pick<
            VAnimationPreview,
            | 'updatedAt'
            | 'title'
            | 'thumbnailUrl'
            | 'submissions'
            | 'submissionId'
            | 'profileId'
            | 'id'
            | 'createdAt'
            | 'shortComment'
            | 'startFrame'
            | 'endFrame'
            | 'notes'
            | 'feedbackCount'
            | 'audio'
          > & {
              profileByProfileId?: Maybe<
                { __typename?: 'Profile' } & Pick<
                  Profile,
                  | 'id'
                  | 'avatar'
                  | 'premiumType'
                  | 'role'
                  | 'username'
                  | 'isInstructor'
                >
              >
            }
        >
      }
  >
}

export type GetAllCompaniesQueryVariables = Exact<{
  first: Scalars['Int']
  offset: Scalars['Int']
}>

export type GetAllCompaniesQuery = { __typename?: 'Query' } & {
  allCompanies?: Maybe<
    { __typename?: 'CompaniesConnection' } & Pick<
      CompaniesConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'Company' } & Pick<
            Company,
            'name' | 'nameUrlSafe' | 'link' | 'logo' | 'id'
          >
        >
      }
  >
}

export type GetAllCompanyAdminGroupsQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllCompanyAdminGroupsQuery = { __typename?: 'Query' } & {
  allVCompanyAdminGroups?: Maybe<
    { __typename?: 'VCompanyAdminGroupsConnection' } & {
      nodes: Array<
        { __typename?: 'VCompanyAdminGroup' } & Pick<
          VCompanyAdminGroup,
          'slug' | 'totalmembers' | 'id' | 'groupName' | 'description'
        >
      >
    }
  >
}

export type GetAllCompanyAdminMembersQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllCompanyAdminMembersQuery = { __typename?: 'Query' } & {
  allVCompanyAdminMembers?: Maybe<
    { __typename?: 'VCompanyAdminMembersConnection' } & Pick<
      VCompanyAdminMembersConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VCompanyAdminMember' } & Pick<
            VCompanyAdminMember,
            | 'username'
            | 'lastname'
            | 'groupName'
            | 'groupId'
            | 'firstname'
            | 'avatar'
            | 'premiumId'
          >
        >
      }
  >
}

export type GetAllFeedbackQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllFeedbackQuery = { __typename?: 'Query' } & {
  allVInstructorFeedbacks?: Maybe<
    { __typename?: 'VInstructorFeedbacksConnection' } & Pick<
      VInstructorFeedbacksConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VInstructorFeedback' } & Pick<
            VInstructorFeedback,
            | 'username'
            | 'title'
            | 'submissionId'
            | 'startFrame'
            | 'status'
            | 'endFrame'
            | 'id'
            | 'createdAt'
            | 'shortComment'
            | 'avatar'
            | 'animationId'
          >
        >
      }
  >
}

export type GetAllHeadlinesQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllHeadlinesQuery = { __typename?: 'Query' } & {
  allHeadlines?: Maybe<
    { __typename?: 'HeadlinesConnection' } & Pick<
      HeadlinesConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'Headline' } & Pick<
            Headline,
            'id' | 'createdAt' | 'link' | 'thumbnail' | 'title'
          >
        >
      }
  >
}

export type GetAllInstructorsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllInstructorsQuery = { __typename?: 'Query' } & {
  allInstructors?: Maybe<
    { __typename?: 'InstructorsConnection' } & Pick<
      InstructorsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'Instructor' } & Pick<Instructor, 'banner'> & {
              profileByProfileId?: Maybe<
                { __typename?: 'Profile' } & Pick<
                  Profile,
                  | 'about'
                  | 'avatar'
                  | 'id'
                  | 'firstname'
                  | 'isInstructor'
                  | 'lastname'
                  | 'occupation'
                  | 'organisation'
                  | 'reel'
                  | 'reelDescription'
                  | 'username'
                >
              >
            }
        >
      }
  >
}

export type GetAllMembersQueryVariables = Exact<{
  first: Scalars['Int']
  offset: Scalars['Int']
}>

export type GetAllMembersQuery = { __typename?: 'Query' } & {
  allVAdminMembers?: Maybe<
    { __typename?: 'VAdminMembersConnection' } & Pick<
      VAdminMembersConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VAdminMember' } & Pick<
            VAdminMember,
            | 'avatar'
            | 'username'
            | 'firstname'
            | 'lastname'
            | 'id'
            | 'createdAt'
            | 'role'
            | 'isInstructor'
          >
        >
      }
  >
}

export type GetAllNewsQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllNewsQuery = { __typename?: 'Query' } & {
  allVPosts?: Maybe<
    { __typename?: 'VPostsConnection' } & Pick<
      VPostsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VPost' } & Pick<
            VPost,
            | 'body'
            | 'thumbnail'
            | 'createdAt'
            | 'title'
            | 'id'
            | 'slug'
            | 'intro'
            | 'proContent'
          >
        >
      }
  >
}

export type GetAllNoteCommentsQueryVariables = Exact<{
  noteId: Scalars['String']
  offset: Scalars['Int']
}>

export type GetAllNoteCommentsQuery = { __typename?: 'Query' } & {
  allNoteComments?: Maybe<
    { __typename?: 'NoteCommentsConnection' } & Pick<
      NoteCommentsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'NoteComment' } & Pick<
            NoteComment,
            'body' | 'createdAt' | 'updatedAt' | 'id'
          > & {
              profileByProfileId?: Maybe<
                { __typename?: 'Profile' } & Pick<
                  Profile,
                  'username' | 'avatar'
                >
              >
            }
        >
      }
  >
}

export type GetAllNotesQueryVariables = Exact<{
  offset: Scalars['Int']
  submissionId: Scalars['String']
}>

export type GetAllNotesQuery = { __typename?: 'Query' } & {
  allVNotes?: Maybe<
    { __typename?: 'VNotesConnection' } & Pick<
      VNotesConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VNote' } & Pick<
            VNote,
            'createdAt' | 'body' | 'id' | 'updatedAt' | 'noteComments'
          > & {
              profileByProfileId?: Maybe<
                { __typename?: 'Profile' } & Pick<
                  Profile,
                  | 'id'
                  | 'username'
                  | 'avatar'
                  | 'occupation'
                  | 'organisation'
                  | 'role'
                  | 'isInstructor'
                  | 'premiumType'
                >
              >
            }
        >
      }
  >
}

export type GetAllOwnProFeedbackQueryVariables = Exact<{ [key: string]: never }>

export type GetAllOwnProFeedbackQuery = { __typename?: 'Query' } & {
  allVProOwnFeedbacks?: Maybe<
    { __typename?: 'VProOwnFeedbacksConnection' } & {
      nodes: Array<
        { __typename?: 'VProOwnFeedback' } & Pick<
          VProOwnFeedback,
          | 'id'
          | 'animationId'
          | 'avatar'
          | 'latestSubmissionId'
          | 'responseStatus'
          | 'submissionId'
          | 'title'
          | 'createdAt'
          | 'username'
        >
      >
    }
  >
}

export type GetAllPoolQueryVariables = Exact<{
  offset: Scalars['Int']
}>

export type GetAllPoolQuery = { __typename?: 'Query' } & {
  allVInstructorPools?: Maybe<
    { __typename?: 'VInstructorPoolsConnection' } & Pick<
      VInstructorPoolsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VInstructorPool' } & Pick<
            VInstructorPool,
            | 'id'
            | 'thumbnailUrl'
            | 'submissionId'
            | 'createdAt'
            | 'shortComment'
            | 'title'
            | 'animationId'
            | 'avatar'
            | 'endFrame'
            | 'startFrame'
            | 'responseStatus'
            | 'requestStatus'
            | 'latestSubmission'
            | 'username'
            | 'updatedAt'
          >
        >
      }
  >
  currentInstructor?: Maybe<
    { __typename?: 'Instructor' } & Pick<
      Instructor,
      'currentlyResponding' | 'isTilted'
    >
  >
}

export type GetAllPostCommentsQueryVariables = Exact<{
  slug: Scalars['String']
  offset: Scalars['Int']
}>

export type GetAllPostCommentsQuery = { __typename?: 'Query' } & {
  newsBySlug?: Maybe<
    { __typename?: 'News' } & {
      newsCommentsByNewsId: { __typename?: 'NewsCommentsConnection' } & Pick<
        NewsCommentsConnection,
        'totalCount'
      > & {
          nodes: Array<
            { __typename?: 'NewsComment' } & Pick<
              NewsComment,
              'updatedAt' | 'profileId' | 'id' | 'createdAt' | 'body'
            > & {
                profileByProfileId?: Maybe<
                  { __typename?: 'Profile' } & Pick<
                    Profile,
                    'avatar' | 'username'
                  >
                >
              }
          >
        }
    }
  >
}

export type GetAllSubmissionsQueryVariables = Exact<{
  animationId: Scalars['String']
}>

export type GetAllSubmissionsQuery = { __typename?: 'Query' } & {
  allSubmissions?: Maybe<
    { __typename?: 'SubmissionsConnection' } & {
      nodes: Array<
        { __typename?: 'Submission' } & Pick<
          Submission,
          | 'shortComment'
          | 'createdAt'
          | 'startFrame'
          | 'endFrame'
          | 'id'
          | 'thumbnailUrl'
          | 'hasProFeedback'
        >
      >
    }
  >
}

export type GetAllVInstructorSettingsQueryVariables = Exact<{
  [key: string]: never
}>

export type GetAllVInstructorSettingsQuery = { __typename?: 'Query' } & {
  allVInstructorSettings?: Maybe<
    { __typename?: 'VInstructorSettingsConnection' } & {
      nodes: Array<
        { __typename?: 'VInstructorSetting' } & Pick<
          VInstructorSetting,
          | 'updatedAt'
          | 'status'
          | 'id'
          | 'createdAt'
          | 'biography'
          | 'banner'
          | 'availability'
          | 'acceptedAgreement'
        >
      >
    }
  >
}

export type GetAnimationQueryVariables = Exact<{
  animationId: Scalars['String']
  submissionId: Scalars['String']
}>

export type GetAnimationQuery = { __typename?: 'Query' } & {
  allVAnimations?: Maybe<
    { __typename?: 'VAnimationsConnection' } & {
      nodes: Array<
        { __typename?: 'VAnimation' } & Pick<
          VAnimation,
          | 'audio'
          | 'frameRate'
          | 'endFrame'
          | 'comment'
          | 'avatar'
          | 'animationId'
          | 'startFrame'
          | 'createdAt'
          | 'updatedAt'
          | 'occupation'
          | 'organisation'
          | 'thumbnailUrl'
          | 'profileId'
          | 'title'
          | 'username'
          | 'videoUrl'
          | 'isLatest'
          | 'instructor'
          | 'premiumType'
          | 'role'
          | 'currentProfileHasReplied'
          | 'profeedback'
          | 'profeedbackStatus'
        >
      >
    }
  >
}

export type GetClaimedPendingFeedbackQueryVariables = Exact<{
  [key: string]: never
}>

export type GetClaimedPendingFeedbackQuery = { __typename?: 'Query' } & {
  getClaimedPendingFeedback?: Maybe<
    { __typename?: 'FeedbackResponse' } & Pick<
      FeedbackResponse,
      'id' | 'createdAt' | 'status'
    > & {
        submissionBySubmissionId?: Maybe<
          { __typename?: 'Submission' } & Pick<
            Submission,
            | 'animationId'
            | 'id'
            | 'shortComment'
            | 'thumbnailUrl'
            | 'videoUrl'
            | 'frameRate'
            | 'endFrame'
            | 'startFrame'
            | 'updatedAt'
            | 'audio'
          > & {
              animationByAnimationId?: Maybe<
                { __typename?: 'Animation' } & Pick<Animation, 'title'> & {
                    profileByProfileId?: Maybe<
                      { __typename?: 'Profile' } & Pick<
                        Profile,
                        'avatar' | 'username'
                      >
                    >
                    submissionsByAnimationId: {
                      __typename?: 'SubmissionsConnection'
                    } & Pick<SubmissionsConnection, 'totalCount'>
                  }
              >
              notesBySubmissionId: { __typename?: 'NotesConnection' } & Pick<
                NotesConnection,
                'totalCount'
              >
            }
        >
      }
  >
}

export type GetCompanyAdminMembersQueryVariables = Exact<{
  offset: Scalars['Int']
  groupId: Scalars['UUID']
}>

export type GetCompanyAdminMembersQuery = { __typename?: 'Query' } & {
  allVCompanyAdminMembers?: Maybe<
    { __typename?: 'VCompanyAdminMembersConnection' } & Pick<
      VCompanyAdminMembersConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VCompanyAdminMember' } & Pick<
            VCompanyAdminMember,
            | 'username'
            | 'premiumId'
            | 'lastname'
            | 'groupName'
            | 'firstname'
            | 'avatar'
          >
        >
      }
  >
}

export type GetCompanyAdminPageQueryVariables = Exact<{ [key: string]: never }>

export type GetCompanyAdminPageQuery = { __typename?: 'Query' } & {
  allVCompanyAdmins?: Maybe<
    { __typename?: 'VCompanyAdminsConnection' } & {
      nodes: Array<
        { __typename?: 'VCompanyAdmin' } & Pick<
          VCompanyAdmin,
          | 'createdAt'
          | 'address'
          | 'description'
          | 'id'
          | 'link'
          | 'logo'
          | 'name'
          | 'nameUrlSafe'
          | 'updatedAt'
          | 'members'
          | 'groups'
        > & {
            companyById?: Maybe<
              { __typename?: 'Company' } & {
                companyProGroupsByCompanyId: {
                  __typename?: 'CompanyProGroupsConnection'
                } & {
                  nodes: Array<
                    { __typename?: 'CompanyProGroup' } & Pick<
                      CompanyProGroup,
                      'groupName' | 'id' | 'slug'
                    >
                  >
                }
              }
            >
          }
      >
    }
  >
}

export type GetCurrentProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetCurrentProfileQuery = { __typename?: 'Query' } & {
  currentProfile?: Maybe<
    { __typename?: 'Profile' } & Pick<
      Profile,
      | 'firstname'
      | 'lastname'
      | 'username'
      | 'avatar'
      | 'id'
      | 'occupation'
      | 'organisation'
      | 'reel'
      | 'reelDescription'
      | 'about'
      | 'banner'
      | 'isInstructor'
      | 'premiumType'
    > & {
        profileSocialByProfileId?: Maybe<
          { __typename?: 'ProfileSocial' } & Pick<
            ProfileSocial,
            | 'youtube'
            | 'www'
            | 'vimeo'
            | 'twitter'
            | 'linkedin'
            | 'instagram'
            | 'facebook'
            | 'artstation'
          >
        >
      }
  >
}

export type GetFeedbackQueryVariables = Exact<{
  submissionId: Scalars['String']
}>

export type GetFeedbackQuery = { __typename?: 'Query' } & {
  allVFeedbacks?: Maybe<
    { __typename?: 'VFeedbacksConnection' } & {
      nodes: Array<
        { __typename?: 'VFeedback' } & Pick<
          VFeedback,
          | 'avatar'
          | 'createdAt'
          | 'id'
          | 'allowed'
          | 'link'
          | 'profileId'
          | 'status'
          | 'submissionId'
          | 'thumbnail'
          | 'updatedAt'
          | 'username'
        >
      >
    }
  >
}

export type GetFeedbackMonthlyDetailsQueryVariables = Exact<{
  month: Scalars['Int']
  year: Scalars['Int']
  profileId: Scalars['UUID']
}>

export type GetFeedbackMonthlyDetailsQuery = { __typename?: 'Query' } & {
  allVAdminFeedbackOverviews?: Maybe<
    { __typename?: 'VAdminFeedbackOverviewsConnection' } & {
      nodes: Array<
        { __typename?: 'VAdminFeedbackOverview' } & Pick<
          VAdminFeedbackOverview,
          | 'username'
          | 'avatar'
          | 'year'
          | 'submissionId'
          | 'profileId'
          | 'month'
          | 'id'
          | 'title'
          | 'feedbackRequestId'
          | 'createdAt'
          | 'animationId'
        >
      >
    }
  >
}

export type GetFeedbackMonthlyOverviewQueryVariables = Exact<{
  year: Scalars['Int']
  month: Scalars['Int']
  offset: Scalars['Int']
}>

export type GetFeedbackMonthlyOverviewQuery = { __typename?: 'Query' } & {
  allVAdminFeedbackOverviewCollapseds?: Maybe<
    { __typename?: 'VAdminFeedbackOverviewCollapsedsConnection' } & Pick<
      VAdminFeedbackOverviewCollapsedsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'VAdminFeedbackOverviewCollapsed' } & Pick<
            VAdminFeedbackOverviewCollapsed,
            'avatar' | 'profileId' | 'year' | 'username' | 'month' | 'count'
          >
        >
      }
  >
  allVAdminFeedbackOverviews?: Maybe<
    { __typename?: 'VAdminFeedbackOverviewsConnection' } & Pick<
      VAdminFeedbackOverviewsConnection,
      'totalCount'
    >
  >
}

export type GetFrontpageHeadlinesQueryVariables = Exact<{
  [key: string]: never
}>

export type GetFrontpageHeadlinesQuery = { __typename?: 'Query' } & {
  allHeadlines?: Maybe<
    { __typename?: 'HeadlinesConnection' } & {
      nodes: Array<
        { __typename?: 'Headline' } & Pick<
          Headline,
          'id' | 'createdAt' | 'link' | 'thumbnail' | 'title'
        >
      >
    }
  >
}

export type GetFullProfileQueryVariables = Exact<{
  username: Scalars['String']
}>

export type GetFullProfileQuery = { __typename?: 'Query' } & {
  getProfileByUsername?: Maybe<
    { __typename?: 'Profile' } & Pick<
      Profile,
      | 'about'
      | 'firstname'
      | 'lastname'
      | 'occupation'
      | 'organisation'
      | 'reel'
      | 'avatar'
      | 'banner'
      | 'createdAt'
      | 'isInstructor'
      | 'premiumType'
      | 'username'
      | 'role'
      | 'reelDescription'
    > & {
        animationsByProfileId: { __typename?: 'AnimationsConnection' } & Pick<
          AnimationsConnection,
          'totalCount'
        > & {
            nodes: Array<
              { __typename?: 'Animation' } & Pick<
                Animation,
                'id' | 'title' | 'profileId'
              > & {
                  submissionsByAnimationId: {
                    __typename?: 'SubmissionsConnection'
                  } & Pick<SubmissionsConnection, 'totalCount'> & {
                      nodes: Array<
                        { __typename?: 'Submission' } & Pick<
                          Submission,
                          | 'startFrame'
                          | 'endFrame'
                          | 'thumbnailUrl'
                          | 'comment'
                          | 'createdAt'
                          | 'id'
                        > & {
                            notesBySubmissionId: {
                              __typename?: 'NotesConnection'
                            } & Pick<NotesConnection, 'totalCount'>
                          }
                      >
                    }
                }
            >
          }
        notesByProfileId: { __typename?: 'NotesConnection' } & Pick<
          NotesConnection,
          'totalCount'
        > & {
            nodes: Array<
              { __typename?: 'Note' } & Pick<
                Note,
                'paragraph' | 'createdAt' | 'id'
              > & {
                  submissionBySubmissionId?: Maybe<
                    { __typename?: 'Submission' } & Pick<
                      Submission,
                      | 'id'
                      | 'animationId'
                      | 'thumbnailUrl'
                      | 'comment'
                      | 'createdAt'
                    > & {
                        animationByAnimationId?: Maybe<
                          { __typename?: 'Animation' } & Pick<
                            Animation,
                            'title'
                          > & {
                              profileByProfileId?: Maybe<
                                { __typename?: 'Profile' } & Pick<
                                  Profile,
                                  'avatar' | 'username'
                                >
                              >
                            }
                        >
                      }
                  >
                }
            >
          }
        profileSocialsByProfileId: {
          __typename?: 'ProfileSocialsConnection'
        } & {
          nodes: Array<
            { __typename?: 'ProfileSocial' } & Pick<
              ProfileSocial,
              | 'linkedin'
              | 'instagram'
              | 'facebook'
              | 'artstation'
              | 'profileId'
              | 'twitter'
              | 'vimeo'
              | 'www'
              | 'youtube'
            >
          >
        }
      }
  >
}

export type GetOwnNoteQueryVariables = Exact<{
  submissionId: Scalars['String']
}>

export type GetOwnNoteQuery = { __typename?: 'Query' } & {
  allVOwnNotes?: Maybe<
    { __typename?: 'VOwnNotesConnection' } & {
      nodes: Array<
        { __typename?: 'VOwnNote' } & Pick<
          VOwnNote,
          'createdAt' | 'body' | 'id' | 'status' | 'updatedAt' | 'noteComments'
        > & {
            profileByProfileId?: Maybe<
              { __typename?: 'Profile' } & Pick<
                Profile,
                | 'id'
                | 'username'
                | 'avatar'
                | 'occupation'
                | 'organisation'
                | 'role'
                | 'isInstructor'
                | 'premiumType'
              >
            >
          }
      >
    }
  >
}

export type GetPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type GetPostBySlugQuery = { __typename?: 'Query' } & {
  getPostBySlug?: Maybe<
    { __typename?: 'VPost' } & Pick<
      VPost,
      | 'createdAt'
      | 'updatedAt'
      | 'body'
      | 'id'
      | 'title'
      | 'intro'
      | 'proContent'
      | 'proPost'
      | 'slug'
      | 'videoUrl'
    >
  >
}

export type GetProViewQueryVariables = Exact<{ [key: string]: never }>

export type GetProViewQuery = { __typename?: 'Query' } & {
  allVProMemberships?: Maybe<
    { __typename?: 'VProMembershipsConnection' } & {
      nodes: Array<
        { __typename?: 'VProMembership' } & Pick<
          VProMembership,
          | 'username'
          | 'builtInFeedback'
          | 'id'
          | 'purchasedFeedback'
          | 'dailyPosts'
          | 'logo'
          | 'link'
          | 'maxFrames'
          | 'premiumName'
          | 'status'
          | 'concurrentProjects'
          | 'companyName'
          | 'createdAt'
          | 'updatedAt'
        > & {
            companyProGroupByCompanyProGroupId?: Maybe<
              { __typename?: 'CompanyProGroup' } & Pick<
                CompanyProGroup,
                'groupName'
              > & {
                  companyGroupMonthsByGroupId: {
                    __typename?: 'CompanyGroupMonthsConnection'
                  } & {
                    nodes: Array<
                      { __typename?: 'CompanyGroupMonth' } & Pick<
                        CompanyGroupMonth,
                        | 'amountFeedbacks'
                        | 'createdAt'
                        | 'month'
                        | 'updatedAt'
                        | 'year'
                      >
                    >
                  }
                }
            >
          }
      >
    }
  >
}

export type GetRoleQueryVariables = Exact<{ [key: string]: never }>

export type GetRoleQuery = { __typename?: 'Query' } & {
  currentProfile?: Maybe<
    { __typename?: 'Profile' } & Pick<
      Profile,
      | 'id'
      | 'role'
      | 'premiumType'
      | 'isInstructor'
      | 'username'
      | 'avatar'
      | 'getAdminCompany'
    >
  >
}

export type IsRegistrationOpenQueryVariables = Exact<{ [key: string]: never }>

export type IsRegistrationOpenQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isRegistrationOpen'
>
