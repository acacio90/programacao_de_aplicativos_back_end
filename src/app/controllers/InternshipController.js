import Internship from '../models/internship';
import InternshipModel from '../models/internship';

class InternshipController {
  async store(req, res) {
    const { name_internship,
        ideal_period_internship,
        couser_internship,
        weekly_period_internship,
        email_internship,
        schedules_internship,
        number_vacancies_internship,
        description_internship,
        requirements_internship,
        remuneration_internship,
        remuneration_value_internship,
        professor_responsable_internship } =
      req.body;
    
    const Internship = await InternshipModel.create({
        name_internship,
        ideal_period_internship,
        couser_internship,
        weekly_period_internship,
        email_internship,
        schedules_internship,
        number_vacancies_internship,
        description_internship,
        requirements_internship,
        remuneration_internship,
        remuneration_value_internship,
        professor_responsable_internship,
    });

    return res.json(Internship);
  }

  async index(req, res) {

    const { flag } = req.body;

    const Internship = await InternshipModel.findAll({
      where: {
        remuneration_internship: flag
      },
    });
    return res.json(Internship);
  }

  async show(req, res) {
    const { id } = req.body;
    const Internship = await InternshipModel.findOne({ 
      where: { id },
    });
    return res.json(Internship);
  }

  async destroy(req, res) {
    try {
      const { id } = req.body;
      const Internship = await InternshipModel.findOne({ where: { id } });

      await Internship.destroy();
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
        name_internship,
        ideal_period_internship,
        couser_internship,
        weekly_period_internship,
        email_internship,
        schedules_internship,
        number_vacancies_internship,
        description_internship,
        requirements_internship,
        remuneration_internship,
        remuneration_value_internship,
        professor_responsable_internship
      } = req.body;

      const Internship = await InternshipModel.findOne({ where: { id } });
  
      Internship.set({
        name_internship,
        ideal_period_internship,
        couser_internship,
        weekly_period_internship,
        email_internship,
        schedules_internship,
        number_vacancies_internship,
        description_internship,
        requirements_internship,
        remuneration_internship,
        remuneration_value_internship,
        professor_responsable_internship,
      });
      
      await Internship.save();
      
      return res.json(Internship);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new InternshipController();