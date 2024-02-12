from . import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Task(db.Model):
    __tablename__ = 'tasks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    owner = db.relationship("User", back_populates="tasks", single_parent=True)

    @classmethod
    def add_tasks(cls, tasks):
        if isinstance(tasks, list):
            new_tasks = [
                cls(
                    label=task["label"],
                    description=task["description"],
                    start_time=task["startTime"],
                    end_time=task["endTime"],
                    completed=task["completed"],
                    owner_id=task["ownerId"]
                ) for task in tasks
            ]

        if isinstance(tasks, dict):
            new_tasks = cls(
                label=tasks["label"],
                description=tasks["description"],
                start_time=tasks["startTime"],
                end_time=tasks["endTime"],
                completed=tasks["completed"],
                owner_id=tasks["ownerId"]
            )

        return new_tasks if new_tasks else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "label": self.label,
            "description": self.description,
            "startTime": self.start_time,
            "endTime": self.end_time,
            "completed": self.completed,
            "ownerId": self.owner_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<Task {self.id}: {self.label}, Owner: {self.owner_id}>"
