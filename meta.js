
module.exports = {
    helpers: {
      raw: options => options.fn(this)
    },
    skipInterpolation: [
      "**/*.vue",
      ".circleci/*.*"
    ],
    prompts: {
      name: {
        'type': 'string',
        'required': true,
        'message': 'NPM package name'
      },
      description: {
        'type': 'string',
        'message': 'Module description',
      },
      github: {
        'type': 'string',
        'message': 'Github repository (user/repo)'
      },
      author: {
        'type': 'string',
        'message': 'Author'
      },
    }
  };