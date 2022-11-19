-- Verify flipr:framethrower.extension.unaccent on pg

BEGIN;

  SELECT 1/COUNT(*)
  FROM pg_extension
  WHERE extname='unaccent';

ROLLBACK;
