// Name: More Operators
// ID: moreoperators
// Description: Extra string, line-reading, math, and logic operators.
// By: davidbfdiawseriosly-source <https://github.com/davidbfdiawseriosly-source>
// License: MIT

(function(Scratch) {
    'use strict';

    class MoreOperators {
        constructor() {
            this.lines = [];
        }

        getInfo() {
            return {
                id: 'moreoperators',
                name: 'More Operators',
                color1: '#59C059',
                color2: '#46B946',
                color3: '#389438',
                blocks: [
                    // --- LINE READER ---
                    {
                        opcode: 'loadText',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'load text [TEXT]',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Line 1\nLine 2' }
                        }
                    },
                    {
                        opcode: 'getLineCount',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'line count'
                    },
                    {
                        opcode: 'getLineAt',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'line at [INDEX]',
                        arguments: {
                            INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                        }
                    },
                    {
                        opcode: 'findLineContaining',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'first line number containing [QUERY]',
                        arguments: {
                            QUERY: { type: Scratch.ArgumentType.STRING, defaultValue: 'Line 2' }
                        }
                    },
                    {
                        opcode: 'getAllLinesAsJson',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'all lines as JSON list'
                    },

                    '---',

                    // --- SLICING & PARSING ---
                    {
                        opcode: 'textFromCharToEnd',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get text from character [START] to end of [TEXT]',
                        arguments: {
                            START: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7 },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello PenguinMod!' }
                        }
                    },
                    {
                        opcode: 'textBetweenChars',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'substring from [START] to [END] of [TEXT]',
                        arguments: {
                            START: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                            END: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'PenguinMod' }
                        }
                    },
                    {
                        opcode: 'getTextBefore',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'text before [DELIM] in [TEXT]',
                        arguments: {
                            DELIM: { type: Scratch.ArgumentType.STRING, defaultValue: '=' },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'version=1.0.4' }
                        }
                    },
                    {
                        opcode: 'getTextAfter',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'text after [DELIM] in [TEXT]',
                        arguments: {
                            DELIM: { type: Scratch.ArgumentType.STRING, defaultValue: '=' },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'version=1.0.4' }
                        }
                    },
                    {
                        opcode: 'splitItem',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'item [INDEX] of [TEXT] split by [SEP]',
                        arguments: {
                            INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple,banana,cherry' },
                            SEP: { type: Scratch.ArgumentType.STRING, defaultValue: ',' }
                        }
                    },

                    '---',

                    // --- TEXT TRANSFORMATION & SEARCH ---
                    {
                        opcode: 'replaceAllText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'replace all [OLD] with [NEW] in [TEXT]',
                        arguments: {
                            OLD: { type: Scratch.ArgumentType.STRING, defaultValue: 'cat' },
                            NEW: { type: Scratch.ArgumentType.STRING, defaultValue: 'penguin' },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'cool cat' }
                        }
                    },
                    {
                        opcode: 'toUpperCaseText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'UPPERCASE [TEXT]',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' }
                        }
                    },
                    {
                        opcode: 'toLowerCaseText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'lowercase [TEXT]',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'HELLO' }
                        }
                    },
                    {
                        opcode: 'trimWhitespace',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'trim spaces from ends of [TEXT]',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '   hello   ' }
                        }
                    },
                    {
                        opcode: 'reverseText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'reverse [TEXT]',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Penguin' }
                        }
                    },
                    {
                        opcode: 'repeatText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'repeat [TEXT] [TIMES] times',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'ha' },
                            TIMES: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
                        }
                    },
                    {
                        opcode: 'indexOfText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'position of [SEARCH] in [TEXT]',
                        arguments: {
                            SEARCH: { type: Scratch.ArgumentType.STRING, defaultValue: 'Mod' },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'PenguinMod' }
                        }
                    },
                    {
                        opcode: 'countOccurrences',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'count how many [SEARCH] in [TEXT]',
                        arguments: {
                            SEARCH: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' },
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' }
                        }
                    },

                    '---',

                    // --- MATH & LOGIC ---
                    {
                        opcode: 'powerOf',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[BASE] ^ [EXP]',
                        arguments: {
                            BASE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
                            EXP: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }
                        }
                    },
                    {
                        opcode: 'clampNumber',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'clamp [NUM] between [MIN] and [MAX]',
                        arguments: {
                            NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 150 },
                            MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
                        }
                    },
                    {
                        opcode: 'lerpNumber',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'lerp from [A] to [B] by [T]',
                        arguments: {
                            A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                            B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
                            T: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
                        }
                    },
                    {
                        opcode: 'startsWith',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[TEXT] starts with [PREFIX]?',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'sysinfo.txt' },
                            PREFIX: { type: Scratch.ArgumentType.STRING, defaultValue: 'sys' }
                        }
                    },
                    {
                        opcode: 'endsWith',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[TEXT] ends with [SUFFIX]?',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'sysinfo.txt' },
                            SUFFIX: { type: Scratch.ArgumentType.STRING, defaultValue: '.txt' }
                        }
                    },
                    {
                        opcode: 'isEven',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'is [NUM] even?',
                        arguments: {
                            NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }
                        }
                    },
                    {
                        opcode: 'ifThenElse',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'if [COND] then [TRUE_VAL] else [FALSE_VAL]',
                        arguments: {
                            COND: { type: Scratch.ArgumentType.BOOLEAN },
                            TRUE_VAL: { type: Scratch.ArgumentType.STRING, defaultValue: 'Yes' },
                            FALSE_VAL: { type: Scratch.ArgumentType.STRING, defaultValue: 'No' }
                        }
                    },
                    {
                        opcode: 'newLineChar',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'newline character'
                    }
                ]
            };
        }

        // --- LINE READER ---
        loadText(args) {
            this.lines = String(args.TEXT || '').split(/\r?\n/);
        }
        getLineCount() {
            return this.lines.length;
        }
        getLineAt(args) {
            const index = Math.floor(Number(args.INDEX)) - 1;
            return (index < 0 || index >= this.lines.length) ? '' : this.lines[index];
        }
        findLineContaining(args) {
            const query = String(args.QUERY);
            if (!query) return 0;
            for (let i = 0; i < this.lines.length; i++) {
                if (this.lines[i].includes(query)) return i + 1;
            }
            return 0;
        }
        getAllLinesAsJson() {
            return JSON.stringify(this.lines);
        }

        // --- SLICING & PARSING ---
        textFromCharToEnd(args) {
            const text = String(args.TEXT);
            const start = Math.max(1, Math.floor(Number(args.START))) - 1;
            return text.slice(start);
        }
        textBetweenChars(args) {
            const text = String(args.TEXT);
            const start = Math.max(1, Math.floor(Number(args.START))) - 1;
            const end = Math.max(0, Math.floor(Number(args.END)));
            return text.slice(start, end);
        }
        getTextBefore(args) {
            const text = String(args.TEXT);
            const delim = String(args.DELIM);
            if (!delim) return '';
            const idx = text.indexOf(delim);
            return idx === -1 ? '' : text.slice(0, idx);
        }
        getTextAfter(args) {
            const text = String(args.TEXT);
            const delim = String(args.DELIM);
            if (!delim) return text;
            const idx = text.indexOf(delim);
            return idx === -1 ? '' : text.slice(idx + delim.length);
        }
        splitItem(args) {
            const parts = String(args.TEXT).split(String(args.SEP));
            const index = Math.floor(Number(args.INDEX)) - 1;
            return (index < 0 || index >= parts.length) ? '' : parts[index];
        }

        // --- TEXT TRANSFORMATION & SEARCH ---
        replaceAllText(args) {
            const text = String(args.TEXT);
            const oldStr = String(args.OLD);
            return oldStr ? text.split(oldStr).join(String(args.NEW)) : text;
        }
        toUpperCaseText(args) {
            return String(args.TEXT).toUpperCase();
        }
        toLowerCaseText(args) {
            return String(args.TEXT).toLowerCase();
        }
        trimWhitespace(args) {
            return String(args.TEXT).trim();
        }
        reverseText(args) {
            return String(args.TEXT).split('').reverse().join('');
        }
        repeatText(args) {
            const times = Math.max(0, Math.floor(Number(args.TIMES)));
            return String(args.TEXT).repeat(times);
        }
        indexOfText(args) {
            const idx = String(args.TEXT).indexOf(String(args.SEARCH));
            return idx === -1 ? 0 : idx + 1;
        }
        countOccurrences(args) {
            const search = String(args.SEARCH);
            return search ? String(args.TEXT).split(search).length - 1 : 0;
        }

        // --- MATH & LOGIC ---
        powerOf(args) {
            return Math.pow(Number(args.BASE) || 0, Number(args.EXP) || 0);
        }
        clampNumber(args) {
            const num = Number(args.NUM) || 0;
            const min = Number(args.MIN) || 0;
            const max = Number(args.MAX) || 0;
            return Math.min(Math.max(num, min), max);
        }
        lerpNumber(args) {
            const a = Number(args.A) || 0;
            const b = Number(args.B) || 0;
            const t = Number(args.T) || 0;
            return a + (b - a) * t;
        }
        startsWith(args) {
            return String(args.TEXT).startsWith(String(args.PREFIX));
        }
        endsWith(args) {
            return String(args.TEXT).endsWith(String(args.SUFFIX));
        }
        isEven(args) {
            return (Number(args.NUM) || 0) % 2 === 0;
        }
        ifThenElse(args) {
            return args.COND ? args.TRUE_VAL : args.FALSE_VAL;
        }
        newLineChar() {
            return '\n';
        }
    }

    Scratch.extensions.register(new MoreOperators());
})(Scratch);
