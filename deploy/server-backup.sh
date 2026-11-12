#!/bin/sh
set -eu
umask 077
cd /opt/takina-blog/runtime
backup_dir=/opt/takina-blog/backups
timestamp=$(date -u +%Y%m%d-%H%M%S)
destination="$backup_dir/waline-$timestamp.dump"
test -d "$backup_dir"
docker compose --env-file .env --env-file images.env -f server.compose.yml exec -T postgres \
    pg_dump --username waline --dbname waline --format custom > "$destination.partial"
test -s "$destination.partial"
mv "$destination.partial" "$destination"
echo "Created protected PostgreSQL backup: $destination"
# No automatic deletion; retention is an owner decision.
