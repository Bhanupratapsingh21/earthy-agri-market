import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';

// Configure multer for memory storage
export const storage = multer.memoryStorage();

export const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
});

// Function to upload buffer to Cloudinary
export const uploadToCloudinary = (buffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'image',
        folder: options.folder || 'farmers-marketplace',
        transformation: [
          { width: 1000, height: 1000, crop: 'limit' },
          { quality: 'auto:good' },
          { format: 'auto' }
        ],
        ...options
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

// Middleware to handle single image upload
export const uploadSingleImageToCloudinary = (fieldName, folder = 'farmers-marketplace') => {
  return [
    upload.single(fieldName),
    async (req, res, next) => {
      try {
        if (!req.file) {
          return next();
        }

        const result = await uploadToCloudinary(req.file.buffer, {
          folder: folder,
          public_id: `${Date.now()}-${Math.round(Math.random() * 1E9)}`,
        });

        req.cloudinaryResult = {
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes
        };

        next();
      } catch (error) {
        next(error);
      }
    }
  ];
};

// Middleware to handle multiple images upload
export const uploadMultipleImagesToCloudinary = (fieldName, maxCount = 5, folder = 'farmers-marketplace') => {
  return [
    upload.array(fieldName, maxCount),
    async (req, res, next) => {
      try {
        if (!req.files || req.files.length === 0) {
          return next();
        }

        const uploadPromises = req.files.map(async (file, index) => {
          return await uploadToCloudinary(file.buffer, {
            folder: folder,
            public_id: `${Date.now()}-${index}-${Math.round(Math.random() * 1E9)}`,
          });
        });

        const results = await Promise.all(uploadPromises);

        req.cloudinaryResults = results.map(result => ({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes
        }));

        next();
      } catch (error) {
        next(error);
      }
    }
  ];
};

// Utility function for direct upload (can be used in controllers)
export  const directUploadToCloudinary = async (buffer, options = {}) => {
  try {
    const result = await uploadToCloudinary(buffer, options);
    return {
      success: true,
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to delete image from Cloudinary
export const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return {
      success: true,
      result: result.result
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};
