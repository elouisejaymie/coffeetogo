using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeToGo.Api.Models
{
    public class BeverageIngredient
    {
        public int BeverageId { get; set; }
        public int IngredientId { get; set; }
        public int Units { get; set; }
    }
}
