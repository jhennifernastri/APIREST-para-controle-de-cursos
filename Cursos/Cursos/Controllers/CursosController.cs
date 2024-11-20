using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Cursos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CursosController : ApiController
    {
        private readonly Repositories.SQLServer.Curso repositorioCurso;

        public CursosController()
        {
            this.repositorioCurso = new Repositories.SQLServer.Curso(Configurations.Database.getConnectionString());
        }


        [HttpGet]
        public IHttpActionResult Get()
        {
           
                return Ok(this.repositorioCurso.Select()); 
        }

        [HttpGet]
        public IHttpActionResult Get(int Id)
        {
            Models.Curso curso = this.repositorioCurso.Select(Id);
            if (curso == null)
                return NotFound();

            return Ok(curso);
        }

        [HttpGet]
        public IHttpActionResult Get(string Nome)
        {
            List<Models.Curso> curso = new List<Models.Curso>(this.repositorioCurso.Select(Nome));
            if (curso == null)
                return NotFound();

            return Ok(curso);
        }

        [HttpPost]
        public IHttpActionResult Post(Models.Curso curso)
        {
            if (!this.repositorioCurso.Insert(curso))
                return InternalServerError();

            return Ok("Curso cadastrado com sucesso!");

        }

        [HttpPut]
        public IHttpActionResult Put(int id, Models.Curso curso)
        {

            if (id != curso.Id)
                return BadRequest("O id da requisição não coincide com o Id do veiculo.");

            if (!this.repositorioCurso.Update(curso))
                return InternalServerError();

            return Ok(curso);
        }

        [HttpDelete]
        public IHttpActionResult Delete(int Id)
        {
            if (!this.repositorioCurso.Delete(Id))
                return NotFound();

            return Ok("Registro excluido com sucesso!");

        }
    }
}
