import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
    refreshToken: { type: String, required: true },
})

TokenSchema.index({ expiryDate: 1 }, { expireAfterSeconds: 0 })

export default mongoose.model("Token", TokenSchema)