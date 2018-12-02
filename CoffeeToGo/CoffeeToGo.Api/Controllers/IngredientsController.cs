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
    [Route("api/Ingredients")]
    public class IngredientsController : Controller
    {
        private readonly CoffeeToGoContext _context;

        public IngredientsController(CoffeeToGoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetIngredients()
        {
            var result = _context.Ingredient.Select(item => new Models.Ingredient()
            {
                IngredientId = item.IngredientId,
                Name = item.Name,
                Description = item.Description,
                RemainingUnits = item.RemainingUnits,
                UnitsInPack = item.UnitsInPack
            }).ToListAsync();

            return Ok(await result);
        }     
        
        [HttpGet("getbeverageingredients")]
        public async Task<ActionResult> GetBeverageIngredients()
        {
            var result = _context.BeverageIngredient.Select(item => new Models.BeverageIngredient()
            {
                BeverageId = item.BeverageId,
                IngredientId = item.IngredientId,
                Units = item.Units
            }).ToListAsync();

            return Ok(await result);
        }

        [HttpPost("packs")]
        public async Task<ActionResult> UpdateIngredientsInventory([FromBody] Models.IngredientPack[] packs)
        {
            foreach (var item in packs)
            {
                var ingredient = _context.Ingredient.FirstOrDefault(_ => _.IngredientId == item.IngredientId);
                ingredient.RemainingUnits = ingredient.RemainingUnits + (item.Count * ingredient.UnitsInPack);

                _context.Update(ingredient);
            }

            return Ok(await _context.SaveChangesAsync());
        }
    }
}