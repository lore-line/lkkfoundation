/**
 * Program schema — arch.md §3
 * Fields: title, slug, pillar (ref), status, summary, fullDescription,
 *         impactBullets, gallery, CTA links
 */
export default {
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "pillar",
      title: "Pillar",
      type: "reference",
      to: [{ type: "pillar" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "Active" },
          { title: "Upcoming", value: "Upcoming" },
          { title: "Planned", value: "Planned" },
        ],
      },
      initialValue: "Active",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "impactBullets",
      title: "Impact Bullets",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "ctaLinks",
      title: "CTA Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    },
  ],
};
