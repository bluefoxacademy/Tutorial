using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AjaxDemo
{
    public partial class Search : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var key = Request.QueryString["searchKey"].ToString();
            if (key.StartsWith("asp"))
            {
                Response.Write("You searched for asp key..");
            }else if (key.StartsWith("c"))
            {
                Response.Write("You searched for csharp..");
            } else if (key.StartsWith("sql"))
            {
                Response.Write("You searched for sql...");
            }else
            {
                Response.Write("you search is invalid");
            }
            Response.End();
        }
    }
}