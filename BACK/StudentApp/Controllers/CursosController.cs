using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApp.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : ControllerBase
    {
        private readonly SchoolContext _context;

        public CursosController(SchoolContext context)
        {
            _context = context;
        }

        // GET: api/Cursos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso>>> GetCursos()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/Cursos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Curso>> GetCursoById(int id)
        {
            var cursos = await _context.Cursos.FindAsync(id);

            if (cursos == null)
            {
                return NotFound();
            }

            return cursos;
        }

        // POST: api/Cursos
        [HttpPost]
        public async Task<ActionResult<Curso>> AddCurso(Curso cursos)
        {
            // Validate input fields
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Cursos.Add(cursos);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCursoById), new { id = cursos.IdCurso }, cursos);
        }

        // PUT: api/Cursos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCurso(int id, Curso cursos)
        {
            if (id != cursos.IdCurso)
            {
                return BadRequest();
            }

            // Validate input fields
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(cursos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Cursos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {
            var cursos = await _context.Cursos.FindAsync(id);
            if (cursos == null)
            {
                return NotFound();
            }

            _context.Cursos.Remove(cursos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursosExists(int id)
        {
            return _context.Estudiantes.Any(e => e.IdCurso == id);
        }
    }
}
