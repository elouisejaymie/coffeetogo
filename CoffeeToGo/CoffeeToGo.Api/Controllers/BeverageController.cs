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
    [Route("api/Beverages")]
    public class BeveragesController : Controller
    {
        private readonly CoffeeToGoContext _context;

        public BeveragesController(CoffeeToGoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetBeverages()
        {
            var result = _context.Beverage.Select(item => new Models.Beverage()
            {
                BeverageId = item.BeverageId,
                Name = item.Name
            }).ToListAsync();

            return Ok(await result);
        }
    }
}
