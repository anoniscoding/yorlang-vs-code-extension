'use strict';
import * as vscode from 'vscode';



export default class HoverProvider implements HoverProvider {
    
    public provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Hover> {
        
        return Promise.resolve(new vscode.Hover("Hello"));
    }
}