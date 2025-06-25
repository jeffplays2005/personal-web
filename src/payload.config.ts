import path from "node:path"
import { fileURLToPath } from "node:url"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"
import { Media } from "./data-layer/collections/Media"
import { Projects } from "./data-layer/collections/Projects"
import { Users } from "./data-layer/collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			importMapFile: `${path.resolve(dirname)}/app/payload/admin/importMap.js`,
			baseDir: path.resolve(dirname),
		},
	},
	routes: {
		admin: "/payload/admin",
		api: "/payload/api",
	},
	graphQL: {
		disable: true,
	},
	collections: [Users, Media, Projects],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
	sharp,
	plugins: [
		// storage-adapter-placeholder
	],
})
