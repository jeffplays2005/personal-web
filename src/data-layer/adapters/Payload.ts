import configPromise from "@payload-config"
import type { Payload } from "payload"
import { getPayload } from "payload"

const payloadConfig = await getPayload({
	config: configPromise,
})

export const payload: Payload = payloadConfig
