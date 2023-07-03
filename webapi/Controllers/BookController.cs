using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.Http;
using System.Text.Json;
using webapi.Model;

namespace webapi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookController : ControllerBase
{

    private readonly HttpClient _httpClient;

    public BookController() {
        _httpClient = new HttpClient();
    }

  

    // get books list from https://www.googleapis.com/books/v1/volumes?q=trees
    [HttpGet]
    public async Task<IActionResult> GetAllBooks() {
        string apiUrl = "https://www.googleapis.com/books/v1/volumes?q=trees";
        HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);
        response.EnsureSuccessStatusCode();
        string responseContent = await response.Content.ReadAsStringAsync();
        var bookData = JsonSerializer.Deserialize<dynamic>(responseContent);
        var items = bookData.GetProperty("items");

        List<Book> filteredBooks = new List<Book>();

        foreach (var item in items.EnumerateArray())
        {


            string thumbnail = "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=128";
            try
            {
                thumbnail = item.GetProperty("volumeInfo").GetProperty("imageLinks").GetProperty("thumbnail").GetString();
            }
            catch (KeyNotFoundException)
            {
                
            }




            var book = new Book
            {
                ID = item.GetProperty("id").GetString(),
                Title = item.GetProperty("volumeInfo").GetProperty("title").GetString(),
                Author = item.GetProperty("volumeInfo").GetProperty("authors")[0].GetString(),
                PublishedDate = item.GetProperty("volumeInfo").GetProperty("publishedDate").GetString(),
                Thumbnail = thumbnail,
                                         
            };

            filteredBooks.Add(book);
        }

        return Ok(filteredBooks);
    }
    private readonly ILogger<BookController> _logger;
  }
 