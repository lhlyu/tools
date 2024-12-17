import type * as monaco from 'monaco-editor'

const useEditor = () => {
    const siteStore = useSiteStore()

    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
        fontWeight: 'bolder',
        theme: siteStore.theme === 'light' ? 'vitesse-light' : 'dracula',
        renderWhitespace: 'selection',
        scrollBeyondLastLine: false,
        tabSize: 2,
        lineDecorationsWidth: 5,
        lineNumbersMinChars: 4,
        automaticLayout: true,
        acceptSuggestionOnCommitCharacter: false,
        overviewRulerBorder: false,
        acceptSuggestionOnEnter: 'off',
        contextmenu: false,
        showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
        autoSurround: 'never',
        stickyScroll: {
            enabled: false,
        },
        colorDecorators: true,
        quickSuggestions: false, // 禁用快速建议
        parameterHints: { enabled: false }, // 禁用参数提示
        suggestOnTriggerCharacters: false, // 禁用触发字符时的建议
        suggest: {
            showWords: false, // 禁用单词提示
            showClasses: false, // 禁用类提示
            showFunctions: false, // 禁用函数提示
            showVariables: false, // 禁用变量提示
            showModules: false, // 禁用模块提示
        },
        scrollbar: {
            // 滚动条设置
            verticalScrollbarSize: 8, // 竖滚动条
            horizontalScrollbarSize: 8, // 横滚动条
            useShadows: false,
        },
        minimap: {
            // 关闭小地图
            enabled: false,
        },
    }

    return {
        options,
    }
}

export default useEditor
