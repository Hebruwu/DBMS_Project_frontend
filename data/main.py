"""
A script that is responsible for creating database tables that are required for the
DBMS project. The two primary tables that this script will create are
"""
from typing import List

from faker import Faker

import csv

import random

MAJORS_LIST = [
    'Accounting',
    'ACIS',
    'Advertising',
    'Aerospace Engineering',
    'Agribusiness',
    'Agricultural Sciences',
    'Animal and Poultry Sciences',
    'Arabic',
    'Architecture',
    'Art History',
    'Biochemistry',
    'Biological Sciences',
    'BSE',
    'Biomedical Engineering',
    'Building Construction',
    'BIT',
    'Business (undecided)',
    'CTE',
    'Chemical Engineering',
    'Chemistry',
    'Cinema',
    'Civil Engineering',
    'Classical Studies',
    'Clinical Neuroscience',
    'Communication',
    'CMDA',
    'Computer Engineering',
    'Computer Science',
    'Construction Engineering',
    'Consumer Studies',
    'Creative Technologies',
    'Creative Writing',
    'Criminology',
    'Crop and Soil Sciences',
    'Cybersecurity',
    'Dairy Science',
    'Early Childhood Development',
    'Ecological Restoration',
    'Economics',
    'Electrical Engineering',
    'Elementary Education (PK-6)',
    'English',
    'English Education',
    'Entrepreneurship',
    'Environmental Conservation',
    'Environmental Data Science',
    'Environmental Horticulture',
    'Environmental Policy',
    'Environmental Resources',
    'Environmental Science',
    'Exercise & Health Sciences',
    'Experimental Neuroscience',
    'Explore Science (undecided)',
    'Fashion',
    'Finance',
    'Finance and Real Estate',
    'Financial Planning',
    'Fish Conservation',
    'FST',
    'Forestry',
    'French',
    'General Engineering',
    'Geography',
    'Geosciences',
    'German',
    'Graphic Design',
    'History',
    'Hospitality',
    'Human Development',
    'ISE',
    'Industrial Design',
    'Interior Design',
    'International Public Policy',
    'International Relations',
    'International Studies',
    'Landscape Architecture',
    'Management',
    'Marketing Management',
    'MSE',
    'Mathematics',
    'Mathematics Education',
    'Mechanical Engineering',
    'Medicinal Chemistry',
    'Meteorology',
    'Microbiology',
    'Mining Engineering',
    'Multimedia Journalism',
    'Music',
    'Nanomedicine',
    'Nanoscience',
    'NSFA',
    'Nutrition and Dietetics',
    'Ocean Engineering',
    'Packaging',
    'Philosophy',
    'PPE',
    'Physics',
    'Plant Science',
    'Political Science',
    'Polymer Chemistry',
    'Technical Writing',
    'Property Management',
    'Psychology',
    'Public Health',
    'Public Relations',
    'Real Estate',
    'Religion and Culture',
    'Russian',
    'Smart and Sustainable Cities',
    'Sociology',
    'Spanish',
    'Sports Media and Analytics',
    'Statistics',
    'Studio Art',
    'Sustainable Biomaterials',
    'Systems Biology',
    'Theatre Arts',
    'University Studies',
    'Wildlife Conservation'
]


def generate_student_table(num_students: int = 1000) -> List[List[str]]:
    """
    Generate a student's table as a list of lists. Each sublist represents a row in
    the table.

    :return: A list of student rows.
    """
    generator = Faker('en_US')
    students: List[List[str]] = []

    for i in range(num_students):
        SID = i + 1
        Gender = random.choice(['O', 'F', 'M'])
        Name = generator.name()
        Email: str = generator.email(safe=True, domain="vt.edu")
        Username = Email.split(sep='@')[0]
        Password = generator.password()
        Race = random.choice(["White",
                              "Black",
                              "Hispanic",
                              "Native American",
                              "Asian",
                              "Pacific Islander",
                              "Mixed",
                              "Other"])
        Department = None  # Left as None until we decide how to utilize it.
        Major = random.choice(MAJORS_LIST)
        Citizenship = random.choice(["Int.", "Domestic"])
        Year = random.choice(["Freshman", "Sophomore", "Junior", "Senior"])

        student = [SID, Race, Gender, Department, Major, Name, Username, Password, Email, Citizenship, Year]

        students.append(student)

    return students


def generate_admin_table(num_admins: int = 100) -> List[List[str]]:
    """
    Generate an administrator's table as a list of lists. Each sublist represents a row
    in the table.

    :return: A list of Administrator rows.
    """

    admins: List[List[str]] = [
        ["AID", "Name", "Username", "Password", "Email"]
    ]
    generator = Faker('en_US')
    for i in range(num_admins):
        AID = i + 1
        Name = generator.name()
        Email = generator.email(safe=True, domain="vt.edu")
        Username = Email.split(sep='@')[0]
        Password = generator.password()

        admin = [AID, Name, Username, Password, Email]

        admins.append(admin)

    return admins


def main() -> None:
    """
    Orchestrate the process of creating the database tables.

    :return: None
    """

    students_table = generate_student_table()

    with open("students.csv", "w") as f:
        writer = csv.writer(f)
        writer.writerows(students_table)

    del students_table  # In case we want a really large tables, need to clear memory.

    admins = generate_admin_table()

    with open("admins.csv", "w") as f:
        writer = csv.writer(f)
        writer.writerows(admins)

    del admins


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    main()
