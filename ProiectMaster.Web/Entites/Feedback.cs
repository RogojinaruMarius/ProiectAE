using System;
using System.Collections.Generic;

#nullable disable

namespace ProiectMaster.Web.Entites
{
    public partial class Feedback
    {
        public int Id { get; set; }
        public string CommentTitle { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public int ProductId { get; set; }
        public Guid? UserId { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
