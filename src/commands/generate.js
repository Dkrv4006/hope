module.exports = {
  name: 'generate',
  description: 'alo vc',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    if(!parameters.first){
      error("Escreva o nome do seu component");
      return
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `src/component/${parameters.first}/index.js`,
      props: {name: parameters.first},

    })

    await template.generate({
      template: 'style.js.ejs',
      target: `src/component/${parameters.first}/style.ts`,
      props: {name: parameters.first},

    })
    success(`Generated file at models/${parameters.first}-model.js`)
  },
}
