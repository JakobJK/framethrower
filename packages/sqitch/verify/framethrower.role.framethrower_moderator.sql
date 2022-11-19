-- Verify flipr:framethrower.role.framethrower_moderator on pg

BEGIN;

  SELECT 1/count(*)
  FROM pg_roles
  WHERE rolname='framethrower_moderator';

ROLLBACK;

