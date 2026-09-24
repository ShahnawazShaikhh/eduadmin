namespace StudentAPI.Models
{
    public class Student
    {
        public int Id { get; set; }   // Changed from id → Id

        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Course { get; set; } = string.Empty;

        public int Age { get; set; }
    }
}
