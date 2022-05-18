import ProfessorModel from '../models/professor';

class ProfessorController {
  async store(req, res) {
    const { username_professor,
        password_professor,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor } =
      req.body;
    
    const Professor = await ProfessorModel.create({
        username_professor,
        password_professor,
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
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor
      } = req.body;

      const Professor = await ProfessorModel.findOne({ where: { id } });
  
      Professor.set({
        username_professor,
        password_professor,
        course_professor,
        email_professor,
        contact_professor,
        city_professor,
        description_professor,
        status_professor
      });
      
      await Professor.save();
      
      return res.json(Professor);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new ProfessorController();