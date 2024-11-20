using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cursos.Models
{
    public class Curso
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public int AlunosMatriculados { get; set; }

        public int CargaHoraria { get; set; }
    }
}