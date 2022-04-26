import { Schema, model } from "mongoose";

export type IRecordStore = {
    title: String;
    artist: String;
    format: String;
    yearPublished: Number;
    new?: Boolean;
}

const RecordStoreSchema = new Schema<IRecordStore>({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    format: { type: String, required: true },
    yearPublished: { type: Number, required: true },
    new: { type: Boolean, required: true, default: true },
},
{ versionKey: false });

export const RecordStoreModel = model<IRecordStore>('RecordStore', RecordStoreSchema);

