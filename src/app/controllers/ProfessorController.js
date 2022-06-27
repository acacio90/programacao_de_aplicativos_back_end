import ProfessorModel from '../models/professor';
import File from '../models/file';

import fs from 'fs';
import path from 'path';
import * as argon2 from 'argon2';

class ProfessorController {
  async store(req, res) {
    const { username_professor,
        password_professor,
        turno_professor,
        access_professor,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor } =
      req.body;
    const { imageID } = req;

    const hash = await argon2.hash(password_professor);
    

    const Professor = await ProfessorModel.create({
        username_professor,
        password_professor: hash,
        access_professor,
        turno_professor,
        img_id: imageID,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor
    });

    return res.json(Professor);
  }

  async index(req, res) {
    const Professor = await ProfessorModel.findAll();
    return res.json(Professor);
  }

  async show(req, res) {
    const { id } = req.body;
    const Professor = await ProfessorModel.findOne({ 
      where: { id },
    });
    return res.json(Professor);
  }

  async destroy(req, res) {
    try {
      const { id } = req.body;
      const Professor = await ProfessorModel.findOne({ where: { id } });

      await Professor.destroy();
      if(!!Professor.img_id){
        const image = await File.findByPk(Professor.img_id);
        fs.unlinkSync(
          path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            'tmp',
            'imgUpload',
            image.path
          )
        );
        await image.destroy();
      }

      return res.json({ good: 'Destroyed' });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);    
    }
  }

  async update(req, res) {
    try {
      const {
        id,
        username_professor,
        password_professor,
        turno_professor,
        access_professor,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor
      } = req.body;
      const {imageID} = req;

      const Professor = await ProfessorModel.findOne({ where: { id } });
      const old_image_id = Professor.img_id;
      const hash = await argon2.hash(password_professor);
      var password = '';

      if(password_professor == ''){
        password = Professor.password_professor;
      }else{
        password = hash;
      }

      Professor.set({
        username_professor,
        password_professor: password,
        turno_professor,
        access_professor,
        img_id: imageID ? imageID : Professor.img_id,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor
      });
      
      await Professor.save();
      
      if(imageID && !!old_image_id){
        const oldImage = await File.findByPk(old_image_id);

        fs.unlinkSync(
          path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            'tmp',
            'imgUpload',
            oldImage.path
          )
        );

        await oldImage.destroy();
      }

      return res.json(Professor);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new ProfessorController();