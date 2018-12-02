using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoffeeToGo.Api.Entities;

namespace CoffeeToGo.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Orders")]
    public class OrdersController : Controller
    {
        private readonly CoffeeToGoContext _context;

        public OrdersController(CoffeeToGoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetOrders()
        {
            var result = _context.Orders.Include(_ => _.Beverage).Select(item => new Models.Order()
            {
                BeverageId = item.BeverageId,
                OrderedBy = item.OrderedBy,
                Notes = item.OrderedBy,
                Beverage = item.Beverage.Name,
                DateCreated = item.DateCreated
            }).OrderByDescending(_ => _.DateCreated).ToListAsync();

            return Ok(await result);
        }

        [HttpGet("getorderdistribution")]
        public async Task<ActionResult> GetOrderDistribution()
        {
            var result = _context.Orders.Include(_ => _.Beverage).GroupBy(_ => _.Beverage).Select(item => new Models.OrderSummary()
            {
                Beverage = item.Key.Name,
                Quantity = item.Count()
            }).ToListAsync();

            return Ok(await result);
        }

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> SaveOrders([FromBody] Models.Order[] orders)
        {
            foreach (var order in orders)
            {
                var newOrder = new Orders();
                newOrder.BeverageId = order.BeverageId;
                newOrder.OrderedBy = order.OrderedBy;
                newOrder.DateCreated = DateTimeOffset.UtcNow;
                newOrder.DateUpdated = DateTimeOffset.UtcNow;
                newOrder.Notes = order.Notes;
                
                // add to the new orders
                _context.Orders.Add(newOrder);

                // update inventory by subtracting units
                var bis = _context.BeverageIngredient.Include("Ingredient").Where((bi) => bi.BeverageId == order.BeverageId);

                foreach (var bi in bis)
                {
                    bi.Ingredient.RemainingUnits = bi.Ingredient.RemainingUnits - bi.Units;

                    _context.Ingredient.Update(bi.Ingredient);
                }
            }
            await _context.SaveChangesAsync();

            return Ok();
        }
        
    }
}