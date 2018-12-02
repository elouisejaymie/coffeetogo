using System;
using System.Collections.Generic;

namespace CoffeeToGo.Api.Entities
{
    public partial class BeverageIngredient
    {
        public int BeverageId { get; set; }
        public int IngredientId { get; set; }
        public int Units { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateUpdated { get; set; }

        public Beverage Beverage { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}
