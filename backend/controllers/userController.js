import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export const getUser = (req, res) => {
    try {
        const user = await User.findOne({UID})
    }
}
