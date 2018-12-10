'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import AutoCompleteProvide from "./autocomplete-provider";
import HoverProvider from "./hoverprovider";

// this method is called when your extension is activated
// the extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const language = "yorlang";

    const autocomplete = vscode.languages.registerCompletionItemProvider(language, new AutoCompleteProvider());
    const hoverProvider = vscode.languages.registerHoverProvider(language, new HoverProvider());

    context.subscriptions.push(autocomplete);
    context.subscriptions.push(hoverProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
