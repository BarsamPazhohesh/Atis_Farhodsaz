#define testing

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using NSwag.AspNetCore;

namespace theApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

#if testing
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddOpenApiDocument(config =>
        {
            config.DocumentName = "TodoAPI";
            config.Title = "TodoAPI v1";
            config.Version = "v1";
        });
#endif

        var app = builder.Build();

#if testing
        if (app.Environment.IsDevelopment())
        {
            app.UseOpenApi();
            app.UseSwaggerUi(config =>
            {
                config.DocumentTitle = "TodoAPI";
                config.Path = "/swagger";
                config.DocumentPath = "/swagger/{documentName}/swagger.json";
                config.DocExpansion = "list";
            });
        }
#endif

        app.MapPost("/communications", async (string Authority) =>
        {
            if (string.IsNullOrEmpty(Authority))
            {
                return Results.BadRequest();
            }
            else
            {
                return Results.Ok();
            }
        });
        app.Run();
    }
}
