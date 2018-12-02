using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace CoffeeToGo.Api.Models
{
    public class Order
    {
        public int BeverageId { get;set; }
        
        public string OrderedBy { get;set; }

        public string Notes { get;set; }
        public DateTimeOffset DateCreated { get; set; }

        public string Beverage { get; set; }
    }
}
