using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeToGo.Api.Models
{
    public class OrderSummary
    {
        public string Beverage { get; set; }
        public int Quantity { get; set; }
    }
}
