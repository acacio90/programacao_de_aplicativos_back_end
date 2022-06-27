import ProfessorModel from '../models/professor';
import ProjectModel from '../models/project';

class ProjectController {
  async store(req, res) {
    const { name_project,
        turno_project,
        ideal_period_project,
        course_project,
        weekly_workload_project,
        email_project,
        schedules_project,
        number_vacancies_project,
        description_project,
        remuneration_project,
        requirements_project,
        remuneration_value_project,
        professor_responsable_project } =
      req.body;
    
    const Project = await ProjectModel.create({
        name_project,
        turno_project,
        ideal_period_project,
        course_project,
        weekly_workload_project,
        email_project,
        schedules_project,
        number_vacancies_project,
        description_project,
        remuneration_project,
        requirements_project,
        remuneration_value_project,
        professor_responsable_project
    });

    return res.json(Project);
  }

  async index(req, res) {
    const { flag } = req.body;

    if(flag == 2){
      const Project = await ProjectModel.findAll();
      return res.json(Project);
    }
    const Project = await ProjectModel.findAll({
      where: {
        remuneration_project: flag
      },
      include: [
        {
        model: ProfessorModel,
            as: 'professor_project',
            attributes: ['id', 'username_professor']
        }
      ]
    });
    return res.json(Project);
  }

  async indexProfessor(req, res) {
    const { id } = req.body;

    const Project = await ProjectModel.findAll({
      where: {
        professor_responsable_project: id
      },
    });
    return res.json(Project);
  }

  async show(req, res) {
    const { id } = req.body;
    const Project = await ProjectModel.findOne({ 
      where: { id },
    });
    return res.json(Project);
  }

  async destroy(req, res) {
    try {
      const { id } = req.body;
      const Project = await ProjectModel.findOne({ where: { id } });

      await Project.destroy();
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
        turno_project,
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

      const Project = await ProjectModel.findOne({ where: { id } });
  
      Project.set({
        name_project,
        turno_project,
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
      
      await Project.save();
      
      return res.json(Project);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new ProjectController();