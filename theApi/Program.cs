
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using NSwag.AspNetCore;

namespace theApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);


        var app = builder.Build();


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
