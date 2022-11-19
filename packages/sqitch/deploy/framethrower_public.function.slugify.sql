-- Deploy flipr:framethrower_public.function.slugify to pg

BEGIN;

CREATE OR REPLACE FUNCTION framethrower_public.slugify("value" text)
  RETURNS TEXT AS $$
    WITH "unaccented" as (
      SELECT unaccent("value") AS "value"
    ),
    "lowercase" AS (
      SELECT lower("value") AS "value"
      FROM "unaccented"
    ),
    "removed_quotes" AS (
      SELECT regexp_replace("value", '[''"]+', '', 'gi') AS "value"
      FROM "lowercase"
    ),
    "hyphenated" AS (
      SELECT regexp_replace("value", '[^a-z0-9\\-_]+', '-', 'gi') AS "value"
      FROM "removed_quotes"
    ),
    "trimmed" AS (
      SELECT regexp_replace(regexp_replace("value", '\-+$', ''), '^\-', '') AS "value"
      FROM "hyphenated"
    )
    SELECT "value" FROM "trimmed";
  $$ LANGUAGE SQL strict immutable;

grant execute on function framethrower_public.slugify(text) to framethrower_admin;

COMMIT;
