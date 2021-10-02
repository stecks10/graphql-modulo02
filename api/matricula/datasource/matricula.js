const { SQLDataSource } = require('datasource-sql');
const DataLoader = require('dataloader');

class MatriculasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig);
    this.Resposta = {
      mensagem: '',
    };
  }

  async matricularEstudante(ids) {
    const novaMatricula = {
      estudante_id: ids.estudante,
      turma_id: ids.turma,
      status: 'confirmado',
    };

    await this.db.insert(novaMatricula).into('matriculas');

    this.Resposta.mensagem = 'matrícula confirmada';
    return this.Resposta;
  }

  async getMatriculasPorTurma(idTurma) {
    const matriculas = await this.db
      .select('*')
      .from('matriculas')
      .where({ turma_id: idTurma });

    console.log(matriculas);
    return matriculas;
  }

  matriculasLoader = new DataLoader(this.getMatriculasPorEstudante.bind(this));

  async getMatriculasPorEstudante(idsEstudantes) {
    const matriculas = await this.db
      .select('*')
      .from('matriculas')
      .whereIn('estudante_id', idsEstudantes)
      .select();
    return matriculas;
  }

  async deletarMatricula(idMatricula) {
    await this.db('matricula')
      .where({ id: Number(idMatricula) })
      .del();

    this.Resposta.mensagem = 'registro deletado';
    return this.Resposta;
  }
}

module.exports = MatriculasAPI;
