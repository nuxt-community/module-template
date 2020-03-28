
module.exports = {
    helpers: {
      raw: options => options.fn(this)
    },
    skipInterpolation: [
      "**/*.vue",
      ".github/workflows/*.*"
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
    },
    completeMessage: '{{#inPlace}}To get started:\n\n npm install # Or yarn{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn{{/inPlace}}'
  };