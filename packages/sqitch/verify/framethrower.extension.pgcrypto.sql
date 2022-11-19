-- Verify flipr:framethrower.extension.pgcrypto on pg

BEGIN;

  SELECT 1/COUNT(*)
  FROM pg_extension
  WHERE extname='pgcrypto';

ROLLBACK;
