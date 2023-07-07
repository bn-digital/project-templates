import type { Attribute, Schema } from "@strapi/strapi"

export interface DataEntry extends Schema.Component {
  collectionName: "components_data_entries"
  info: {
    displayName: "Entry"
    icon: "clipboard-list"
    description: ""
  }
  attributes: {
    key: Attribute.String
    value: Attribute.Text & Attribute.Required
  }
}

export interface DataSet extends Schema.Component {
  collectionName: "components_data_sets"
  info: {
    displayName: "Set"
    icon: "align-justify"
  }
  attributes: {
    value: Attribute.String & Attribute.Required
  }
}

export interface UiCard extends Schema.Component {
  collectionName: "components_ui_cards"
  info: {
    displayName: "Card"
    icon: "address-card"
    description: ""
  }
  attributes: {
    title: Attribute.String
    subtitle: Attribute.String
    description: Attribute.Text
    media: Attribute.Media
  }
}

export interface UiGrid extends Schema.Component {
  collectionName: "components_ui_grids"
  info: {
    displayName: "Grid"
    icon: "table"
    description: ""
  }
  attributes: {
    visible: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
    children: Attribute.Component<"data.entry", true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1
      }>
  }
}

export interface UiHeadline extends Schema.Component {
  collectionName: "components_ui_headlines"
  info: {
    displayName: "Headline"
    icon: "heading"
    description: ""
  }
  attributes: {
    title: Attribute.Text
    subtitle: Attribute.Text
  }
}

export interface UiLink extends Schema.Component {
  collectionName: "components_ui_links"
  info: {
    displayName: "Link"
    icon: "link"
    description: ""
  }
  attributes: {
    url: Attribute.String & Attribute.Required
    title: Attribute.String
    target: Attribute.Enumeration<["blank", "self", "parent", "top"]> & Attribute.Required & Attribute.DefaultTo<"self">
    icon: Attribute.String & Attribute.CustomField<"plugin::react-icons.icon">
  }
}

export interface UiParagraph extends Schema.Component {
  collectionName: "components_ui_paragraphs"
  info: {
    displayName: "Paragraph"
    icon: "envelope-open-text"
  }
  attributes: {
    value: Attribute.RichText & Attribute.Required
  }
}

export interface UiSection extends Schema.Component {
  collectionName: "components_ui_sections"
  info: {
    displayName: "Section"
    icon: "pager"
    description: ""
  }
  attributes: {
    visible: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
    heading: Attribute.Component<"ui.card">
    button: Attribute.Component<"ui.link">
  }
}

export interface UiTab extends Schema.Component {
  collectionName: "components_ui_tabs"
  info: {
    displayName: "Tab"
    icon: "clone"
    description: ""
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    pane: Attribute.Component<"ui.card"> & Attribute.Required
  }
}

export interface UiText extends Schema.Component {
  collectionName: "components_ui_texts"
  info: {
    displayName: "Text"
    icon: "indent"
    description: ""
  }
  attributes: {
    visible: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
    children: Attribute.Component<"ui.paragraph", true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1
      }>
  }
}

declare module "@strapi/strapi" {
  export namespace Shared {
    export interface Components {
      "data.entry": DataEntry
      "data.set": DataSet
      "ui.card": UiCard
      "ui.grid": UiGrid
      "ui.headline": UiHeadline
      "ui.link": UiLink
      "ui.paragraph": UiParagraph
      "ui.section": UiSection
      "ui.tab": UiTab
      "ui.text": UiText
    }
  }
}
