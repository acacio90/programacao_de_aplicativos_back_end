import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

// MODELS
import StudentModel from '../models/student';

class SessionStudentController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      });
      // Check body of requisiton
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Falha na validação!' });
      }
      
      const { email, password } = req.body;

      const Student = await StudentModel.findOne({ 
        where: { email_student: email }
       });

      if (!Student) {
        return res.status(403).json({ error: 'Email Inválido!' });
      }

      if (!(await Student.checkPassword(password))) {
        return res.status(403).json({ error: 'Senha Incorreta!' });
      }
      const id = Student.id;
      return res.status(200).json({
        id,
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new SessionStudentController();