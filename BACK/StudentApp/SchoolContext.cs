using Microsoft.EntityFrameworkCore;
using StudentApp.Model;

public class SchoolContext : DbContext
{
    public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
    {
    }

    // Definición de tablas
    public DbSet<Estudiante> Estudiantes { get; set; }
    public DbSet<Curso> Cursos { get; set; }

    // Opcional: Configuración adicional de la conexión a la base de datos si es necesario
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer("Server=mssql-184020-0.cloudclusters.net,10112;Database=bhd;User Id=admin;Password=Prueba123456;Encrypt=False;Trusted_Connection=False;");
        }
    }

    // Opcional: Definición adicional de las relaciones o restricciones
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configurar clave primaria para la entidad Curso
        modelBuilder.Entity<Curso>()
            .HasKey(c => c.IdCurso);

        // Configurar clave primaria para la entidad Estudiante
        modelBuilder.Entity<Estudiante>()
            .HasKey(e => e.IdEstudiante);

        // Relación entre Estudiante y Curso (clave foránea)
        //modelBuilder.Entity<Estudiante>()
          //  .HasOne(e => e.IdCurso)
            //.WithMany()
            //.HasForeignKey(e => e.IdCurso);
    }

}


