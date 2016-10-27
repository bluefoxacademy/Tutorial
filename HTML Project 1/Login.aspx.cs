using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Test_Project
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var username = Request.QueryString["txtuser"].ToString();
            var password = Request.QueryString["txtpassword"].ToString();
            if(username=="satya" && password == "satya")
            {
                Response.Redirect("~/home.html");
            }
            else
            {
                Response.Redirect("~/error.html");
            }
        }
    }
}