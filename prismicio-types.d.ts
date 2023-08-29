// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for ImageItem documents */
type ImageitemDocumentData = Record<string, never>;
/**
 * ImageItem document from Prismic
 *
 * - **API ID**: `imageitem`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ImageitemDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ImageitemDocumentData>,
    "imageitem",
    Lang
  >;
/** Content for MainMenu documents */
interface MainMenuDocumentData {
  /**
   * Logo field in *MainMenu*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: mainMenu.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Links field in *MainMenu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: mainMenu.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<MainMenuDocumentDataLinksItem>>;
  /**
   * Background Color field in *MainMenu*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: mainMenu.backgroundColor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  backgroundColor: prismic.ColorField;
}
/**
 * Item in MainMenu → Links
 *
 */
export interface MainMenuDocumentDataLinksItem {
  /**
   * Label field in *MainMenu → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mainMenu.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * link field in *MainMenu → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: mainMenu.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * MainMenu document from Prismic
 *
 * - **API ID**: `mainMenu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MainMenuDocumentData>,
    "mainMenu",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: This is the title that appears in the tab
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Menu field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu: prismic.ContentRelationshipField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.metaTitle
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  metaTitle: prismic.KeyTextField;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.metaDescription
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  metaDescription: prismic.KeyTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.metaImage
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  metaImage: prismic.ImageField<never>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | LandingSectionSlice
  | WelcomeSectionSlice
  | LocationsSectionSlice
  | RsvpSectionSlice
  | GiftRegistrySectionSlice
  | GallerySectionSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Site Configuration documents */
interface SiteConfigurationDocumentData {
  /**
   * Wedding Date field in *Site Configuration*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: siteConfiguration.weddingDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  weddingDate: prismic.TimestampField;
}
/**
 * Site Configuration document from Prismic
 *
 * - **API ID**: `siteConfiguration`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteConfigurationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SiteConfigurationDocumentData>,
    "siteConfiguration",
    Lang
  >;
export type AllDocumentTypes =
  | ImageitemDocument
  | MainMenuDocument
  | PageDocument
  | SiteConfigurationDocument;
/**
 * Item in GallerySection → Items
 *
 */
export interface GallerySectionSliceDefaultItem {
  /**
   * Label field in *GallerySection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_section.items[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * Image field in *GallerySection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_section.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for GallerySection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerySectionSliceDefaultItem>
>;
/**
 * Slice variation for *GallerySection*
 *
 */
type GallerySectionSliceVariation = GallerySectionSliceDefault;
/**
 * GallerySection Shared Slice
 *
 * - **API ID**: `gallery_section`
 * - **Description**: `GallerySection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySectionSlice = prismic.SharedSlice<
  "gallery_section",
  GallerySectionSliceVariation
>;
/**
 * Primary content in GiftRegistrySection → Primary
 *
 */
interface GiftRegistrySectionSliceDefaultPrimary {
  /**
   * Monetary Present Text field in *GiftRegistrySection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gift_registry_section.primary.monetaryPresentText
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  monetaryPresentText: prismic.RichTextField;
  /**
   * Gift Registry Text field in *GiftRegistrySection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gift_registry_section.primary.giftRegistryText
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  giftRegistryText: prismic.RichTextField;
  /**
   * GiftRegistryLink field in *GiftRegistrySection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: gift_registry_section.primary.giftRegistryLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  giftRegistryLink: prismic.LinkField;
}
/**
 * Default variation for GiftRegistrySection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GiftRegistrySectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GiftRegistrySectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *GiftRegistrySection*
 *
 */
type GiftRegistrySectionSliceVariation = GiftRegistrySectionSliceDefault;
/**
 * GiftRegistrySection Shared Slice
 *
 * - **API ID**: `gift_registry_section`
 * - **Description**: `GiftRegistrySection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GiftRegistrySectionSlice = prismic.SharedSlice<
  "gift_registry_section",
  GiftRegistrySectionSliceVariation
>;
/**
 * Primary content in LandingSection → Primary
 *
 */
interface LandingSectionSliceDefaultPrimary {
  /**
   * Subtitle field in *LandingSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Noviembre 25, 2023
   * - **API ID Path**: landing_section.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.TitleField;
}
/**
 * Default variation for LandingSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LandingSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LandingSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *LandingSection*
 *
 */
type LandingSectionSliceVariation = LandingSectionSliceDefault;
/**
 * LandingSection Shared Slice
 *
 * - **API ID**: `landing_section`
 * - **Description**: `LandingSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LandingSectionSlice = prismic.SharedSlice<
  "landing_section",
  LandingSectionSliceVariation
>;
/**
 * Primary content in LocationsSection → Primary
 *
 */
interface LocationsSectionSliceDefaultPrimary {
  /**
   * Ceremony Location Name field in *LocationsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.ceremonyLocationName
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  ceremonyLocationName: prismic.KeyTextField;
  /**
   * Ceremony Location Address field in *LocationsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.ceremonyLocationAddress
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  ceremonyLocationAddress: prismic.KeyTextField;
  /**
   * Ceremony Location Link field in *LocationsSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.ceremonyLocationLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  ceremonyLocationLink: prismic.LinkField;
  /**
   * Reception Location Name field in *LocationsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.receptionLocationName
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  receptionLocationName: prismic.KeyTextField;
  /**
   * Reception Location Address field in *LocationsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.receptionLocationAddress
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  receptionLocationAddress: prismic.KeyTextField;
  /**
   * Reception Location Link field in *LocationsSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: locations_section.primary.receptionLocationLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  receptionLocationLink: prismic.LinkField;
}
/**
 * Default variation for LocationsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LocationsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LocationsSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *LocationsSection*
 *
 */
type LocationsSectionSliceVariation = LocationsSectionSliceDefault;
/**
 * LocationsSection Shared Slice
 *
 * - **API ID**: `locations_section`
 * - **Description**: `LocationsSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LocationsSectionSlice = prismic.SharedSlice<
  "locations_section",
  LocationsSectionSliceVariation
>;
/**
 * Primary content in RsvpSection → Primary
 *
 */
interface RsvpSectionSliceDefaultPrimary {
  /**
   * Title field in *RsvpSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rsvp_section.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Invitation Message field in *RsvpSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rsvp_section.primary.invitationMessage
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  invitationMessage: prismic.RichTextField;
  /**
   * Invite Accepted Message field in *RsvpSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rsvp_section.primary.inviteAcceptedMessage
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  inviteAcceptedMessage: prismic.RichTextField;
  /**
   * Invite Declined Message field in *RsvpSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rsvp_section.primary.inviteDeclinedMessage
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  inviteDeclinedMessage: prismic.RichTextField;
}
/**
 * Default variation for RsvpSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RsvpSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RsvpSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *RsvpSection*
 *
 */
type RsvpSectionSliceVariation = RsvpSectionSliceDefault;
/**
 * RsvpSection Shared Slice
 *
 * - **API ID**: `rsvp_section`
 * - **Description**: `RsvpSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RsvpSectionSlice = prismic.SharedSlice<
  "rsvp_section",
  RsvpSectionSliceVariation
>;
/**
 * Primary content in WelcomeSection → Primary
 *
 */
interface WelcomeSectionSliceDefaultPrimary {
  /**
   * Welcome Text field in *WelcomeSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome_section.primary.welcomeText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  welcomeText: prismic.KeyTextField;
}
/**
 * Default variation for WelcomeSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WelcomeSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WelcomeSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *WelcomeSection*
 *
 */
type WelcomeSectionSliceVariation = WelcomeSectionSliceDefault;
/**
 * WelcomeSection Shared Slice
 *
 * - **API ID**: `welcome_section`
 * - **Description**: `WelcomeSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WelcomeSectionSlice = prismic.SharedSlice<
  "welcome_section",
  WelcomeSectionSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ImageitemDocumentData,
      ImageitemDocument,
      MainMenuDocumentData,
      MainMenuDocumentDataLinksItem,
      MainMenuDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SiteConfigurationDocumentData,
      SiteConfigurationDocument,
      AllDocumentTypes,
      GallerySectionSliceDefaultItem,
      GallerySectionSliceDefault,
      GallerySectionSliceVariation,
      GallerySectionSlice,
      GiftRegistrySectionSliceDefaultPrimary,
      GiftRegistrySectionSliceDefault,
      GiftRegistrySectionSliceVariation,
      GiftRegistrySectionSlice,
      LandingSectionSliceDefaultPrimary,
      LandingSectionSliceDefault,
      LandingSectionSliceVariation,
      LandingSectionSlice,
      LocationsSectionSliceDefaultPrimary,
      LocationsSectionSliceDefault,
      LocationsSectionSliceVariation,
      LocationsSectionSlice,
      RsvpSectionSliceDefaultPrimary,
      RsvpSectionSliceDefault,
      RsvpSectionSliceVariation,
      RsvpSectionSlice,
      WelcomeSectionSliceDefaultPrimary,
      WelcomeSectionSliceDefault,
      WelcomeSectionSliceVariation,
      WelcomeSectionSlice,
    };
  }
}
