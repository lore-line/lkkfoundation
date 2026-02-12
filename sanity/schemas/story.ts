/**
 * Story schema — arch.md §3
 * Fields: name, role, content, image
 */
export default {
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: 'e.g. "Scholar, Class of 2023"',
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      description: "Testimonial or story text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
