import { Blog } from "../db/models/blog.js";

export const insert = (req, res) => {
  const blog = new Blog({ ...req.body, ip: req.connection.remoteAddress });

  blog.save().then((results) =>
    res.send({
      method: "POST",
      results,
    })
  );
};

export const findByID = (req, res) =>
  Blog.findById(req.params._id).then((result) => res.send(result));

export const readAll = (_req, res) =>
  Blog.find().then((results) =>
    res.send({
      method: "GET",
      length: results.length,
      results,
    })
  );

export const updateByID = (req, res) => {
  res.send(req.params._id);
  Blog.findByIdAndUpdate(req.params._id, req.body).then((result) =>
    res.send(result)
  );
};

export const deleteByID = (req, res) =>
  Blog.findByIdAndDelete(req.params._id).then((result) => res.send(result));
