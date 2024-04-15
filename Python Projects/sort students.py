class Student:
    def __init__(self, name, roll_number, cgpa):
        self.name = name
        self.roll_number = roll_number
        self.cgpa = cgpa

def sort_students(student_list):
    sorted_students = sorted(student_list, key=lambda student: student.cgpa, reverse=True)
    return sorted_students
    # Create a list of Student objects
students = [
    Student("Alice", "A001", 3.9),
    Student("Bob", "B002", 3.7),
    Student("Charlie", "C003", 3.5),
    Student("David", "D004", 4.0),
]

# Sort the students by CGPA in descending order
sorted_students = sort_students(students)

# Print the sorted list of students
for student in sorted_students:
    print(f"Name: {student.name}, Roll Number: {student.roll_number}, CGPA: {student.cgpa}")
    
