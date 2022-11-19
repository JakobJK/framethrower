-- Verify flipr:framethrower.extension.uuid-ossp on pg

BEGIN;

  SELECT 1/COUNT(*)
  FROM pg_extension
  WHERE extname='uuid-ossp';

ROLLBACK;
