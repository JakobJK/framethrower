-- Verify flipr:framethrower_public on pg

BEGIN;

  SELECT 1/count(*)
  FROM information_schema.schemata
  WHERE schema_name = 'framethrower_public';

ROLLBACK;
