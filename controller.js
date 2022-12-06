const Task = require('./model')

class TaskController {
    constructor() { }

    async create(req, res) {
        const task = await new Task(req.body).save();
        return res.status(200).json({ success: true, data: task, message: "New Task Created" });
    }

    async list(req, res) {
        let list = await Task.find()
        let count = await Task.find().countDocuments()

        let output = {
            list,
            count,
        }
        return res.status(200).json({ success: true, data: output, message: "Task Listed !" });
    }

    async update(req, res, next) {
        let task = await Task.findOne({ _id: req.body.id });
        let updates = Object.keys(req.body)
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.status(200).send({ success: true, data: task, message: "Successfully Updated task Details " })
    }

    async delete(req, res) {
        let remove = await Task.findOne(req.body.id)
        remove.deleted = true;
        await remove.save();
        return res.status(200).json({ success: true, data: remove, message: "task delete" })
    }

}

module.exports = TaskController