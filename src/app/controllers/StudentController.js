import StudentModel from '../models/student';
import File from '../models/file';

import fs from 'fs';
import path from 'path';
import * as argon2 from 'argon2';

class StudentController {
  async store(req, res) {
    const { username_student,
        password_student,
        turno_student,
        access_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        ra_student,
        period_student } =
      req.body;

    const { imageID } = req;
    
    const hash = await argon2.hash(password_student);

    const Student = await StudentModel.create({
        username_student,
        password_student: hash,
        turno_student,
        access_student,
        img_id: imageID,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        ra_student,
        period_student
    });

    return res.json(Student);
  }

  async index(req, res) {
    const Student = await StudentModel.findAll();
    return res.json(Student);
  }

  async show(req, res) {
    const { id } = req.body;
    const Student = await StudentModel.findOne({ 
      where: { id },
      include: [
        {
          model: File,
          as: 'img',
        },
      ],
    });
    return res.json(Student);
  }

  async destroy(req, res) {
    try {
      const { id } = req.body;
      const Student = await StudentModel.findOne({ where: { id } });

      await Student.destroy();
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
        username_student,
        password_student,
        turno_student,
        access_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        ra_student,
        period_student
      } = req.body;
      const {imageID} = req;

      const Student = await StudentModel.findOne({ where: { id } });
      const old_image_id = Student.img_id;
      const hash = await argon2.hash(password_student);
      var password = '';

      if(password_student == ''){
        password = Student.password_student;
      }else{
        password = hash;
      }
  
      Student.set({
        username_student,
        password_student: password,
        turno_student,
        access_student,
        img_id: imageID ? imageID : Student.img_id,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        ra_student,
        period_student
      });
      
      await Student.save();

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
      
      return res.json(Student);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new StudentController();