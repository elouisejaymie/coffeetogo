using System;
using System.Collections.Generic;

namespace CoffeeToGo.Api.Entities
{
    public partial class Beverage
    {
        public Beverage()
        {
            BeverageIngredient = new HashSet<BeverageIngredient>();
            Orders = new HashSet<Orders>();
        }

        public int BeverageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateUpdated { get; set; }

        public ICollection<BeverageIngredient> BeverageIngredient { get; set; }
        public ICollection<Orders> Orders { get; set; }
    }
}
