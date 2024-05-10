import { model, models, newSchema } from 'mongoose'

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: []
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema)

export default User