from __future__ import annotations
import argparse
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
EXCLUDE_DIRS = {"dist", ".git", ".github", "tools"}
SOURCE_SUFFIXES = {".jpg"}


def should_skip(path: Path) -> bool:
    rel = path.relative_to(ROOT)
    if any(part in EXCLUDE_DIRS for part in rel.parts):
        return True
    # Keep the OG jpg, but drop large source photography after optimized WebP variants were generated.
    if path.suffix.lower() in SOURCE_SUFFIXES and path.name != "og-cover.jpg":
        return True
    if path.name.endswith("-source.webp"):
        return True
    if path.suffix.lower() == ".md":
        return True
    return False


def main() -> None:
    parser = argparse.ArgumentParser(description="Build the static PulseDesk site for GitHub Pages.")
    parser.add_argument("--site-url", required=True, help="Public root URL, e.g. https://usuario.github.io/pulsedesk")
    args = parser.parse_args()
    site_url = args.site_url.rstrip("/")

    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)

    for path in ROOT.rglob("*"):
        if should_skip(path):
            continue
        rel = path.relative_to(ROOT)
        target = DIST / rel
        if path.is_dir():
            target.mkdir(parents=True, exist_ok=True)
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, target)

    replace_exts = {".html", ".xml", ".txt", ".webmanifest"}
    for path in DIST.rglob("*"):
        if path.is_file() and path.suffix.lower() in replace_exts:
            text = path.read_text(encoding="utf-8")
            path.write_text(text.replace("__BASE_URL__", site_url), encoding="utf-8")

    (DIST / ".nojekyll").write_text("", encoding="utf-8")
    print(f"Built {DIST} for {site_url}")


if __name__ == "__main__":
    main()
