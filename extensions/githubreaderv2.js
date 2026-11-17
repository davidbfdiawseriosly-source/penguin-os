// Name: Github Repo Reader
// ID: githubreader
// Description: An extension to read files from any github repo.
// By: davidbfdiawseriosly-source <https://github.com>
// License: MIT

(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must run unsandboxed.');
    }

    class YourExtensionName {
        constructor() {
            // 1. CREATE A VARIABLE TO HOLD THE FILE CONTENT IN MEMORY
            this.fileContent = '';
        }

        getInfo() {
            return {
                id: 'githubreader',
                name: 'Github Repo Reader',
                blocks: [
                    {
                        opcode: 'myCommandBlock',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'get file: [filepath] from repo [repo] owner [repoowner]',
                        arguments: {
                            filepath: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'README.md'
                            },
                            repo: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'test-repo'
                            },
                            repoowner: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'zpqrtbnk'
                            }
                        }
                    },
                    // 2. ADD A REPORTER BLOCK TO RETURN THE VARIABLE
                    {
                        opcode: 'getLastFileContent',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'last file content'
                    },
                    {
                        opcode: 'getfile',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'print [TEXT] to console',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello world!'
                            }
                        }
                    }
                ]
            };
        }

        async myCommandBlock(args) {
            const file = String(args.filepath).trim();
            const repo = String(args.repo).trim();
            const owner = String(args.repoowner).trim();

            // Dynamic timestamp query parameter to bypass the 5-minute GitHub CDN cache
            const cacheBuster = new Date().getTime();
            const url = `https://githubusercontent.com{owner}/${repo}/HEAD/${file}?t=${cacheBuster}`;

            try {
                const response = await Scratch.fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                // 3. SAVE THE TEXT INTO OUR CLASS VARIABLE
                this.fileContent = await response.text();
                console.log("File loaded successfully into variable!");

            } catch (err) {
                console.error("Failed to get file from GitHub:", err.message);
                this.fileContent = "Error loading file!";
            }
        }

        // 4. THIS FUNCTION RUNS WHEN YOU USE THE REPORTER BLOCK
        getLastFileContent(args) {
            return this.fileContent; // Returns whatever text was saved
        }

        getfile(args) {
            console.log(args.TEXT);
        }
    }

    Scratch.extensions.register(new YourExtensionName());
})(Scratch);
