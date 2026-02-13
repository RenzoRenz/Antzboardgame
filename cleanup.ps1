$files = @(
    "c:\Users\Desktop\Desktop\Antzboardgame\project\boardgame\index.html",
    "c:\Users\Desktop\Desktop\Antzboardgame\project\about\index.html",
    "c:\Users\Desktop\Desktop\Antzboardgame\project\contact\index.html"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Remove duplicate preconnects
        $content = $content -replace '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>', ''
        
        Set-Content $file $content -Encoding UTF8
        Write-Host "Cleaned: $file"
    }
}
