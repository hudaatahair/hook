Add-Type -AssemblyName System.Drawing

$imgDir = 'c:\Users\HP\Downloads\stroke  care\assets\images'
$files = [ordered]@{
    'Finger Grip Practice' = 'finger_grip.jpg'
    'Shoulder Stretch'     = 'shoulder_stretch.jpg'
    'Wrist Rotation'       = 'wrist_rotation.jpg'
    'Seated Ankle Pumps'   = 'ankle_pumps.jpg'
    'Knee Extension'       = 'knee_extension.jpg'
}

function Resize-ImageB64($filePath) {
    $src = [System.Drawing.Image]::FromFile($filePath)
    $destWidth = 600
    $destHeight = 340
    $bmp = New-Object System.Drawing.Bitmap($destWidth, $destHeight)
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.DrawImage($src, 0, 0, $destWidth, $destHeight)
    
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $b64 = [Convert]::ToBase64String($ms.ToArray())
    
    $src.Dispose()
    $bmp.Dispose()
    $graph.Dispose()
    $ms.Dispose()
    
    return "data:image/jpeg;base64,$b64"
}

$sb = [System.Text.StringBuilder]::new()
[void]$sb.AppendLine('window.GEMINI_EXERCISE_IMAGES = {')

foreach ($key in $files.Keys) {
    $fileName = $files[$key]
    $fullPath = Join-Path $imgDir $fileName
    if (Test-Path $fullPath) {
        $b64Str = Resize-ImageB64 $fullPath
        [void]$sb.AppendLine("  '$key': '$b64Str',")
    }
}

[void]$sb.AppendLine('};')
[System.IO.File]::WriteAllText('c:\Users\HP\Downloads\stroke  care\assets\gemini_images.js', $sb.ToString())
Write-Host "Gemini exercise images successfully compiled into assets/gemini_images.js!"
