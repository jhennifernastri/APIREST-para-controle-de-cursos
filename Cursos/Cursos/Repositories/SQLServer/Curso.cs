using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Cursos.Repositories.SQLServer
{
    public class Curso
    {

        private readonly SqlConnection _conn;
        private readonly SqlCommand _cmd;

        public Curso(string conn)
        {
            _conn = new SqlConnection(conn);
            _cmd = new SqlCommand();
            _cmd.Connection = _conn;
        }


        public List<Models.Curso> Select()
        {
            List<Models.Curso> cursos = new List<Models.Curso>();
            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = $"SELECT Id, Nome, AlunosMatriculados, CargaHoraria FROM Cursos;";

                    using (SqlDataReader dr = _cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            Models.Curso curso = new Models.Curso();

                            curso.Id = (int)dr["Id"];
                            curso.Nome = (string)dr["Nome"];
                            curso.AlunosMatriculados = (int)dr["AlunosMatriculados"];
                            curso.CargaHoraria = (int)dr["CargaHoraria"];

                            cursos.Add(curso);
                        }
                    }
                }
            }

            return (cursos);
        }

        public Models.Curso Select(int Id)
        {
            Models.Curso curso = null;

            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = $"SELECT Id, Nome, AlunosMatriculados, CargaHoraria FROM Cursos WHERE Id = @Id;";
                    _cmd.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = Id;

                    using (SqlDataReader dr = _cmd.ExecuteReader())
                    {
                        if (dr.Read())
                        {
                            curso = new Models.Curso();

                            curso.Id = (int)dr["Id"];
                            curso.Nome = (string)dr["Nome"];
                            curso.AlunosMatriculados = (int)dr["AlunosMatriculados"];
                            curso.CargaHoraria = (int)dr["CargaHoraria"];

                        }
                    }
                }
            }
            return curso;
        }

        public List<Models.Curso> Select(string Nome)
        {
            List<Models.Curso> cursos = new List<Models.Curso>();

            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = $"SELECT Id, Nome, AlunosMatriculados, CargaHoraria FROM Cursos WHERE Nome LIKE @Nome;";
                    _cmd.Parameters.Add(new SqlParameter("@Nome", SqlDbType.VarChar)).Value = $"%{Nome}%";

                    using (SqlDataReader dr = _cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            Models.Curso curso = new Models.Curso();

                            curso.Id = (int)dr["Id"];
                            curso.Nome = (string)dr["Nome"];
                            curso.AlunosMatriculados = (int)dr["AlunosMatriculados"];
                            curso.CargaHoraria = (int)dr["CargaHoraria"];

                            cursos.Add(curso);
                        }
                    }
                }
            }
            return cursos;
        }

        public bool Insert(Models.Curso curso)
        {
            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = "INSERT Cursos ( Nome, AlunosMatriculados, CargaHoraria) VALUES (@Nome, @AlunosMatriculados, @CargaHoraria);SELECT convert(INT,SCOPE_IDENTITY()) as Id";

                    _cmd.Parameters.Add(new SqlParameter("@Nome", SqlDbType.VarChar)).Value = curso.Nome;
                    _cmd.Parameters.Add(new SqlParameter("@AlunosMatriculados", SqlDbType.Int)).Value = curso.AlunosMatriculados;
                    _cmd.Parameters.Add(new SqlParameter("@CargaHoraria", SqlDbType.Int)).Value = curso.CargaHoraria;


                    curso.Id = (int)_cmd.ExecuteScalar();
                }

            }
            return curso.Id != 0 ? true : false;
        }

        public bool Update(Models.Curso curso)
        {

            int linhasAfetadas = 0;

            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = "UPDATE Cursos SET Nome = @Nome, AlunosMatriculados = @AlunosMatriculados, CargaHoraria = @CargaHoraria WHERE Id = @Id";

                    _cmd.Parameters.Add(new SqlParameter("@Nome", SqlDbType.VarChar)).Value = curso.Nome;
                    _cmd.Parameters.Add(new SqlParameter("@AlunosMatriculados", SqlDbType.Int)).Value = curso.AlunosMatriculados;
                    _cmd.Parameters.Add(new SqlParameter("@CargaHoraria", SqlDbType.Int)).Value = curso.CargaHoraria;
                    _cmd.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = curso.Id;

                    linhasAfetadas = _cmd.ExecuteNonQuery();
                }

            }
            return linhasAfetadas != 0;
        }

        public bool Delete(int Id)
        {
            int linhasAfetadas = 0;

            using (_conn)
            {
                _conn.Open();

                using (_cmd)
                {
                    _cmd.CommandText = "DELETE FROM Cursos WHERE Id = @Id";

                    _cmd.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = Id;

                    linhasAfetadas = _cmd.ExecuteNonQuery();
                }

            }
            return linhasAfetadas == 1;
        }

    }
}