using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Services;
using MANDAT.Common.Features.PasswordHashing;
using MANDAT.DataAccess;
using MANDATWebApp.Code.ExtensionMethods;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;




var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MentalHealthFrontApp", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer"
    });
    c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
});

//database conexion

/*string conexiuneString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<MANDATContext>(
     options =>
     {
         options.UseSqlServer(conexiuneString);
     });

*/
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddDbContext<MANDATContext>();
builder.Services.AddScoped<UnitOfWork>();
builder.Services.AddPresentation();
builder.Services.AddMANDATAppCurrentUser();

//services here


///

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
