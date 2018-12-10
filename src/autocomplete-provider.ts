'use strict';
import * as vscode from 'vscode';

export default class AutoCompleteProvider implements vscode.CompletionItemProvider {
    
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        const jẹ́kí = new vscode.CompletionItem("jẹ́kí", vscode.CompletionItemKind.Keyword);
        const jeki = new vscode.CompletionItem("jeki", vscode.CompletionItemKind.Keyword);
        const nígbàtí = new vscode.CompletionItem("nígbàtí", vscode.CompletionItemKind.Keyword);
        const nigbati = new vscode.CompletionItem("nigbati", vscode.CompletionItemKind.Keyword);
        const sọpé = new vscode.CompletionItem("sọpé", vscode.CompletionItemKind.Keyword);
        const sope = new vscode.CompletionItem("sope", vscode.CompletionItemKind.Keyword);
        const tàbí = new vscode.CompletionItem("tàbí", vscode.CompletionItemKind.Keyword);
        const tabi = new vscode.CompletionItem("tabi", vscode.CompletionItemKind.Keyword);
        const òótọ́ = new vscode.CompletionItem("òótọ́", vscode.CompletionItemKind.Keyword);
        const ooto = new vscode.CompletionItem("ooto", vscode.CompletionItemKind.Keyword);
        const irọ́ = new vscode.CompletionItem("irọ́", vscode.CompletionItemKind.Keyword);
        const iro = new vscode.CompletionItem("iro", vscode.CompletionItemKind.Keyword);
        const iṣẹ́ = new vscode.CompletionItem("iṣẹ́", vscode.CompletionItemKind.Keyword);
        const ise = new vscode.CompletionItem("ise", vscode.CompletionItemKind.Keyword);
        const fún = new vscode.CompletionItem("fún", vscode.CompletionItemKind.Keyword);
        const fun = new vscode.CompletionItem("fun", vscode.CompletionItemKind.Keyword);
        const padà = new vscode.CompletionItem("padà", vscode.CompletionItemKind.Keyword);
        const pada = new vscode.CompletionItem("pada", vscode.CompletionItemKind.Keyword);
        const kúrò = new vscode.CompletionItem("kúrò", vscode.CompletionItemKind.Keyword);
        const kuro = new vscode.CompletionItem("kuro", vscode.CompletionItemKind.Keyword);
        const ṣé = new vscode.CompletionItem("ṣé", vscode.CompletionItemKind.Keyword);
        const se = new vscode.CompletionItem("se", vscode.CompletionItemKind.Keyword);
        const yí = new vscode.CompletionItem("yí", vscode.CompletionItemKind.Keyword);
        const yi = new vscode.CompletionItem("yi", vscode.CompletionItemKind.Keyword);
        const irú = new vscode.CompletionItem("irú", vscode.CompletionItemKind.Keyword);
        const iru = new vscode.CompletionItem("iru", vscode.CompletionItemKind.Keyword);
        const padàsí = new vscode.CompletionItem("padàsí", vscode.CompletionItemKind.Keyword);
        const padasi = new vscode.CompletionItem("padasi", vscode.CompletionItemKind.Keyword);
        const gbewọlé = new vscode.CompletionItem("gbewọlé", vscode.CompletionItemKind.Keyword);
        const gbewole = new vscode.CompletionItem("gbewole", vscode.CompletionItemKind.Keyword);
        const wòkè = new vscode.CompletionItem("wòkè", vscode.CompletionItemKind.Keyword);
        const woke = new vscode.CompletionItem("woke", vscode.CompletionItemKind.Keyword);

        const síLẹ́tàkékeré = new vscode.CompletionItem("síLẹ́tàkékeré", vscode.CompletionItemKind.Function);
        const síLẹ́tàŃlá = new vscode.CompletionItem("síLẹ́tàŃlá", vscode.CompletionItemKind.Function);
        const ka = new vscode.CompletionItem("ka", vscode.CompletionItemKind.Function);
        const tèSíbí = new vscode.CompletionItem("tèSíbí", vscode.CompletionItemKind.Function);


        return [
            jẹ́kí, jeki, nígbàtí, nigbati, sọpé, sope, tàbí, tabi, òótọ́, ooto,
            irọ́, iro, iṣẹ́, ise, fún, fun, padà, pada, kúrò, kuro, ṣé, se, yí, yi, 
            irú, iru, padàsí, padasi, gbewọlé, gbewole, wòkè, woke, síLẹ́tàkékeré, ka, síLẹ́tàŃlá, tèSíbí
        ];
    }
}