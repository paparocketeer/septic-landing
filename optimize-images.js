const fs = require('fs');
const path = require('path');

// Функция для получения размера файла в MB
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Функция для поиска больших изображений
function findLargeImages(dir, maxSizeMB = 5) {
  const largeImages = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const sizeMB = parseFloat(getFileSizeInMB(filePath));
        if (sizeMB > maxSizeMB) {
          largeImages.push({
            path: filePath,
            size: sizeMB
          });
        }
      }
    });
  }
  
  scanDirectory(dir);
  return largeImages;
}

// Найти большие изображения
const largeImages = findLargeImages('./public');

console.log('Большие изображения (>5MB):');
largeImages.forEach(img => {
  console.log(`${img.path}: ${img.size}MB`);
});

if (largeImages.length > 0) {
  console.log('\nРекомендации:');
  console.log('1. Используйте инструменты для сжатия изображений');
  console.log('2. Рассмотрите использование WebP формата');
  console.log('3. Добавьте большие файлы в .gitignore и используйте Git LFS');
}
