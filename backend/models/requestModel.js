import mongoose, { Schema, model, Types } from "mongoose";

const schema = new Schema(
    {
        status: {
            type: String,
            default: "pending",
            enum: ["pending", "accepted", "rejected"],
        },

        sender: {
            type: Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
        receiver: {
            type: Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Request = mongoose.models.Request || model("Request", schema);