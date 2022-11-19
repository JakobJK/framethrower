-- Verify flipr:framethrower.role.framethrower_anonymous on pg

BEGIN;

  SELECT 1/count(*)
  FROM pg_roles
  WHERE rolname='framethrower_anonymous';

ROLLBACK;

