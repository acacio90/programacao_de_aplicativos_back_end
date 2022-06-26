import CandidateModel from '../models/candidate';
import ProjectModel from '../models/project';
import Student from '../models/student';

class CandidateController {
  async store(req, res) {
    const { status_candidate, student_candidate, project_candidate } =
      req.body;
    
    const Candidate = await CandidateModel.create({
        status_candidate,
        student_candidate,
        project_candidate
    });
    return res.json(Candidate);
  }

  async index(req, res) {

    const { id } = req.body;

    const Candidate = await CandidateModel.findAll({
        where: {
          student_candidate: id
        },
        attributes: { 
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: ProjectModel,
            as: 'project',
          },
        ],
    });


    return res.json(Candidate);
  }

  async show(req, res) {
    const { id } = req.body;
    const Candidate = await CandidateModel.findOne({ 
      where: { id },
    });
    return res.json(Candidate);
  }

  async destroy(req, res) {
    try {
      const { id } = req.body;
      const Candidate = await CandidateModel.findOne({ where: { id } });

      await Candidate.destroy();
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
        status_candidate
      } = req.body;

      const Candidate = await CandidateModel.findOne({ where: { id } });
  
      Candidate.set({
        status_candidate
      });
      
      await Candidate.save();
      
      return res.json(Candidate);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
}

export default new CandidateController();