import StudentModel from '../models/student';

class StudentController {
  async store(req, res) {
    const { username_student,
        password_student,
        course_student,
        email_student,
        contact_student,
        city_student,
        description_student,
        image_student,
        ra_student,
        period_student } =
      req.body;
    
    const Student = await StudentModel.create({
        username_student,
        password_student,
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
        id,
        name_project,
        ideal_period_project,
        course_project,
        weekly_workload_project,
        email_project,
        schedules_project,
        number_vacancies_project,
        description_project,
        requirements_project,
        remuneration_project,
        remuneration_value_project,
        professor_responsable_project
      } = req.body;

      const Student = await StudentModel.findOne({ where: { id } });
  
      Student.set({
        name_project,
        ideal_period_project,
        course_project,
        weekly_workload_project,
        email_project,
        schedules_project,
        number_vacancies_project,
        description_project,
        requirements_project,
        remuneration_project,
        remuneration_value_project,
        professor_responsable_project
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