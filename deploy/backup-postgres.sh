#!/usr/bin/env sh
set -eu

backup_dir="${1:-./backups}"
timestamp="$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

docker compose exec -T postgres pg_dump \
  --username "${POSTGRES_USER:-waline}" \
  --dbname "${POSTGRES_DB:-waline}" \
  --format custom > "$backup_dir/waline-$timestamp.dump"

find "$backup_dir" -type f -name 'waline-*.dump' -mtime +14 -delete
echo "Backup written to $backup_dir/waline-$timestamp.dump"
