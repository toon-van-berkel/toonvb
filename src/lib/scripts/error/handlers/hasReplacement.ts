import listHasReplacement from "../../data/handlers/hasreplacement.json" with { type: "json" };

type ReplacementEntry = [oldPath: string, newPath: string];

type ReplacementResult = {
    hasReplacement: boolean;
    replacement: string | null;
};

const replacements = listHasReplacement as ReplacementEntry[];

// Implementation for checking if the page has a replacement
export function checkIfPageHasReplacement(url: string): ReplacementResult {
    const match = replacements.find(([path]) => path === url);
    const replacement = match?.[1] ?? null;

    return {
        hasReplacement: replacement !== null,
        replacement
    };
}