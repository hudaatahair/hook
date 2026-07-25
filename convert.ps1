$dir = 'c:\Users\HP\Downloads\stroke  care\assets\images'
$files = [ordered]@{
    'Finger Grip Practice' = 'finger_grip.jpg'
    'Shoulder Stretch'     = 'shoulder_stretch.jpg'
    'Wrist Rotation'       = 'wrist_rotation.jpg'
    'Seated Ankle Pumps'   = 'ankle_pumps.jpg'
    'Knee Extension'       = 'knee_extension.jpg'
}

$sb = [System.Text.StringBuilder]::new()
[void]$sb.AppendLine('window.EMBEDDED_EXERCISE_IMAGES = {')

foreach ($key in $files.Keys) {
    $file = $files[$key]
    $p = Join-Path $dir $file
    if (Test-Path $p) {
        $bytes = [System.IO.File]::ReadAllBytes($p)
        $b64 = [Convert]::ToBase64String($bytes)
        [void]$sb.AppendLine("  '$key': 'data:image/jpeg;base64,$b64',")
    }
}

[void]$sb.AppendLine('};')
[System.IO.File]::WriteAllText('c:\Users\HP\Downloads\stroke  care\assets\images_base64.js', $sb.ToString())
Write-Host "Done generating images_base64.js"
