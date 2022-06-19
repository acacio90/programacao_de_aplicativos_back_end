import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

// MODELS
import StudentModel from '../models/student';

class SessionStudentController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
      });
      // Check body of requisiton
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Falha na validação!' });
      }
      
      const { username, password } = req.body;

      const Student = await StudentModel.findOne({ 
        where: { username_student: username }
       });

      if (!Student) {
        return res.status(403).json({ error: 'Username Inválido!' });
      }

      if (!(await Student.checkPassword(password))) {
        return res.status(403).json({ error: 'Senha Incorreta!' });
      }

      return res.status(200).json({
        username,
        token: jwt.sign({ username }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new SessionStudentController();