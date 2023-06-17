const fs = require('fs');
const path = require('path');
const reactDocgenTypescript = require('react-docgen-typescript');

// Config for react-docgen-typescript
const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
};

// Function to get absolute path of a file/folder
const getAbsolutePath = (relativePath) => path.resolve(__dirname, relativePath);

// Function to write data to a file
const writeToFile = (filePath, data) =>
  fs.writeFileSync(getAbsolutePath(filePath), JSON.stringify(data, null, 2), 'utf8');

// Function to recursively get all .ts and .tsx files in a directory
const getAllTsFiles = (folderPath) => {
  let results = [];
  const list = fs.readdirSync(folderPath);
  list.forEach((file) => {
    file = folderPath + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getAllTsFiles(file));
    } else {
      /* Is a file */
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
};

// Function to generate component props JSON
const generateComponentProps = () => {
  const componentFolderPath = './src/components';  // Path to your components
  const componentFiles = getAllTsFiles(getAbsolutePath(componentFolderPath));
  const parser = reactDocgenTypescript.withCustomConfig('./tsconfig.json', options);

  const componentProps = componentFiles.map((file) => {
    const componentInfo = parser.parse(file);
    return componentInfo;
  });

  // Flatten the array and remove empty entries
  const flatComponentProps = [].concat(...componentProps).filter(Boolean);

  // Write to the public folder instead
  writeToFile('./public/componentProps.json', flatComponentProps);
};

generateComponentProps();
console.log('Generated componentProps.json');
