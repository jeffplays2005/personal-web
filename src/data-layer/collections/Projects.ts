import type { CollectionConfig } from "payload"

export const Projects: CollectionConfig = {
	slug: "projects",
	fields: [
		{
			name: "title",
			type: "text",
			admin: {
				description: "The project's title",
			},
		},
		{
			name: "tags",
			type: "array",
			fields: [
				{
					name: "tag",
					type: "text",
				},
			],
		},
		{
			name: "date",
			type: "date",
			admin: {
				description: "The project's date",
			},
		},
		{
			name: "description",
			type: "richText",
			admin: {
				description: "The project's description",
			},
		},
		{
			name: "urls",
			interfaceName: "ProjectUrlGroup",
			type: "group",
			fields: [
				{
					name: "url",
					type: "text",
					admin: {
						description: "The project's URL",
					},
				},
				{
					name: "type",
					type: "select",
					interfaceName: "ProjectUrlType",
					options: [
						{ label: "Website", value: "website" },
						{ label: "GitHub", value: "github" },
						{ label: "Other", value: "other" },
					],
					admin: {
						description: "The type of URL",
					},
				},
			],
		},
	],
}
