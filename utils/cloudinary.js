const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");

dotenv.config();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;

// Node.js Cloudinary Setup
// npm install cloudinary

// Copy
// import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dk6awa4ko', 
//   api_key: '676755299823315', 
//   api_secret: '***************************' 
// });


//React.js Cloudinary Setup
// npm i @cloudinary/url-gen @cloudinary/react

// Copy
// import {Cloudinary} from "@cloudinary/url-gen";

// const App = () => {
//   const cld = new Cloudinary({cloud: {cloudName: 'dk6awa4ko'}});
// };

// Cloudinary 
// Cloud Name: dk6awa4ko
// API Key: 676755299823315
// API Secret: Pj5pClY_asUPWM65VQIzLX2-Hhg
// API Environment variable: CLOUDINARY_URL=cloudinary://676755299823315:Pj5pClY_asUPWM65VQIzLX2-Hhg@dk6awa4ko