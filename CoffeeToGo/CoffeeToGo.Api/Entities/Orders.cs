using System;
using System.Collections.Generic;

namespace CoffeeToGo.Api.Entities
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int BeverageId { get; set; }
        public string OrderedBy { get; set; }
        public string Notes { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateUpdated { get; set; }
        public Beverage Beverage { get; set; }
    }
}
