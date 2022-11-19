-- Verify flipr:framethrower.role.framethrower_admin on pg

BEGIN;

  SELECT 1/count(*)
  FROM pg_roles
  WHERE rolname='framethrower_admin';

ROLLBACK;
