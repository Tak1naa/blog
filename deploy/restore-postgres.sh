#!/usr/bin/env sh
set -eu

dump_file="${1:?usage: restore-postgres.sh path/to/waline.dump}"
test -f "$dump_file"

echo "This will replace the Waline database contents. Type RESTORE to continue:"
read -r confirmation
test "$confirmation" = "RESTORE"

docker compose stop waline
docker compose exec -T postgres dropdb --if-exists --username "${POSTGRES_USER:-waline}" "${POSTGRES_DB:-waline}"
docker compose exec -T postgres createdb --username "${POSTGRES_USER:-waline}" "${POSTGRES_DB:-waline}"
docker compose exec -T postgres pg_restore \
  --username "${POSTGRES_USER:-waline}" \
  --dbname "${POSTGRES_DB:-waline}" \
  --clean --if-exists < "$dump_file"
docker compose start waline
