const ci = require('miniprogram-ci')

const projectConfig = require('./project.config.json')

const project = new ci.Project({
    appid: projectConfig.appid,
    type: 'miniProgram',
    projectPath: projectConfig.miniprogramRoot,
    privateKeyPath: './ci-private.key',
    ignores: ['node_modules/**/*'],
});


/** 上传 */
async function upload({version = '0.0.0', desc ='test'}) {
  await ci.upload({
      project,
      version,
      desc,
      setting: {
          es7: true,
          minify: true,
          autoPrefixWXSS: true
      },
      onProgressUpdate: console.log,
    })
}

upload({version: '0.0.1', desc: '测试'})