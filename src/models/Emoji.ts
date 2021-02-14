import { Schema, model, Types, Document } from "mongoose";

export interface Emoji extends Document {
	id: bigint;
	animated: boolean;
	available: boolean;
	guild_id: bigint;
	managed: boolean;
	name: string;
	require_colons: boolean;
	url: string;
	roles: bigint[]; // roles this emoji is whitelisted to
}

export const EmojiSchema = new Schema({
	id: Types.Long,
	animated: Boolean,
	available: Boolean,
	guild_id: Types.Long,
	managed: Boolean,
	name: String,
	require_colons: Boolean,
	url: String,
	roles: [Types.Long],
});

export const EmojiModel = model<Emoji>("Emoji", EmojiSchema, "emojis");