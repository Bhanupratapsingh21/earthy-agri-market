import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "./cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "user_profiles",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
        public_id: (req, file) => `profile_${Date.now()}`,
    },
});

const upload = multer({ storage });

export default upload;
