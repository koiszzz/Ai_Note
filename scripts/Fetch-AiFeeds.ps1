param(
  [string]$VaultPath = 'C:\Users\hsysa\Documents\Obsidian Vault',
  [int]$LimitPerFeed = 8,
  [switch]$IncludeContent,
  [switch]$Rebuild
)

$inbox = Join-Path $VaultPath 'AI-Inbox.md'
if (-not (Test-Path -LiteralPath $inbox)) { throw ('Missing inbox: ' + $inbox) }

$feeds = @(
  @{ Name = 'Hugging Face Blog'; Url = 'https://huggingface.co/blog/feed.xml' }
  @{ Name = 'arXiv cs.AI'; Url = 'https://export.arxiv.org/rss/cs.AI' }
  @{ Name = 'arXiv cs.LG'; Url = 'https://export.arxiv.org/rss/cs.LG' }
  @{ Name = 'Google Blog'; Url = 'https://blog.google/feed/' }
)

$existing = if ($Rebuild) { '# AI Inbox' } else { Get-Content -LiteralPath $inbox -Raw }
$date = Get-Date -Format 'yyyy-MM-dd'
$out = "`r`n## $date`r`n"

function Get-ArticleExcerpt([string]$Url) {
  try {
    $page = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 30
    $html = [string]$page.Content
    $html = [regex]::Replace($html, '(?is)<(script|style|nav|header|footer|aside)[^>]*>.*?</\1>', ' ')
    $html = [regex]::Replace($html, '(?is)<[^>]+>', ' ')
    $html = [System.Net.WebUtility]::HtmlDecode($html)
    $html = [regex]::Replace($html, '\s+', ' ').Trim()
    if ($html.Length -gt 4000) { return $html.Substring(0, 4000) + '...' }
    return $html
  } catch { return '' }
}

foreach ($feed in $feeds) {
  try { $xml = Invoke-RestMethod -Uri $feed.Url -TimeoutSec 30 }
  catch { Write-Warning ('Skipped ' + $feed.Name + ': ' + $_.Exception.Message); continue }
  $items = @($xml | Where-Object { $_.Name -eq 'item' } | Select-Object -First $LimitPerFeed)
  if ($items.Count -eq 0) { $items = @($xml | Where-Object { $_.Name -eq 'entry' } | Select-Object -First $LimitPerFeed) }
  foreach ($item in $items) {
    $title = ([string]$item.title).Trim()
    $link = [string]$item.link
    if ([string]::IsNullOrWhiteSpace($link)) { $link = [string]$item.link.href }
    if ([string]::IsNullOrWhiteSpace($title) -or $existing.Contains($link)) { continue }
    $summary = ([string]$item.description).Trim() -replace '\s+', ' '
    if ($summary.Length -gt 280) { $summary = $summary.Substring(0, 280) + '...' }
    $published = [string]$item.pubDate
    if ([string]::IsNullOrWhiteSpace($published)) { $published = [string]$item.published }
    if ([string]::IsNullOrWhiteSpace($published)) { $published = [string]$item.updated }
    $content = ''
    if ($IncludeContent) { $content = Get-ArticleExcerpt $link }
    $out += "`r`n### $title`r`n- source: $($feed.Name)`r`n- published: $published`r`n- status: To Read`r`n- url: $link`r`n- tags: #AI/Inbox`r`n- summary: $summary`r`n"
    if (-not [string]::IsNullOrWhiteSpace($content)) { $out += "`r`n#### Content excerpt`r`n$content`r`n" }
  }
}

if ($out -ne "`r`n## $date`r`n") {
  if ($Rebuild) { Set-Content -LiteralPath $inbox -Value ($existing + $out) -Encoding UTF8 }
  else { Add-Content -LiteralPath $inbox -Value $out -Encoding UTF8 }
}
Write-Output ('AI inbox updated: ' + $inbox)
