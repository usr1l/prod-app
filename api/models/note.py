from . import db, environment
from datetime import datetime


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    last_edit = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    owner = db.relationship("User", back_populates="notes", single_parent=True)

    @classmethod
    def add_notes(cls, notes):
        if isinstance(notes, list):
            new_notes = [
                cls(
                    title=note["title"],
                    content=note["content"],
                    owner_id=note["ownerId"]
                ) for note in notes
            ]

        if isinstance(notes, dict):
            new_notes = cls(
                title=notes["title"],
                content=notes["content"],
                owner_id=notes["ownerId"]
            )

        return new_notes if new_notes else None

    def to_safe_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "usersId": self.owner_id,
            "createdAt": self.created_at,
            "lastEdit": self.last_edit
        }

    def __repr__(self):
        return f"<Note {self.id}: {self.title}, Owner: {self.owner_id}>"
