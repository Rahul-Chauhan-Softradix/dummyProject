import aws from "aws-sdk"
const axios = require('axios');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

 const s3 = new aws.S3();

export const uploadToAws = async(data)=>{
const {file,folder,id} = data
const params = {
    Bucket:process.env.AWS_BUCKET,
  Key: `${folder}/${id}/${Date.now()}-renAthletics.${(file[0].originalname).split(".").pop()}`,
    Body: file[0].buffer,
    ACL: "public-read"
}

const result = await uploadFileToAWS(params);
return { image_link: result.Location };
}

export const uploadFileToAWS = async (params) =>
new Promise((resolve, reject) => {
  s3.upload(params, (err, response) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      resolve(response);
    }
  });
});