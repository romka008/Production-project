import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
    const layers = ["app", "shared", "entities", "feature", "widgets", "pages"];

    return layers.some(layer => value.startsWith(layer));
};

files.forEach(sourceFile => {
    const importDeclaration = sourceFile.getImportDeclarations();
    importDeclaration.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@${value}`);
        }
    });
});

project.save();
