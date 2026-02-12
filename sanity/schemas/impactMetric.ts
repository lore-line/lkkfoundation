/**
 * ImpactMetric schema — arch.md §3
 * Fields: label, value, timeframe, description
 */
export default {
  name: "impactMetric",
  title: "Impact Metric",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "value",
      title: "Value",
      type: "string",
      description: 'Display value (e.g. "200+", "₱5M+")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "timeframe",
      title: "Timeframe",
      type: "string",
      description: 'e.g. "2023", "Since 2010"',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
