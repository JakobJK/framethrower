-- Verify flipr:framethrower_hidden on pg

BEGIN;

  SELECT 1/count(*)
  FROM information_schema.schemata
  WHERE schema_name = 'framethrower_hidden';

ROLLBACK;
