from api.models import db, Task, environment
from sqlalchemy.sql import text
from datetime import datetime

def seed_tasks():
  seed_tasks = [
    {
        "label": "Project Planning",
        "description": "Plan the project roadmap and milestones",
        "startTime": datetime(2024, 1, 20, 9, 0),
        "endTime": datetime(2024, 1, 20, 11, 0),
        "completed": False,
        "ownerId": 4
    },
    {
        "label": "Write Report",
        "description": "Prepare the weekly financial report",
        "startTime": datetime(2024, 1, 21, 10, 0),
        "endTime": datetime(2024, 1, 21, 12, 0),
        "completed": True,
        "ownerId": 5
    },
    {
        "label": "Team Meeting",
        "description": "Discuss project progress with the team",
        "startTime": datetime(2024, 1, 22, 14, 0),
        "endTime": datetime(2024, 1, 22, 15, 0),
        "completed": False,
        "ownerId": 2
    },
    {
        "label": "Code Review",
        "description": "Review the new code submissions",
        "startTime": datetime(2024, 1, 23, 16, 0),
        "endTime": datetime(2024, 1, 23, 18, 0),
        "completed": False,
        "ownerId": 1
    },
    {
        "label": "Client Presentation",
        "description": "Present the project proposal to the client",
        "startTime": datetime(2024, 1, 24, 13, 0),
        "endTime": datetime(2024, 1, 24, 14, 30),
        "completed": False,
        "ownerId": 3
    }
  ]

  tasks = Task.add_tasks(seed_tasks)
  new_tasks = [db.session.add(task) for task in tasks]
  db.session.commit()

def undo_tasks():
  if environment == "Production":
    db.session.execute(
      f"TRUNCATE table tasks RESTART IDENTITY CASCADE;")
  else:
    db.session.execute(text("DELETE FROM tasks"))

  db.session.commit()
