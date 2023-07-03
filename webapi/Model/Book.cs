using static System.Net.WebRequestMethods;

namespace webapi.Model
{
    public class Book
    {
        public string? ID { get; set; }
        public string? Title { get; set; }
        public string? Author { get; set; }
        public string? PublishedDate { get; set; }
        public string? Thumbnail { get; set; } = "https://yt3.ggpht.com/-DgUSn7-Wiaw/AAAAAAAAAAI/AAAAAAAAAAA/v0rHp0b1S1k/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";

    }
}
    