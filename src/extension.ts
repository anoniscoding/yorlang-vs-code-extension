'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// the extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.languages.registerCompletionItemProvider("yorlang", new YorlangAutoComplete());

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

class YorlangAutoComplete implements vscode.CompletionItemProvider {
    
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const tí = new vscode.CompletionItem("tí", vscode.CompletionItemKind.Keyword);
        const nígbàtí = new vscode.CompletionItem("nígbàtí", vscode.CompletionItemKind.Keyword);
        const sọpé = new vscode.CompletionItem("sọpé", vscode.CompletionItemKind.Keyword);
        const tàbí = new vscode.CompletionItem("tàbí", vscode.CompletionItemKind.Keyword);
        const òótó = new vscode.CompletionItem("òótó", vscode.CompletionItemKind.Keyword);
        const iró = new vscode.CompletionItem("iró", vscode.CompletionItemKind.Keyword);
        const iṣé = new vscode.CompletionItem("iṣé", vscode.CompletionItemKind.Keyword);
        const fún = new vscode.CompletionItem("fún", vscode.CompletionItemKind.Keyword);
        const padà = new vscode.CompletionItem("padà", vscode.CompletionItemKind.Keyword);
        const kúrò = new vscode.CompletionItem("kúrò", vscode.CompletionItemKind.Keyword);
        const ṣé = new vscode.CompletionItem("ṣé", vscode.CompletionItemKind.Keyword);
        const yí = new vscode.CompletionItem("yí", vscode.CompletionItemKind.Keyword);
        const ẹjó = new vscode.CompletionItem("ẹjó", vscode.CompletionItemKind.Keyword);
        const padàsí = new vscode.CompletionItem("ṣé", vscode.CompletionItemKind.Keyword);

        return [tí, nígbàtí, sọpé, tàbí, òótó, iró, iṣé, fún, padà, kúrò, ṣé, yí, ẹjó, padàsí]
    }
}