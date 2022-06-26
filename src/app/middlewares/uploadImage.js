import File from '../models/file';

export default async (req, res, next) => {
  if(req.file){  
    const { originalname, filename } = req.file;

    const image = await File.create({
      name: originalname,
      path: filename,
    });
  
    req.imageID = image.id;
  }
  
  return next();
};