const Task = require('./model')

class TaskController {
    constructor() { }

    async create(req, res) {
        try {
            const task = await new Task(req.body).save();
            return res.status(200).json({ success: true, data: task, message: "New Task Created" });
        } catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    async list(req, res) {
        try {
            let list = await Task.find({ id: req.body.id })
            let count = await Task.find({ id: req.body.id }).countDocuments()
            let output = {
                list,
                count,
            }
            return res.status(200).json({ success: true, data: output, message: "Task Listed !" });
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    async update(req, res, next) {
        try {
            let task = await Task.findOne({ _id: req.body.id });
            let updates = Object.keys(req.body)
            updates.forEach((update) => task[update] = req.body[update])
            await task.save()
            res.status(200).send({ success: true, data: task, message: "Successfully Updated task Details " })
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    //soft delete
    async delete(req, res) {
        try {
            let remove = await Task.findOne(req.body.id)
            remove.deleted = true;
            await remove.save();
            return res.status(200).json({ success: true, data: remove, message: "task delete" })
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    //hard delete
    async delete(req, res) {
        try {
            await Task.deleteOne({ _id: req.body.id })
            return res.status(200).json({ success: true, message: "Task deleted permanently" });
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }
}

module.exports = TaskController