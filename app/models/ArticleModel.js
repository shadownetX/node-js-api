var mongoose = require('mongoose'),
    validators = require('mongoose-validators'),
    slug = require('mongoose-slug-generator'),
    Schema = mongoose.Schema;

mongoose.plugin(slug);

module.exports = mongoose.model('Articles', ArticleSchema);

var ArticleSchema = new Schema({
        title: {
            type: String,
            trim: true,
            maxlength: 255,
            unique: true
        },
        slug: {
            type: String,
            slug: 'title'
        },
        subtitle: {
            type: String,
            trim: true
        },
        content: String,
        status: {
            type: String,
            enum: ['pending', 'ongoing', 'completed', 'archived'],
            default: ['pending']
        },
        tags: [String],
        sources: [{
            name: {
                type: String,
                trim: true
            },
            url: {
                type: String,
                validate: validators.isURL()
            }
        }],
        views: Number,
        user: {
            name: String,
            profilelocation: {
                type: String,
                validate: validators.isURL()
            },
            avatarlocation: {
                type: String,
                validate: validators.isURL()
            },
            intro: {
                type: String,
                trime: true
            },
            socialnetworks: [{
                name: {
                    type: String,
                    enum: ['twitter', 'facebook', 'linkedin', 'googleplus', 'instagram']
                },
                url: {
                    type: String,
                    validate: validators.isURL()
                }
            }]
        }
    },
    {
        timestamps: true
    });