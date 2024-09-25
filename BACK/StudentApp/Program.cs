using Microsoft.EntityFrameworkCore;
using StudentApp;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configura el DbContext para usar SQL Server
builder.Services.AddDbContext<SchoolContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Agrega el servicio de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()    // Permite cualquier origen
                  .AllowAnyMethod()    // Permite cualquier método HTTP (GET, POST, etc.)
                  .AllowAnyHeader();   // Permite cualquier encabezado
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Aplica la política de CORS
app.UseCors("AllowAll");

app.UseAuthorization();

// Mapea los controladores
app.MapControllers();

app.Run();
