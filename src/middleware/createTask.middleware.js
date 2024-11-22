function createTaskMiddleware(req, res, next) {
    const { title } = req.body;

    // Check if title exists and validate length
    if (!title || title.length < 1) {
        return res.status(400).json({ message: "Title cannot be empty" });
    }

    // Check if title contains only blank spaces
    if (title.trim().length === 0) {
        return res.status(400).json({ message: "Title cannot contain only blank spaces" });
    }

    if (title.length > 100) {
        return res.status(400).json({ message: "Title must be less than 100 characters" });
    }

    req.body.title = title.trim();

    next();
}

module.exports = createTaskMiddleware;
