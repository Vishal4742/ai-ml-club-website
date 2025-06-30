#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting optimization process...\n');

// Configuration
const config = {
  imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
  maxImageSize: 500 * 1024, // 500KB
  buildDir: 'dist',
  publicDir: 'public',
  srcDir: 'src'
};

// Utility functions
function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m', // Cyan
    success: '\x1b[32m', // Green
    warning: '\x1b[33m', // Yellow
    error: '\x1b[31m', // Red
    reset: '\x1b[0m'
  };
  
  console.log(`${colors[type]}${message}${colors.reset}`);
}

function checkFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function getFileExtension(filename) {
  return path.extname(filename).toLowerCase();
}

// Image optimization check
function checkImageOptimization() {
  log('📸 Checking image optimization...', 'info');
  
  const publicImages = path.join(config.publicDir, 'assets', 'images');
  const srcImages = path.join(config.srcDir, 'assets', 'images');
  
  let totalImages = 0;
  let largeImages = [];
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (config.imageExtensions.includes(getFileExtension(file))) {
        totalImages++;
        const size = stat.size;
        
        if (size > config.maxImageSize) {
          largeImages.push({
            path: filePath,
            size: size,
            sizeKB: (size / 1024).toFixed(2)
          });
        }
      }
    });
  }
  
  scanDirectory(publicImages);
  scanDirectory(srcImages);
  
  log(`Found ${totalImages} images`, 'success');
  
  if (largeImages.length > 0) {
    log(`⚠️  Found ${largeImages.length} large images:`, 'warning');
    largeImages.forEach(img => {
      log(`   ${img.path} (${img.sizeKB}KB)`, 'warning');
    });
    log('Consider optimizing these images for better performance', 'warning');
  } else {
    log('✅ All images are properly optimized', 'success');
  }
  
  return largeImages.length === 0;
}

// Bundle analysis
function analyzeBundle() {
  log('📦 Analyzing bundle size...', 'info');
  
  try {
    // Check if dist directory exists
    if (!fs.existsSync(config.buildDir)) {
      log('Build directory not found. Run "npm run build" first.', 'error');
      return false;
    }
    
    // Analyze JavaScript files
    const jsFiles = [];
    function scanJSFiles(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanJSFiles(filePath);
        } else if (file.endsWith('.js')) {
          jsFiles.push({
            name: file,
            path: filePath,
            size: stat.size,
            sizeKB: (stat.size / 1024).toFixed(2)
          });
        }
      });
    }
    
    scanJSFiles(config.buildDir);
    
    // Sort by size
    jsFiles.sort((a, b) => b.size - a.size);
    
    log('JavaScript bundle analysis:', 'success');
    jsFiles.forEach(file => {
      log(`   ${file.name}: ${file.sizeKB}KB`, 'info');
    });
    
    // Check for large bundles
    const largeBundles = jsFiles.filter(file => file.size > 500 * 1024); // 500KB
    if (largeBundles.length > 0) {
      log(`⚠️  Found ${largeBundles.length} large bundles`, 'warning');
      log('Consider code splitting for better performance', 'warning');
    }
    
    return largeBundles.length === 0;
  } catch (error) {
    log(`Error analyzing bundle: ${error.message}`, 'error');
    return false;
  }
}

// Performance checks
function checkPerformance() {
  log('⚡ Running performance checks...', 'info');
  
  try {
    // Check if Lighthouse CI is available
    try {
      execSync('npx lighthouse-ci --help', { stdio: 'ignore' });
      log('Running Lighthouse CI...', 'info');
      execSync('npx lighthouse-ci autorun', { stdio: 'inherit' });
    } catch (error) {
      log('Lighthouse CI not available. Install with: npm install -g @lhci/cli', 'warning');
    }
    
    // Check bundle analyzer
    try {
      log('Running bundle analyzer...', 'info');
      execSync('npm run build:analyze', { stdio: 'inherit' });
    } catch (error) {
      log('Bundle analyzer failed. Make sure vite-bundle-analyzer is installed.', 'warning');
    }
    
    return true;
  } catch (error) {
    log(`Error in performance checks: ${error.message}`, 'error');
    return false;
  }
}

// Code quality checks
function checkCodeQuality() {
  log('🔍 Running code quality checks...', 'info');
  
  try {
    // Run ESLint
    log('Running ESLint...', 'info');
    execSync('npm run lint', { stdio: 'inherit' });
    
    // Run TypeScript check
    log('Running TypeScript check...', 'info');
    execSync('npm run type-check', { stdio: 'inherit' });
    
    // Check formatting
    log('Checking code formatting...', 'info');
    execSync('npm run format:check', { stdio: 'inherit' });
    
    log('✅ Code quality checks passed', 'success');
    return true;
  } catch (error) {
    log(`❌ Code quality checks failed: ${error.message}`, 'error');
    return false;
  }
}

// Generate optimization report
function generateReport(results) {
  log('\n📊 Optimization Report', 'info');
  log('====================', 'info');
  
  const totalChecks = Object.keys(results).length;
  const passedChecks = Object.values(results).filter(Boolean).length;
  
  log(`Total checks: ${totalChecks}`, 'info');
  log(`Passed: ${passedChecks}`, 'success');
  log(`Failed: ${totalChecks - passedChecks}`, 'error');
  
  if (passedChecks === totalChecks) {
    log('\n🎉 All optimizations passed! Your app is ready for production.', 'success');
  } else {
    log('\n⚠️  Some optimizations need attention. Check the warnings above.', 'warning');
  }
  
  // Save report to file
  const report = {
    timestamp: new Date().toISOString(),
    results,
    summary: {
      total: totalChecks,
      passed: passedChecks,
      failed: totalChecks - passedChecks
    }
  };
  
  fs.writeFileSync('optimization-report.json', JSON.stringify(report, null, 2));
  log('📄 Report saved to optimization-report.json', 'info');
}

// Main optimization function
async function optimize() {
  const results = {};
  
  try {
    // Run all optimization checks
    results.imageOptimization = checkImageOptimization();
    results.bundleAnalysis = analyzeBundle();
    results.performanceChecks = checkPerformance();
    results.codeQuality = checkCodeQuality();
    
    // Generate report
    generateReport(results);
    
  } catch (error) {
    log(`❌ Optimization failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run optimization if this script is executed directly
if (require.main === module) {
  optimize();
}

module.exports = {
  optimize,
  checkImageOptimization,
  analyzeBundle,
  checkPerformance,
  checkCodeQuality
}; 