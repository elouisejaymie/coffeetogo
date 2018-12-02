using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeToGo.Api.Models
{
    public class Ingredient
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? RemainingUnits { get; set; }
        public int? UnitsInPack { get; set; }
    }
}
