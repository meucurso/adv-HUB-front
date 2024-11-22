import NextAuth, { type DefaultSession, type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

const MICROSOFT_IMAGE_URL = "https://graph.microsoft.com/v1.0/me/photos"

const credentials = Credentials({
	credentials: {
		email: {},
		password: {},
	},
	async authorize({ email, password }) {
		const user = { email: "meucurso@gmail.com", password: "12345" }

		return user
	},
})

const microsoftEntraId = MicrosoftEntraID({
	clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
	clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
	issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
	profilePhotoSize: 120,

	async profile(profile, tokens) {
		const res = await fetch(
			`${MICROSOFT_IMAGE_URL}/${this.profilePhotoSize}x${this.profilePhotoSize}/$value`,
			{
				headers: { Authorization: `Bearer ${tokens.access_token}` },
			},
		)

		let image = ""

		if (res.ok && typeof Buffer !== "undefined") {
			try {
				const pictureBuffer = await res.arrayBuffer()
				const pictureBase64 = Buffer.from(pictureBuffer).toString("base64")
				image = `data:image/jpeg;base64, ${pictureBase64}`
			} catch {}
		}

		return {
			email: profile.email,
			id: profile.oid,
			image,
			name: profile.name,
		}
	},
})

export default {
	providers: [microsoftEntraId, credentials, Google],
} satisfies NextAuthConfig
