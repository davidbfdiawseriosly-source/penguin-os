// Name: Github Repo Reader
// ID: githubreader
// Description: A extension to read files from any github repo.
// By: davidbfdiawseriosly-source <https://github.com/davidbfdiawseriosly-source>
// License: MIT

(function(Scratch) {
    'use strict';

    // Optional: Add this ONLY if your extension needs internet access (fetch) or browser APIs
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must run unsandboxed.');
    }

    class YourExtensionName {
        getInfo() {
            return {
                id: 'githubreader', // Must match the // ID: comment above!
                name: 'Github Repo Reader',
                blocks: [
                    {
    opcode: 'myCommand',
    blockType: Scratch.BlockType.COMMAND,
    text: 'do something with [INPUT]',
    arguments: {
        INPUT: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'hello'
        }
    }
}
                ]
            };
        }

        // Block functions go here
    }

    Scratch.extensions.register(new YourExtensionName());
})(Scratch);
