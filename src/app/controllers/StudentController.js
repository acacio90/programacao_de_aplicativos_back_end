import StudentModel from '../models/student';
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
        image_student,
        ra_student,
        period_student } =
      req.body;
    
    const hash = await argon2.hash(password_student);

    const Student = await StudentModel.create({
        username_student,
        password_student: hash,
        turno_student,
        access_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        image_student,
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
        username_student,
        password_student,
        turno_student,
        access_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        image_student,
        ra_student,
        period_student
      } = req.body;

      const Student = await StudentModel.findOne({ where: { username_student } });
      const hash = await argon2.hash(password_student);
  
      Student.set({
        username_student,
        password_student: hash,
        turno_student,
        access_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        image_student,
        ra_student,
        period_student
      });
      
      await Student.save();
      
      return res.json(Student);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new StudentController();