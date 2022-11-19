-- Verify flipr:framethrower.role.framethrower_postgraphile on pg

BEGIN;

  SELECT 1/count(*)
  FROM pg_roles
  WHERE rolname='framethrower_postgraphile';

ROLLBACK;
