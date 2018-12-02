using System;
using System.Collections.Generic;

namespace CoffeeToGo.Api.Entities
{
    public partial class Ingredient
    {
        public Ingredient()
        {
            BeverageIngredient = new HashSet<BeverageIngredient>();
        }

        public int IngredientId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? RemainingUnits { get; set; }
        public int? UnitsInPack { get; set; }
        public DateTimeOffset DateUpdated { get; set; }
        public DateTimeOffset DateCreated { get; set; }

        public ICollection<BeverageIngredient> BeverageIngredient { get; set; }
    }
}
