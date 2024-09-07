import { Schema, model, models } from "mongoose";

const imageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

const Image = models.Image || model("Image", imageSchema);

export default Image;
