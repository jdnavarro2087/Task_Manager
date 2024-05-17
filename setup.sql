
CREATE TABLE IF NOT EXISTS task (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(120),
    summary TEXT,
    description TEXT,
    is_done BOOLEAN DEFAULT 0
);



INSERT INTO task (
    name,
    summary,
    description
) VALUES
(
    "Walk the dog",
    "Take fido out for a walk",
    "This task should last at least an hour"
),
(
    "Wash the car",
    "Drive the car to the car wash",
    "Make sure it gets waxed"
),
(
    "buy goceries",
    "Drive down to the gorcery store",
    "Buy milk, eggs, flour and newspaper"
);