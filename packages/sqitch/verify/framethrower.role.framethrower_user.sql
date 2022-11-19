-- Verify flipr:framethrower.role.framethrower_user on pg

BEGIN;

  SELECT 1/count(*)
  FROM pg_roles
  WHERE rolname='framethrower_user';

ROLLBACK;
