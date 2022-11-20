const { Compilation } = require('webpack');
const { ConcatSource } = require("webpack-sources");
const path = require('path');

const PLUGIN_NAME = 'TampermonkeyHeaderPlugin';
const processAssetsOptions = {
    name: PLUGIN_NAME,
    stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
};

module.exports = class TampermonkeyHeaderPlugin {
    constructor({ resolveHeader = () => '' }) {
        this.resolveHeader = resolveHeader;
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
            compilation.hooks.processAssets.tap(processAssetsOptions, () => {
                for (const chunk of compilation.chunks) {
                    for (const file of chunk.files) {
                        let header = this.resolveHeader(chunk.name);
                        compilation.assets[file] = new ConcatSource(header, '\n\n', compilation.assets[file]);
                    }
                }
            }
            )
        })
    };
}