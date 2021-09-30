const { SQLDataSource } = require('datasource-sql');

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

  async getMatriculasPorEstudante(idEstudante) {
    const matriculas = await this.db
      .select('*')
      .from('matriculas')
      .where({ estudante_id: idEstudante });

    return matriculas;
  }
}

module.exports = MatriculasAPI;
