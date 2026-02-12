/**
 * Event schema — arch.md §3
 * Fields: title, date, location, description, registrationLink
 */
export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
    },
  ],
  orderings: [
    {
      title: "Date (Upcoming)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
