$files = @(
    "c:\Users\Desktop\Desktop\Antzboardgame\project\boardgame\index.html",
    "c:\Users\Desktop\Desktop\Antzboardgame\project\about\index.html",
    "c:\Users\Desktop\Desktop\Antzboardgame\project\contact\index.html"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Add preconnect before first font link
        $content = $content -replace '(<link href="https://fonts.googleapis.com)', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>$1'
        
        # Make fonts load async
        $content = $content -replace 'display=swap" rel="stylesheet"/>', 'display=swap" rel="stylesheet" media="print" onload="this.media=''all''"/>'
        
        # Defer Tailwind
        $content = $content -replace '(<script src="https://cdn.tailwindcss.com[^>]+)></script>', '$1 defer></script>'
        
        Set-Content $file $content -Encoding UTF8
        Write-Host "Fixed: $file"
    }
}
