import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
    refreshToken: { type: String, required: true },
    fingerprint: { type: String, required: true },
    expiryDate: { type: Date, required: true }
})

TokenSchema.index({ expiryDate: 1 }, { expireAfterSeconds: 0 })

export default mongoose.model("Token", TokenSchema)