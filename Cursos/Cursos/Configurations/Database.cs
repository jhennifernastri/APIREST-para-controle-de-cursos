﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cursos.Configurations
{
    public class Database
    {

        public static string getConnectionString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["escola"].ConnectionString;
        }

    }
}